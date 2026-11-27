/**
 * Build Validation Tests
 *
 * These tests ensure the Eleventy build works correctly
 * and generates the expected output files with proper content.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const gcdsMigrationDocumentSlugs = [
  'gcds-component-map',
  'gcds-customization-log',
  'gcds-delivery-strategy',
  'gcds-implementation-decisions',
  'gcds-migration-inventory',
  'gcds-migration-issue-map',
  'gcds-migration-plan',
  'gcds-no-direct-replacement-analysis',
  'gcds-phased-implementation-plan',
  'gcds-shell-milestone-review',
  'gcds-shared-template-inventory',
  'gcds-wet-dependency-inventory'
];

const gcdsMigrationDocumentSlugsWithDetails = [
  'gcds-component-map',
  'gcds-delivery-strategy',
  'gcds-no-direct-replacement-analysis',
  'gcds-phased-implementation-plan',
  'gcds-shell-milestone-review',
  'gcds-shared-template-inventory',
  'gcds-wet-dependency-inventory'
];

describe('Eleventy Build Validation', () => {

  beforeAll(async () => {
    // Clean and build the site before running tests
    try {
      execSync('rm -rf _site', { stdio: 'pipe' });
      execSync('npm run build', { stdio: 'pipe' });
    } catch (error) {
      console.error('Build failed:', error.message);
      throw error;
    }
  });

  describe('Build Process', () => {
    test('build completes successfully', () => {
      expect(fs.access('_site')).resolves.not.toThrow();
    });

    test('generates expected number of files', async () => {
      const stats = execSync('find _site -name "*.html" | wc -l', { encoding: 'utf8' });
      const htmlFileCount = parseInt(stats.trim());
      expect(htmlFileCount).toBeGreaterThan(200); // Expect at least 200 HTML files
    });

    test('generates CSS files', async () => {
      await expect(fs.access('_site/css/da11yn.css')).resolves.not.toThrow();
    });

    test('copies static assets', async () => {
      await expect(fs.access('_site/docs')).resolves.not.toThrow();
      await expect(fs.access('_site/img')).resolves.not.toThrow();
      await expect(fs.access('_site/js')).resolves.not.toThrow();
    });
  });

  describe('Content Generation', () => {
    test('generates home pages', async () => {
      await expect(fs.access('_site/en/index.html')).resolves.not.toThrow();
      await expect(fs.access('_site/fr/index.html')).resolves.not.toThrow();
    });

    test('generates sitemap', async () => {
      await expect(fs.access('_site/sitemap.xml')).resolves.not.toThrow();

      const sitemap = await fs.readFile('_site/sitemap.xml', 'utf8');
      expect(sitemap).toContain('<urlset');
      expect(sitemap).toContain('<url>');
    });

    test('generates role pages', async () => {
      await expect(fs.access('_site/en/roles/index.html')).resolves.not.toThrow();
      await expect(fs.access('_site/fr/roles/index.html')).resolves.not.toThrow();
    });

    test('generates bilingual content', async () => {
      const enContent = await fs.readFile('_site/en/index.html', 'utf8');
      const frContent = await fs.readFile('_site/fr/index.html', 'utf8');

      expect(enContent).toContain('lang="en"');
      expect(frContent).toContain('lang="fr"');
    });

    test('generates accessible GCDS migration documents', async () => {
      for (const slug of gcdsMigrationDocumentSlugs) {
        const outputPath = path.join('_site', 'en', slug, 'index.html');
        const htmlContent = await fs.readFile(outputPath, 'utf8');

        expect(htmlContent).toContain('<html class="no-js" lang="en"');
        expect(htmlContent.match(/<h1\b/g)).toHaveLength(1);
        expect(htmlContent).toContain('<nav aria-labelledby="on-this-page-heading">');
        expect(htmlContent).toContain('<h2 id="on-this-page-heading">On this page</h2>');
        expect(htmlContent).toContain('<span property="name">GCDS migration documentation</span>');
        expect(htmlContent).toContain('href="/en/gcds-migration/"');
        if (gcdsMigrationDocumentSlugsWithDetails.includes(slug)) {
          expect(htmlContent).toMatch(/<div class="well well-lg">\s*<ul>/);
        }
        if (slug === 'gcds-wet-dependency-inventory') {
          expect(htmlContent).toContain('{{ item.data.fontIcon }}');
          expect(htmlContent).toContain('{{ title }}');
        }
        expect(htmlContent).not.toMatch(/href="[^"]+\.md(?:#|\")/);
      }
    });

    test('generates the GCDS migration documentation index', async () => {
      const htmlContent = await fs.readFile('_site/en/gcds-migration/index.html', 'utf8');

      expect(htmlContent).toContain('<html class="no-js" lang="en"');
      expect(htmlContent.match(/<h1\b/g)).toHaveLength(1);
      expect(htmlContent).toContain('<nav aria-labelledby="on-this-page-heading">');
      expect(htmlContent).not.toContain('<span property="name">GCDS migration documentation</span>');

      for (const slug of gcdsMigrationDocumentSlugs) {
        expect(htmlContent).toContain(`href="/en/${slug}/"`);
      }
    });

    test.each([
      ['en', 'fr', 'Français'],
      ['fr', 'en', 'English']
    ])('generates the isolated GCDS %s foundation preview', async (locale, counterpart, linkLabel) => {
      const outputPath = path.join('_site', locale, 'gcds-foundation-preview', 'index.html');
      const htmlContent = await fs.readFile(outputPath, 'utf8');

      expect(htmlContent).toContain(`<!DOCTYPE html>`);
      expect(htmlContent).toContain(`<html lang="${locale}">`);
      expect(htmlContent.match(/<main\b/g)).toHaveLength(1);
      expect(htmlContent).toContain('<main id="main-content" tabindex="-1">');
      expect(htmlContent.match(/<h1\b/g)).toHaveLength(1);
      expect(htmlContent.match(/<gcds-header\b/g)).toHaveLength(1);
      expect(htmlContent.match(/<footer\b/g)).toHaveLength(1);
      expect(htmlContent).toContain('<header class="gcds-page-header">');
      expect(htmlContent).toContain('<p class="gcds-page-description">');
      expect(htmlContent).toContain('<div class="gcds-page-content">');
      expect(htmlContent).toMatch(new RegExp(`<link rel="alternate" hreflang="${counterpart}" href="/${counterpart}/gcds-foundation-preview/index.html">`));
      expect(htmlContent).toMatch(
        new RegExp(`<a\\s+data-counterpart[\\s\\S]*?lang="${counterpart}"[\\s\\S]*?hreflang="${counterpart}"[\\s\\S]*?href="/${counterpart}/gcds-foundation-preview/"[\\s\\S]*?translate="no"[\\s\\S]*?>${linkLabel}</a>`)
      );
      expect(htmlContent).toContain('href="#main-content"');
      expect(htmlContent).toContain('/gcds/gcds.css');
      expect(htmlContent).toContain('/gcds/gcds.esm.js');
      expect(htmlContent).toContain('/css/gcds-css-shortcuts.min.css');
      expect(htmlContent).toContain('/img/favicon.ico');
      expect(htmlContent).not.toMatch(/wet-boew|jquery|fontawesome/i);

      const localizedDate = locale === 'en' ? 'November 20, 2026' : '20 novembre 2026';
      const breadcrumbPaths = locale === 'en'
        ? ['/en/resources-and-tools/', '/en/resources/']
        : ['/fr/ressources-et-outils/', '/fr/ressources/'];

      expect(htmlContent).toContain('<gcds-date-modified');
      expect(htmlContent).toContain(localizedDate);
      expect(htmlContent).toContain('<time datetime="2026-11-20">');
      expect(htmlContent).toContain('class="gcds-date-modified-fallback"');
      expect(htmlContent).toContain('<meta name="dcterms.modified" content="2026-11-20">');
      expect(htmlContent).toContain(`hreflang="${counterpart}"`);
      for (const breadcrumbPath of breadcrumbPaths) {
        expect(htmlContent).toContain(`href="${breadcrumbPath}"`);
      }

      const contextualLink = locale === 'en'
        ? ['Digital Accessibility Toolkit', 'Accessibility in Government of Canada', '/en/about/organizations/']
        : ['Boîte à outils de l&#39;accessibilité numérique', 'Accessibilité au gouvernement du Canada', '/fr/about/organizations/'];

      expect(htmlContent).toContain('<gcds-footer');
      expect(htmlContent).toContain('display="full"');
      expect(htmlContent).toContain(`contextual-heading="${contextualLink[0]}"`);
      expect(htmlContent).toContain(`"${contextualLink[1]}":"https://a11y.canada.ca${contextualLink[2]}"`);
      expect(htmlContent).toContain(`/${locale}/contact${locale === 'fr' ? 'ez-nous' : '-us'}/`);
      expect(htmlContent).toContain(`/${locale}/roles/`);
      expect(htmlContent).toContain('class="gcds-footer-fallback"');
      expect(htmlContent.match(/<footer\b/g)).toHaveLength(1);
      expect(htmlContent).not.toContain('href=""');
    });

    test.each(['en', 'fr'])('omits an empty GCDS %s description region', async (locale) => {
      const outputPath = path.join(
        '_site',
        locale,
        'gcds-foundation-preview-no-description',
        'index.html'
      );
      const htmlContent = await fs.readFile(outputPath, 'utf8');

      expect(htmlContent.match(/<h1\b/g)).toHaveLength(1);
      expect(htmlContent).not.toContain('class="gcds-page-description"');
      expect(htmlContent).toContain('<meta name="description" content="">');
      expect(htmlContent).toContain('<gcds-date-modified');
      expect(htmlContent).not.toMatch(/wet-boew|jquery|fontawesome/i);
    });

    test.each(['en', 'fr'])('uses the full-width GCDS %s parallel home shell', async (locale) => {
      const htmlContent = await fs.readFile(
        path.join('_site', locale, 'gcds-home-preview', 'index.html'),
        'utf8'
      );

      expect(htmlContent.match(/<main\b/g)).toHaveLength(1);
      expect(htmlContent.match(/<h1\b/g)).toHaveLength(1);
      expect(htmlContent).toContain('<gcds-grid columns="1fr">');
      expect(htmlContent).not.toContain('columns-desktop="1fr 3fr"');
      expect(htmlContent).not.toContain('<gcds-side-nav');
      expect(htmlContent).not.toMatch(/wet-boew|jquery|fontawesome/i);
    });

    test('keeps GCDS shell links under a configured path prefix', async () => {
      try {
        execSync('npm run build', {
          stdio: 'pipe',
          env: { ...process.env, PATH_PREFIX: 'toolkit' }
        });
        const htmlContent = await fs.readFile(
          path.join('_site', 'en', 'gcds-foundation-preview', 'index.html'),
          'utf8'
        );

        expect(htmlContent).toContain('href="/toolkit/en/"');
        expect(htmlContent).toContain('href="/toolkit/en/resources-and-tools/"');
        expect(htmlContent).toContain('href="/toolkit/en/resources/"');
        expect(htmlContent).toContain('href="/toolkit/fr/gcds-foundation-preview/"');
        expect(htmlContent).toContain('href="/toolkit/gcds/gcds.css"');
        expect(htmlContent).toContain('href="#main-content"');
        const noticeHtml = await fs.readFile(
          path.join('_site', 'en', 'gcds-landing-notice-preview', 'index.html'),
          'utf8'
        );
        expect(noticeHtml).toContain('href="/toolkit/en/contact-us/"');
        expect(noticeHtml).not.toContain('href="/en/contact-us/"');
        const archivedNoticeHtml = await fs.readFile(
          path.join('_site', 'en', 'gcds-notices-preview', 'index.html'),
          'utf8'
        );
        expect(archivedNoticeHtml).toContain('href="/toolkit/en/#updates"');
        expect(archivedNoticeHtml).not.toContain('href="en/#updates"');
      } finally {
        execSync('npm run build', {
          stdio: 'pipe',
          env: { ...process.env, PATH_PREFIX: '' }
        });
      }
    });

    test('does not advertise a suppressed GCDS translation', async () => {
      const htmlContent = await fs.readFile(
        '_site/en/gcds-foundation-preview-no-translation/index.html',
        'utf8'
      );

      expect(htmlContent).not.toContain('rel="alternate"');
      expect(htmlContent).not.toContain('data-counterpart');
    });

    test.each([
      ['en', 'notices', 2, 'We have archived this page and it&#39;s content', 'Important information'],
      ['fr', 'notices', 2, 'Nous avons archivé cette page et son contenu', 'Informations importantes'],
      ['en', 'landing-notice', 1, 'Content in progress'],
      ['fr', 'landing-notice', 1, 'Contenu en cours'],
      ['en', 'office-notice', 1, 'Office version notice'],
      ['fr', 'office-notice', 1, 'Avis concernant la version d’Office'],
      ['en', 'standard-notice', 1, 'Standard update'],
      ['fr', 'standard-notice', 1, 'Mise à jour de la norme']
    ])('generates the isolated GCDS %s %s fixture', async (
      locale,
      fixtureName,
      noticeCount,
      ...noticeTitles
    ) => {
      const htmlContent = await fs.readFile(
        path.join('_site', locale, `gcds-${fixtureName}-preview`, 'index.html'),
        'utf8'
      );

      expect(htmlContent.match(/<gcds-notice\b/g)).toHaveLength(noticeCount);
      expect(htmlContent.match(/class="gcds-notice-fallback /g)).toHaveLength(noticeCount);
      expect(htmlContent).not.toMatch(/role="alert"|aria-live=/);
      expect(htmlContent).not.toMatch(/wet-boew|jquery|fontawesome/i);
      expect(htmlContent).toContain('notice-title-tag="h2"');
      for (const title of noticeTitles) {
        expect(htmlContent).toContain(title);
      }
    });

    test('keeps the archived GCDS notice after the page heading', async () => {
      const htmlContent = await fs.readFile(
        '_site/en/gcds-notices-preview/index.html',
        'utf8'
      );
      const headingPosition = htmlContent.indexOf('<h1>');
      const noticePosition = htmlContent.indexOf('<gcds-notice');

      expect(headingPosition).toBeGreaterThan(-1);
      expect(noticePosition).toBeGreaterThan(headingPosition);
      expect(htmlContent).not.toMatch(/<h1>Archived page:/);
      expect(htmlContent.match(/archived-notice-fallback-title/g)).toHaveLength(2);
    });

    test('keeps normal home pages on the WET layout', async () => {
      for (const locale of ['en', 'fr']) {
        const htmlContent = await fs.readFile(path.join('_site', locale, 'index.html'), 'utf8');
        expect(htmlContent).toContain('wet-boew/css/theme.min.css');
        expect(htmlContent).toContain('wet-boew/js/wet-boew.min.js');
        expect(htmlContent).not.toContain('/gcds/gcds.esm.js');
        expect(htmlContent).not.toContain('/css/gcds-css-shortcuts.min.css');
      }
    });
  });

  describe('HTML Structure', () => {
    test('HTML pages have proper structure', async () => {
      const htmlContent = await fs.readFile('_site/en/index.html', 'utf8');

      expect(htmlContent).toContain('<!DOCTYPE html>');
      expect(htmlContent).toContain('<html');
      expect(htmlContent).toContain('<head>');
      expect(htmlContent).toMatch(/<body[^>]*>/); // Match opening body tag with any attributes
      expect(htmlContent).toContain('</html>');
    });

    test('pages have proper meta tags', async () => {
      const htmlContent = await fs.readFile('_site/en/index.html', 'utf8');

      expect(htmlContent).toContain('<meta charset="utf-8">');
      expect(htmlContent).toMatch(/<meta[^>]*name="viewport"[^>]*>/); // Match viewport meta with any attribute order
      expect(htmlContent).toContain('<title>');
    });

    test('CSS is properly linked', async () => {
      const htmlContent = await fs.readFile('_site/en/index.html', 'utf8');
      expect(htmlContent).toContain('da11yn.css');
    });

    test('copies pinned GCDS assets', async () => {
      await expect(fs.access('_site/gcds/gcds.css')).resolves.not.toThrow();
      await expect(fs.access('_site/gcds/gcds.esm.js')).resolves.not.toThrow();
      await expect(fs.access('_site/css/gcds-css-shortcuts.min.css')).resolves.not.toThrow();
      await expect(fs.access('_site/img/favicon.ico')).resolves.not.toThrow();
    });
  });

  describe('CSV Export', () => {
    test('generates CSV files with BOM for Excel', async () => {
      await expect(fs.access('_site/docs/pages-en.csv')).resolves.not.toThrow();
      await expect(fs.access('_site/docs/pages-fr.csv')).resolves.not.toThrow();

      const csvBuffer = await fs.readFile('_site/docs/pages-en.csv');
      // Check for UTF-8 BOM (0xEF, 0xBB, 0xBF)
      expect(csvBuffer[0]).toBe(0xEF);
      expect(csvBuffer[1]).toBe(0xBB);
      expect(csvBuffer[2]).toBe(0xBF);
    });
  });

  describe('Error Handling', () => {
    test('404 page exists', async () => {
      await expect(fs.access('_site/404.html')).resolves.not.toThrow();
    });

    test('no broken internal references', async () => {
      // This is a basic check - more comprehensive link checking
      // should use the existing link-checker scripts
      const htmlFiles = execSync('find _site -name "*.html"', { encoding: 'utf8' })
        .trim().split('\n').slice(0, 10); // Test first 10 files

      for (const file of htmlFiles) {
        const content = await fs.readFile(file, 'utf8');
        // Check for obvious broken references
        expect(content).not.toContain('src=""');
        expect(content).not.toContain('href=""');
      }
    });
  });
});
