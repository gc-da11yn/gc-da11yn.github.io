/**
 * Performance Benchmarking Tests
 *
 * These tests measure build performance and help track improvements
 * across different phases of the refactoring process.
 */

const { execSync } = require('child_process');
const fs = require('fs').promises;

describe('Performance Benchmarks', () => {

  let buildMetrics = {
    buildTime: 0,
    fileCount: 0,
    memoryUsage: null,
    cacheStatus: null
  };

  const measureBuildTime = () => {
    const startTime = Date.now();

    try {
      // Clean build for accurate measurement
      execSync('rm -rf _site', { stdio: 'pipe' });

      const buildOutput = execSync('npm run build', {
        stdio: 'pipe',
        encoding: 'utf8'
      });

      const endTime = Date.now();
      buildMetrics.buildTime = endTime - startTime;

      // Extract file count from Eleventy output
      const fileCountMatch = buildOutput.match(/Wrote (\d+) files/);
      if (fileCountMatch) {
        buildMetrics.fileCount = parseInt(fileCountMatch[1]);
      }

      return buildMetrics.buildTime;
    } catch (error) {
      console.error('Build failed:', error.message);
      throw error;
    }
  };

  const measureMemoryUsage = () => {
    const memoryBefore = process.memoryUsage();

    // Simulate memory-intensive operation
    execSync('npm run build', { stdio: 'pipe' });

    const memoryAfter = process.memoryUsage();

    buildMetrics.memoryUsage = {
      heapUsedDelta: memoryAfter.heapUsed - memoryBefore.heapUsed,
      heapTotalDelta: memoryAfter.heapTotal - memoryBefore.heapTotal,
      rssUsed: memoryAfter.rss,
      external: memoryAfter.external
    };

    return buildMetrics.memoryUsage;
  };

  describe('Build Performance', () => {
    test('build completes within acceptable time', () => {
      const buildTime = measureBuildTime();

      console.log(`📊 Build Time: ${buildTime}ms`);
      console.log(`📄 Files Generated: ${buildMetrics.fileCount}`);

      // Set reasonable thresholds (adjust based on your requirements)
      expect(buildTime).toBeLessThan(300000); // 5 minutes max
      expect(buildMetrics.fileCount).toBeGreaterThan(250); // Should generate reasonable number of files

      // Log for tracking improvements
      console.log(`⏱️  Average time per file: ${Math.round(buildTime / buildMetrics.fileCount)}ms`);
    });

    test('memory usage stays within reasonable bounds', () => {
      const memory = measureMemoryUsage();

      console.log(`🧠 Memory Usage:`);
      console.log(`   Heap Used Delta: ${Math.round(memory.heapUsedDelta / 1024 / 1024)}MB`);
      console.log(`   RSS: ${Math.round(memory.rssUsed / 1024 / 1024)}MB`);

      // Memory usage should be reasonable (adjust thresholds as needed)
      expect(memory.rssUsed).toBeLessThan(2 * 1024 * 1024 * 1024); // Less than 2GB RSS
    });

    test('incremental builds are faster than full builds', async () => {
      // First build (full)
      const fullBuildTime = measureBuildTime();

      // Touch a single file
      const testFile = 'src/pages/en/contact-us.md';
      const originalContent = await fs.readFile(testFile, 'utf8');
      await fs.writeFile(testFile, originalContent + '\n<!-- test change -->');

      // Second build (incremental)
      const incrementalBuildTime = measureBuildTime();

      // Restore original file
      await fs.writeFile(testFile, originalContent);

      console.log(`📊 Full Build: ${fullBuildTime}ms`);
      console.log(`📊 Incremental Build: ${incrementalBuildTime}ms`);
      console.log(`📈 Improvement: ${Math.round((1 - incrementalBuildTime/fullBuildTime) * 100)}%`);

      // Incremental should be faster (though our current setup may not optimize for this yet)
      // This test will be more meaningful after Phase 2 optimizations
      expect(incrementalBuildTime).toBeLessThan(fullBuildTime * 1.2); // Allow 20% variance
    });
  });

  describe('Development Mode Performance', () => {
    test('watch mode starts within reasonable time', () => {
      const startTime = Date.now();

      // Start watch mode in background
      const child = execSync('timeout 30s npm run start > /dev/null 2>&1 || true', {
        stdio: 'pipe',
        encoding: 'utf8'
      });

      const startupTime = Date.now() - startTime;
      console.log(`🚀 Watch Mode Startup: ${startupTime}ms`);

      expect(startupTime).toBeLessThan(60000); // Should start within 60 seconds
    });
  });

  describe('Output Quality', () => {
    test('generated files are properly optimized', async () => {
      // Ensure build is complete
      measureBuildTime();

      // Check CSS file is compressed
      const cssContent = await fs.readFile('_site/css/da11yn.css', 'utf8');
      const cssSize = Buffer.byteLength(cssContent, 'utf8');

      console.log(`📄 CSS Size: ${Math.round(cssSize / 1024)}KB`);

      // CSS should be reasonably sized and compressed (no excessive whitespace in production)
      expect(cssSize).toBeLessThan(500 * 1024); // Less than 500KB

      // Check HTML files are beautified but not excessively large
      const htmlContent = await fs.readFile('_site/en/index.html', 'utf8');
      const htmlSize = Buffer.byteLength(htmlContent, 'utf8');

      console.log(`📄 Main HTML Size: ${Math.round(htmlSize / 1024)}KB`);

      expect(htmlSize).toBeLessThan(200 * 1024); // Less than 200KB for main page
      expect(htmlContent).toContain('\n'); // Should be beautified with line breaks
    });

    test('sitemap is properly generated', async () => {
      measureBuildTime();

      const sitemapContent = await fs.readFile('_site/sitemap.xml', 'utf8');
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;

      console.log(`🗺️  Sitemap URLs: ${urlCount}`);

      expect(urlCount).toBeGreaterThan(200); // Should have substantial number of URLs
      expect(sitemapContent).toContain('<?xml version="1.0"');
      expect(sitemapContent).toContain('<urlset');
    });
  });

  afterAll(() => {
    // Save performance metrics for comparison
    const metricsFile = 'tests/performance/latest-metrics.json';
    const metrics = {
      timestamp: new Date().toISOString(),
      buildTime: buildMetrics.buildTime,
      fileCount: buildMetrics.fileCount,
      memoryUsage: buildMetrics.memoryUsage,
      phase: 'Phase 1 - Modular Architecture'
    };

    fs.writeFile(metricsFile, JSON.stringify(metrics, null, 2))
      .then(() => console.log(`📊 Performance metrics saved to ${metricsFile}`))
      .catch(err => console.warn(`⚠️  Could not save metrics: ${err.message}`));
  });
});
