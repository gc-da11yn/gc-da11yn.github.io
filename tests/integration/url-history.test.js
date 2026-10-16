const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { emptyHistory, MANIFEST } = require('../../scripts/url-history');

describe('URL history Eleventy integration', () => {
  let root;
  let baseline;
  let originalInput;
  let originalPrefix;

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'gc-url-history-'));
    baseline = path.join(root, 'baseline.json');
    fs.writeFileSync(baseline, JSON.stringify(emptyHistory()));
    fs.writeFileSync(path.join(root, 'fixture.config.js'), `
const plugin = require(${JSON.stringify(require.resolve('../../eleventy/plugins/url-history-plugin'))});
const FiltersPlugin = require(${JSON.stringify(require.resolve('../../eleventy/plugins/filters-plugin'))});
module.exports = config => {
  new FiltersPlugin().configureTextFilters(config, null);
  config.addPlugin(plugin);
  config.addPassthroughCopy({ 'src/assets': 'en/first' });
  return { dir: { input: 'src', output: 'output' } };
};
`);
    fs.mkdirSync(path.join(root, 'src'), { recursive: true });
    fs.writeFileSync(path.join(root, 'src/sitemap.njk'), `---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
{% for entry in collections.all %}{{ entry.url }}
{% endfor %}`);
    originalInput = process.env.URL_HISTORY_INPUT;
    originalPrefix = process.env.PATH_PREFIX;
    process.env.URL_HISTORY_INPUT = baseline;
    delete process.env.PATH_PREFIX;
  });

  afterEach(() => {
    if (originalInput === undefined) delete process.env.URL_HISTORY_INPUT;
    else process.env.URL_HISTORY_INPUT = originalInput;
    if (originalPrefix === undefined) delete process.env.PATH_PREFIX;
    else process.env.PATH_PREFIX = originalPrefix;
    fs.rmSync(root, { recursive: true });
  });

  function writePage(title, { locale = 'en', archived = false } = {}) {
    const file = path.join(root, 'src/pages', locale, 'example.njk');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `---
title: "${title}"
locale: ${locale}
eleventyExcludeFromCollections: ${archived}
permalink: "/${locale}/{{ title | stripTagsSlugify }}/"
---
<!DOCTYPE html><html lang="${locale}"><head><title>{{ title }}</title>
<meta name="source-file" content="src/pages/${locale}/example.njk"></head>
<body><h1>{{ title }}</h1><h2 id="section">Section</h2></body></html>`);
  }

  async function build() {
    const output = path.join(root, 'output');
    execFileSync(process.execPath, [
      require.resolve('@11ty/eleventy/cmd.js'), '--config=fixture.config.js', '--quiet'
    ], {
      cwd: root, env: process.env, encoding: 'utf8', stdio: 'pipe'
    });
    return output;
  }

  test('clean publications retain direct aliases through multiple bilingual title changes', async () => {
    writePage('First');
    writePage('Éléments accessibles', { locale: 'fr', archived: true });
    let output = await build();
    const first = JSON.parse(fs.readFileSync(path.join(output, MANIFEST)));
    expect(first.pages).toHaveLength(2);
    fs.copyFileSync(path.join(output, MANIFEST), baseline);
    fs.rmSync(output, { recursive: true });
    writePage('Second');
    output = await build();
    expect(fs.readFileSync(path.join(output, 'en/first/index.html'), 'utf8'))
      .toContain('href="/en/second/"');
    fs.copyFileSync(path.join(output, MANIFEST), baseline);
    fs.rmSync(output, { recursive: true });
    process.env.PATH_PREFIX = 'toolkit';
    writePage('Third');
    output = await build();
    for (const old of ['first', 'second']) {
      expect(fs.readFileSync(path.join(output, `en/${old}/index.html`), 'utf8'))
        .toContain('href="/toolkit/en/third/"');
    }
    expect(fs.existsSync(path.join(output, 'fr/elements-accessibles/index.html'))).toBe(true);
    expect(JSON.parse(fs.readFileSync(path.join(output, MANIFEST))).pages[0].url)
      .toBe('/en/third/');
    const sitemap = fs.readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
    expect(sitemap).toContain('/en/third/');
    expect(sitemap).not.toContain('/en/first/');
    expect(sitemap).not.toContain('/en/second/');
  });

  test('unchanged rebuild works and an externally modified owned file is not removed', async () => {
    writePage('First');
    const output = await build();
    await build();
    const file = path.join(output, 'en/first/index.html');
    fs.writeFileSync(file, 'external edit');
    await expect(build()).rejects.toThrow(/externally changed/);
    expect(fs.readFileSync(file, 'utf8')).toBe('external edit');
  });

  test('will not overwrite a passthrough asset with an old-URL redirect', async () => {
    writePage('First');
    const output = await build();
    fs.copyFileSync(path.join(output, MANIFEST), baseline);
    writePage('Second');
    fs.mkdirSync(path.join(root, 'src/assets'), { recursive: true });
    fs.writeFileSync(path.join(root, 'src/assets/index.html'), 'asset');
    await expect(build()).rejects.toThrow(/overwrites existing output/);
    expect(fs.readFileSync(path.join(output, 'en/first/index.html'), 'utf8')).toBe('asset');
  });

  test('rejects an alias that is now a live page from another source', async () => {
    writePage('First');
    const output = await build();
    fs.copyFileSync(path.join(output, MANIFEST), baseline);
    writePage('Second');
    const source = fs.readFileSync(path.join(root, 'src/pages/en/example.njk'), 'utf8')
      .replace('title: "Second"', 'title: "First"')
      .replace('src/pages/en/example.njk', 'src/pages/en/other.njk');
    fs.writeFileSync(path.join(root, 'src/pages/en/other.njk'), source);
    await expect(build()).rejects.toThrow(/collision/);
  });

  test('a return to the original title cleans stale local outputs without a redirect loop', async () => {
    writePage('First');
    const output = await build();
    fs.copyFileSync(path.join(output, MANIFEST), baseline);
    writePage('Second');
    await build();
    fs.copyFileSync(path.join(output, MANIFEST), baseline);
    writePage('First');
    await build();
    expect(fs.readFileSync(path.join(output, 'en/first/index.html'), 'utf8'))
      .not.toContain('generated-url-history-redirect');
    expect(fs.readFileSync(path.join(output, 'en/second/index.html'), 'utf8'))
      .toContain('href="/en/first/"');
  });

  test('preparation accepts an explicit offline baseline and rejects malformed input', () => {
    const script = path.resolve(__dirname, '../../scripts/prepare-url-history.js');
    expect(execFileSync(process.execPath, [script], { env: process.env, encoding: 'utf8' }))
      .toContain('explicit baseline');
    fs.writeFileSync(baseline, '{}');
    expect(() => execFileSync(process.execPath, [script], {
      env: process.env, stdio: 'pipe'
    })).toThrow();
  });

  test('bootstraps a published Git tree and refuses loss of a previously published manifest', () => {
    const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: 'pipe' });
    git(['init', '--quiet', '--initial-branch=gh-pages']);
    const published = path.join(root, 'en/original/index.html');
    fs.mkdirSync(path.dirname(published), { recursive: true });
    fs.writeFileSync(published, '<html lang="en"><head><title>Original</title>' +
      '<meta name="source-file" content="./src/pages/en/example.md"></head></html>');
    const commit = () => {
      git(['add', '--all']);
      git(['-c', 'user.name=URL History Test', '-c', 'user.email=test@example.invalid',
        'commit', '--quiet', '-m',
        'fixture\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>']);
    };
    commit();
    const env = { ...process.env, URL_HISTORY_REPOSITORY: root };
    delete env.URL_HISTORY_INPUT;
    delete env.URL_HISTORY_REF;
    const prepare = () => execFileSync(process.execPath, [
      path.resolve(__dirname, '../../scripts/prepare-url-history.js')
    ], { cwd: root, env, encoding: 'utf8', stdio: 'pipe' });
    expect(prepare()).toContain('bootstrapped 1 pages');
    const imported = JSON.parse(fs.readFileSync(path.join(root, '.cache/url-history/baseline.json')));
    expect(imported.pages[0].url).toBe('/en/original/');
    fs.writeFileSync(path.join(root, MANIFEST), JSON.stringify(imported));
    commit();
    expect(prepare()).toContain('prepared 1 page records');
    fs.unlinkSync(path.join(root, MANIFEST));
    commit();
    expect(prepare).toThrow(/missing after rollout/);
  });
});
