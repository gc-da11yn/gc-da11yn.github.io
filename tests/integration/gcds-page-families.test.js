// cspell:ignore drmt eqht fontawesome srvinfo

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
const { JSDOM } = require('jsdom');

const routes = [
  'gcds-home-preview',
  'gcds-landing-page-preview',
  'gcds-role-page-preview'
];

const productionRoutes = {
  en: {
    'gcds-home-preview': '/en/',
    'gcds-landing-page-preview': '/en/how-tos/',
    'gcds-role-page-preview': '/en/roles/'
  },
  fr: {
    'gcds-home-preview': '/fr/',
    'gcds-landing-page-preview': '/fr/comment-faire/',
    'gcds-role-page-preview': '/fr/roles/'
  }
};

function build(prefix = '') {
  execSync('rm -rf _site && npm run build', {
    stdio: 'pipe',
    env: { ...process.env, ELEVENTY_ENV: 'development', PATH_PREFIX: prefix }
  });
}

describe('GCDS page families', () => {
  beforeAll(() => build());
  afterAll(() => build());

  test.each(['en', 'fr'])(
    'renders %s headings and lists without WET dependencies',
    async (locale) => {
      for (const route of routes) {
        const htmlContent = await fs.readFile(
          path.join('_site', locale, route, 'index.html'),
          'utf8'
        );
        const document = new JSDOM(htmlContent).window.document;

        expect(document.querySelectorAll('main')).toHaveLength(1);
        expect(document.querySelectorAll('main h1')).toHaveLength(1);
        expect(document.querySelectorAll('.gcds-link-grid')).not.toHaveLength(0);
        expect(htmlContent).not.toMatch(
          /wet-boew|jquery|fontawesome|wb-eqht|gc-drmt|gc-srvinfo/
        );
        expect(htmlContent).not.toMatch(
          /class="[^"]*(?:row|col-(?:xs|sm|md|lg)-\d+)[^"]*"/
        );
        const productionLink = [...document.querySelectorAll('main a')].find(
          (link) => link.getAttribute('href') === productionRoutes[locale][route]
        );
        expect(productionLink).not.toBeUndefined();
        expect(productionLink.textContent.trim().length).toBeGreaterThan(0);
      }

      const home = new JSDOM(await fs.readFile(
        path.join('_site', locale, 'gcds-home-preview', 'index.html'),
        'utf8'
      )).window.document;
      for (const section of home.querySelectorAll('.gcds-page-family-section')) {
        const heading = section.querySelector('h2');
        const list = section.querySelector('ul.gcds-link-grid');
        expect(heading).not.toBeNull();
        expect(list).not.toBeNull();
        expect(section.getAttribute('aria-labelledby')).toBe(heading.id);
        expect(list.querySelectorAll(':scope > li').length).toBeGreaterThan(0);
      }

      const landing = new JSDOM(await fs.readFile(
        path.join('_site', locale, 'gcds-landing-page-preview', 'index.html'),
        'utf8'
      )).window.document;
      expect(landing.querySelector('#gcds-landing-heading').tagName).toBe('H2');
      expect(
        landing.querySelectorAll('.gcds-link-grid > section > h3 > a').length
      ).toBeGreaterThan(0);
      expect(landing.querySelector('.gcds-link-grid').tagName).toBe('DIV');

      const roles = new JSDOM(await fs.readFile(
        path.join('_site', locale, 'gcds-role-page-preview', 'index.html'),
        'utf8'
      )).window.document;
      const roleNav = roles.querySelector('.gcds-role-nav');
      expect(roleNav.getAttribute('aria-labelledby')).toBe(
        'gcds-role-nav-heading'
      );
      for (const link of roleNav.querySelectorAll('a[href^="#"]')) {
        expect(roles.querySelector(link.getAttribute('href'))).not.toBeNull();
      }
      expect(
        roles.querySelectorAll(
          '.gcds-page-family-section .gcds-role-labels + p > a'
        ).length
      ).toBeGreaterThan(0);
      expect(
        roles.querySelectorAll(
          '.gcds-role-labels > li'
        ).length
      ).toBeGreaterThan(0);
    }
  );

  test('keeps English and French page-family structures in parity', async () => {
    for (const route of routes) {
      const structures = await Promise.all(['en', 'fr'].map(async (locale) => {
        const htmlContent = await fs.readFile(
          path.join('_site', locale, route, 'index.html'),
          'utf8'
        );
        const document = new JSDOM(htmlContent).window.document;
        return {
          sections: document.querySelectorAll('.gcds-page-family-section').length,
          grids: document.querySelectorAll('.gcds-link-grid').length,
          roleNavigations: document.querySelectorAll('.gcds-role-nav').length
        };
      }));
      expect(structures[0]).toEqual(structures[1]);
    }
  });

  test('keeps page-family links under the configured path prefix', async () => {
    build('toolkit');
    const htmlContent = await fs.readFile(
      '_site/en/gcds-home-preview/index.html',
      'utf8'
    );
    expect(htmlContent).toContain(
      'href="/toolkit/en/accessibility-fundamentals/"'
    );
    expect(htmlContent).not.toContain(
      'href="/en/accessibility-fundamentals/"'
    );
    expect(htmlContent).toContain('href="/toolkit/en/contact-us/"');
    expect(htmlContent).toContain('href="/toolkit/en/"');
  });
});
