/**
 * Build Validation Tests
 *
 * These tests ensure the Eleventy build works correctly
 * and generates the expected output files with proper content.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

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
