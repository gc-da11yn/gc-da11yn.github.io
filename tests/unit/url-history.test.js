const { JSDOM } = require('jsdom');
const {
  urlPath, sourcePath, outputFile, emptyHistory, validateHistory, mergeHistory,
  readPage, singlePages, renderRedirect, fingerprint
} = require('../../scripts/url-history');

const page = (url = '/en/first/', source = 'src/pages/en/example.md', locale = 'en') => ({
  source, locale, url, urls: [url], title: 'Example'
});
const publish = (previous, current, overrides) => mergeHistory(previous, current, overrides, 'revision');

describe('URL history', () => {
  test('retains every address and flattens multiple renames', () => {
    const first = publish(emptyHistory(), [page()]);
    const second = publish(first.history, [page('/en/second/')]);
    const third = publish(second.history, [page('/en/third/')]);
    expect(third.redirects.map(({ from, url }) => [from, url])).toEqual([
      ['/en/first/', '/en/third/'], ['/en/second/', '/en/third/']
    ]);
    expect(publish(third.history, [page('/en/third/')])).toEqual(third);
  });

  test('returning to an old URL makes it live rather than a redirect', () => {
    const first = publish(emptyHistory(), [page()]);
    const second = publish(first.history, [page('/en/second/')]);
    const third = publish(second.history, [page()]);
    expect(third.redirects).toHaveLength(1);
    expect(third.redirects[0]).toMatchObject({ from: '/en/second/', url: '/en/first/' });
  });

  test('imports explicit aliases and migrates file identities idempotently', () => {
    const first = publish(emptyHistory(), [page()]);
    const source = 'src/pages/en/moved.md';
    const overrides = {
      [source]: { aliases: ['/en/older/'], previousSources: ['src/pages/en/example.md'] }
    };
    const second = publish(first.history, [page('/en/latest/', source)], overrides);
    expect(second.history.pages).toHaveLength(1);
    expect(second.redirects.map(item => item.from)).toEqual(['/en/first/', '/en/older/']);
    expect(publish(second.history, [page('/en/latest/', source)], overrides)).toEqual(second);
  });

  test('retains missing destinations without generating broken redirects', () => {
    const old = publish(emptyHistory(), [page()]);
    const result = publish(old.history, []);
    expect(result.missing).toEqual(['src/pages/en/example.md']);
    expect(result.history.pages).toHaveLength(1);
    expect(result.redirects).toEqual([]);
  });

  test('rejects two pages claiming the same current or historical address', () => {
    const old = publish(emptyHistory(), [page()]);
    expect(() => publish(old.history, [
      page('/en/new/'), page('/en/first/', 'src/pages/en/other.md')
    ])).toThrow(/collision/);
    expect(() => publish(emptyHistory(), [page(), page()])).toThrow(/Duplicate active/);
  });

  test.each([
    'https://example.com/en/page/', '//example.com/en/page/', '/en/../page/',
    '/en/%2e%2e/page/', '/en/%2fpage/', '/en/page/?query', '/en/page/#section',
    '/en//page/', '/en/page\\other/', '/en/page', '/en/page/\n', '/fr/%61/'
  ])('rejects unsafe or ambiguous alias %s', value => {
    expect(() => urlPath(value)).toThrow();
  });

  test('normalizes index.html and validates manifest schema and locale', () => {
    expect(urlPath('/en/page/index.html')).toBe('/en/page/');
    expect(outputFile('/en/page/')).toBe('en/page/index.html');
    expect(outputFile('/fr/page.html')).toBe('fr/page.html');
    expect(() => validateHistory({ version: 2, pages: [] })).toThrow(/manifest/);
    expect(() => publish(emptyHistory(), [page('/fr/page/')])).toThrow(/mismatch/);
    expect(() => sourcePath('src/pages/../secret.md')).toThrow();
    expect(() => publish(emptyHistory(), [page()], { unknown: {} })).toThrow();
  });

  test('validates output ownership rather than trusting arbitrary paths', () => {
    const history = { ...emptyHistory(), artifacts: [
      { file: '../outside.html', hash: fingerprint('test') }
    ] };
    expect(() => validateHistory(history)).toThrow();
  });

  test('reads actual output metadata, excluding non-pages and intentional redirects', () => {
    const html = '<html lang="fr"><head><title>Éléments &amp; outils</title>' +
      '<meta name="source-file" content="./src/pages/fr/example.md"></head></html>';
    expect(readPage(html, './src/pages/fr/example.md', '/fr/elements/')).toMatchObject({
      title: 'Éléments & outils', locale: 'fr', url: '/fr/elements/'
    });
    expect(readPage('', 'src/resources/example.md', '/fr/resource/')).toBeNull();
    expect(readPage('<head><meta http-equiv="refresh" content="0;url=https://example.com"></head>',
      'src/pages/en/example.md', '/en/old/')).toBeNull();
    expect(() => readPage('<html lang="en"></html>', 'src/pages/en/example.md', '/en/page/'))
      .toThrow(/metadata/);
    const report = jest.fn();
    expect(singlePages([page(), page('/en/second/')], report)).toEqual([]);
    expect(report).toHaveBeenCalledWith(expect.stringContaining('multi-output'));
  });
});

describe('redirect fallback HTML', () => {
  test.each(['en', 'fr'])('renders an accessible %s fallback with correct prefix', locale => {
    const html = renderRedirect({
      ...page(`/${locale}/new/`, `src/pages/${locale}/example.md`, locale),
      title: 'Example <script>alert("test")</script> & text'
    }, { prefix: '/toolkit', domain: 'https://preview.example' });
    const dom = new JSDOM(html);
    const document = dom.window.document;
    expect(document.documentElement.lang).toBe(locale);
    expect(document.querySelectorAll('h1')).toHaveLength(1);
    expect(document.querySelector('main a').getAttribute('href')).toBe(`/toolkit/${locale}/new/`);
    expect(document.querySelector('main a').textContent).toContain('<script>');
    expect(document.querySelector('link[rel="canonical"]').href)
      .toBe(`https://preview.example/toolkit/${locale}/new/`);
    expect(document.querySelectorAll('script')).toHaveLength(1);
    expect(document.querySelector('noscript meta[http-equiv="refresh"]').content)
      .toBe(`0;url=/toolkit/${locale}/new/`);
    expect(document.querySelector('head > meta[http-equiv="refresh"]')).toBeNull();
    dom.window.close();
  });
});
