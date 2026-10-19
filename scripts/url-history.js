const { JSDOM } = require('jsdom');
const { createHash } = require('crypto');

const MANIFEST = 'url-history.json';
const MARKER = '<!-- generated-url-history-redirect -->';
const DEFAULT_INPUT = '.cache/url-history/baseline.json';

function sourcePath(value) {
  if (typeof value !== 'string') throw new Error('URL history source must be a string');
  const normalized = value.replace(/^\.\//, '');
  if (!/^src\/(?:pages|main)\//.test(normalized) ||
      normalized.includes('\\') || normalized.split('/').some(part => !part || part === '.' || part === '..')) {
    throw new Error(`Invalid URL history source: ${value}`);
  }
  return normalized;
}

function urlPath(value) {
  if (typeof value !== 'string' || !/^\/(?:en|fr)\//.test(value) ||
      /[\\%?#\s<>"'\u0080-\uffff]/.test(value)) {
    throw new Error(`Invalid URL history path: ${value}`);
  }
  if (value.split('/').some((part, index, parts) =>
    part === '.' || part === '..' || (!part && index > 0 && index < parts.length - 1)) ||
      /[\u0000-\u001f\u007f]/.test(value) ||
      !(value.endsWith('/') || value.endsWith('.html'))) {
    throw new Error(`Unsafe or unsupported URL history path: ${value}`);
  }
  return value.endsWith('/index.html') ? value.slice(0, -10) : value;
}

function outputFile(url) {
  const normalized = urlPath(url);
  return normalized.slice(1) + (normalized.endsWith('/') ? 'index.html' : '');
}

function validateHistory(history) {
  if (!history || history.version !== 1 || !Array.isArray(history.pages) ||
      typeof history.revision !== 'string') {
    throw new Error('Invalid URL history manifest: expected version 1, revision and pages');
  }
  const sources = new Set();
  const owners = new Map();
  for (const page of history.pages) {
    if (!page || typeof page !== 'object' || Array.isArray(page)) {
      throw new Error('Invalid URL history page record');
    }
    const source = sourcePath(page.source);
    if (source !== page.source) throw new Error(`Non-canonical source identity: ${page.source}`);
    if (sources.has(source)) throw new Error(`Duplicate URL history source: ${source}`);
    sources.add(source);
    if (!['en', 'fr'].includes(page.locale) || typeof page.title !== 'string' || !page.title.trim() ||
        !Array.isArray(page.urls) || !page.urls.length) {
      throw new Error(`Invalid URL history record: ${source}`);
    }
    if (page.previousSources !== undefined &&
        (!Array.isArray(page.previousSources) ||
         page.previousSources.some(value => sourcePath(value) !== value))) {
      throw new Error(`Invalid migrated identities: ${source}`);
    }
    const current = urlPath(page.url);
    if (current !== page.url || !current.startsWith(`/${page.locale}/`)) {
      throw new Error(`Non-canonical current URL or locale mismatch: ${source}: ${page.url}`);
    }
    if (!page.urls.includes(current)) throw new Error(`History omits current URL for ${source}`);
    for (const value of page.urls) {
      const url = urlPath(value);
      if (url !== value) throw new Error(`Non-canonical historical URL: ${value}`);
      if (!url.startsWith(`/${page.locale}/`)) throw new Error(`Locale mismatch: ${source}: ${url}`);
      if (owners.has(url) && owners.get(url) !== source) {
        throw new Error(`URL history collision: ${url}: ${owners.get(url)} and ${source}`);
      }
      owners.set(url, source);
    }
  }
  if (history.artifacts !== undefined) {
    if (!Array.isArray(history.artifacts)) throw new Error('Invalid URL history artifacts');
    for (const artifact of history.artifacts) {
      if (!artifact || typeof artifact.file !== 'string' ||
          outputFile('/' + artifact.file) !== artifact.file ||
          !/^[a-f0-9]{64}$/.test(artifact.hash)) {
        throw new Error('Invalid URL history artifact ownership');
      }
    }
  }
  return history;
}

function fingerprint(content) {
  return createHash('sha256').update(content).digest('hex');
}

function emptyHistory(revision = '') {
  return { version: 1, revision, pages: [] };
}

function readPage(content, inputPath, url) {
  const source = inputPath.replace(/^\.\//, '');
  if (!/^src\/(?:pages|main)\//.test(source) || !/^\/(?:en|fr)\//.test(url)) return null;
  const headEnd = content.indexOf('</head>');
  const dom = new JSDOM(headEnd < 0 ? content : content.slice(0, headEnd + 7));
  try {
    const document = dom.window.document;
    if (document.querySelector('meta[http-equiv="refresh" i]')) return null;
    const metadata = document.querySelector('meta[name="source-file"]');
    if (!metadata || sourcePath(metadata.content) !== sourcePath(source)) {
      throw new Error(`Missing or mismatched source-file metadata: ${url}: ${source}`);
    }
    const locale = document.documentElement.lang;
    if (!['en', 'fr'].includes(locale)) throw new Error(`Missing page language: ${url}`);
    const title = document.title.replace(/\s+/g, ' ').trim();
    if (!title) throw new Error(`Missing descriptive page title: ${url}`);
    const normalizedUrl = urlPath(url);
    return {
      source: sourcePath(source), locale, url: normalizedUrl,
      title, urls: [normalizedUrl]
    };
  } finally {
    dom.window.close();
  }
}

function singlePages(pages, report = console.warn) {
  const groups = new Map();
  for (const page of pages.filter(Boolean)) {
    const group = groups.get(page.source) || [];
    group.push(page);
    groups.set(page.source, group);
  }
  const singles = [];
  for (const [source, group] of groups) {
    if (group.length === 1) singles.push(group[0]);
    else report(`URL history: excluding multi-output template ${source} (${group.length} URLs)`);
  }
  return singles;
}

function mergeHistory(previous, current, overrides = {}, revision = '') {
  validateHistory(previous);
  if (!overrides || Array.isArray(overrides) || typeof overrides !== 'object') {
    throw new Error('URL history overrides must be an object keyed by source path');
  }
  const records = new Map(previous.pages.map(page => [page.source, { ...page, urls: [...page.urls] }]));
  const active = new Map(current.map(page => [sourcePath(page.source), page]));
  if (active.size !== current.length) throw new Error('Duplicate active URL history identity');
  const migrated = new Set();
  for (const [source, options] of Object.entries(overrides)) {
    if (sourcePath(source) !== source) throw new Error(`Non-canonical override source: ${source}`);
    if (!active.has(source) || !options || typeof options !== 'object' || Array.isArray(options) ||
        Object.keys(options).some(key => !['aliases', 'previousSources'].includes(key)) ||
        (options.aliases !== undefined && !Array.isArray(options.aliases)) ||
        (options.previousSources !== undefined && !Array.isArray(options.previousSources))) {
      throw new Error(`Invalid URL history override or inactive destination: ${source}`);
    }
    const urls = [...(records.get(source)?.urls || [])];
    const previousSources = [...(records.get(source)?.previousSources || [])];
    for (const oldSource of options.previousSources || []) {
      if (sourcePath(oldSource) !== oldSource || active.has(oldSource) || migrated.has(oldSource)) {
        throw new Error(`Invalid URL history migration: ${oldSource} -> ${source}`);
      }
      if (!records.has(oldSource)) {
        if (previousSources.includes(oldSource)) continue;
        throw new Error(`Unknown URL history migration source: ${oldSource}`);
      }
      urls.push(...records.get(oldSource).urls);
      previousSources.push(oldSource, ...(records.get(oldSource).previousSources || []));
      records.delete(oldSource);
      migrated.add(oldSource);
    }
    urls.push(...(options.aliases || []).map(urlPath));
    const page = active.get(source);
    records.set(source, {
      ...page, previousSources: [...new Set(previousSources)], urls: [...new Set([...urls, page.url])]
    });
  }
  for (const page of current) {
    records.set(page.source, {
      ...page, previousSources: records.get(page.source)?.previousSources || [],
      urls: [...new Set([...(records.get(page.source)?.urls || []), page.url])].sort()
    });
  }
  const history = validateHistory({
    version: 1, revision,
    pages: [...records.values()].sort((a, b) => a.source.localeCompare(b.source))
  });
  const redirects = [];
  const missing = [];
  for (const page of history.pages) {
    if (!active.has(page.source)) {
      missing.push(page.source);
      continue;
    }
    for (const from of page.urls) {
      if (from !== page.url) redirects.push({ from, ...page });
    }
  }
  return { history, redirects, missing };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderRedirect(page, { prefix = '', domain = 'https://a11y.canada.ca' } = {}) {
  const target = prefix + urlPath(page.url);
  const canonical = new URL(target, domain).href;
  const french = page.locale === 'fr';
  const heading = french ? 'Cette page a été déplacée' : 'This page has moved';
  return `<!DOCTYPE html>
${MARKER}
<html lang="${page.locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${heading} - ${escapeHtml(page.title)}</title>
<link rel="canonical" href="${escapeHtml(canonical)}">
<noscript><meta http-equiv="refresh" content="0;url=${escapeHtml(target)}"></noscript>
</head>
<body>
<main>
<h1>${heading}</h1>
<p>${french ? 'Consultez la page à sa nouvelle adresse :' : 'Visit the page at its new address:'}
<a id="destination" href="${escapeHtml(target)}">${escapeHtml(page.title)}</a>.</p>
</main>
<script>
const link = document.getElementById('destination');
const destination = new URL(link.href);
destination.search = window.location.search;
destination.hash = window.location.hash;
link.href = destination.href;
window.location.replace(destination.href);
</script>
</body>
</html>
`;
}

module.exports = {
  MANIFEST, MARKER, DEFAULT_INPUT, sourcePath, urlPath, outputFile,
  validateHistory, emptyHistory, readPage, singlePages, mergeHistory, renderRedirect, fingerprint
};
