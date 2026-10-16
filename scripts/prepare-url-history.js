const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { JSDOM } = require('jsdom');
const {
  MANIFEST, DEFAULT_INPUT, emptyHistory, validateHistory, readPage, singlePages
} = require('./url-history');

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }).trim();
}

function prepare(env = process.env) {
  if (env.URL_HISTORY_INPUT) {
    validateHistory(JSON.parse(fs.readFileSync(env.URL_HISTORY_INPUT, 'utf8')));
    console.log(`URL history: using explicit baseline ${env.URL_HISTORY_INPUT}`);
    return;
  }
  let history;
  if (env.URL_HISTORY_INITIALIZE === 'true') {
    history = emptyHistory();
    console.warn('URL history: explicitly initializing an empty baseline; existing bookmarks are not imported');
  } else {
    let ref = env.URL_HISTORY_REF;
    if (!ref) {
      const repository = env.URL_HISTORY_REPOSITORY ||
        (env.GITHUB_REPOSITORY && `https://github.com/${env.GITHUB_REPOSITORY}.git`) ||
        env.REPOSITORY_URL ||
        git(['remote', 'get-url', git(['remote']).split('\n').includes('upstream') ? 'upstream' : 'origin']);
      git(['fetch', '--no-tags', '--', repository, 'gh-pages']);
      ref = 'FETCH_HEAD';
    }
    const revision = git(['rev-parse', '--verify', `${ref}^{commit}`]);
    const files = git(['ls-tree', '-r', '--name-only', revision]).split('\n');
    if (files.includes(MANIFEST)) {
      history = validateHistory(JSON.parse(git(['show', `${revision}:${MANIFEST}`])));
    } else {
      if (git(['log', '-1', '--format=%H', revision, '--', MANIFEST])) {
        throw new Error('Published URL history is missing after rollout; restore it instead of resetting aliases');
      }
      const pages = [];
      const unmatched = [];
      for (const file of files.filter(file => /^(en|fr)\/.*\.html$/.test(file))) {
        const html = git(['show', `${revision}:${file}`]);
        const headEnd = html.indexOf('</head>');
        const dom = new JSDOM(headEnd < 0 ? html : html.slice(0, headEnd + 7));
        const source = dom.window.document.querySelector('meta[name="source-file"]')?.content;
        const redirect = dom.window.document.querySelector('meta[http-equiv="refresh" i]');
        dom.window.close();
        if (redirect) continue;
        if (!source) {
          unmatched.push(file);
          continue;
        }
        if (/^\.?\/?src\/(?:pages|main)\//.test(source)) {
          pages.push(readPage(html, source, `/${file}`));
        } else {
          unmatched.push(`${file} (${source})`);
        }
      }
      if (unmatched.length || !pages.length) {
        throw new Error(`Cannot safely bootstrap published URLs; unmatched pages: ${unmatched.join(', ') || '(no pages found)'}`);
      }
      history = validateHistory({ version: 1, revision, pages: singlePages(pages) });
      console.log(`URL history: bootstrapped ${history.pages.length} pages from ${revision}`);
    }
  }
  fs.mkdirSync(path.dirname(DEFAULT_INPUT), { recursive: true });
  fs.writeFileSync(DEFAULT_INPUT, JSON.stringify(history, null, 2) + '\n');
  console.log(`URL history: prepared ${history.pages.length} page records`);
}

if (require.main === module) {
  try {
    prepare();
  } catch (error) {
    console.error(`URL history preparation failed: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { prepare };
