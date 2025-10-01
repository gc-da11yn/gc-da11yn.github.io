/**
 * Eleventy Transforms Configuration
 *
 * This module contains all transforms for the Digital Accessibility Toolkit.
 * Transforms modify the output content after templates are processed.
 */

const beautify = require('js-beautify').html;
const path = require('path');

module.exports = function (eleventyConfig) {

  // Format HTML output for better readability
  eleventyConfig.addTransform("htmlbeautify", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return beautify(content, {
        indent_size: 2,
        indent_char: ' ',
        preserve_newlines: false,
        max_preserve_newlines: 1,
        wrap_line_length: 0,
        end_with_newline: true,
      });
    }
    return content;
  });

  // Add UTF-8 BOM to CSV files for proper Excel encoding
  eleventyConfig.addTransform("csvUtf8Bom", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".csv")) {
      // For Excel compatibility, we need to ensure the content is properly encoded
      // Try a different approach with UTF-8 BOM and ensure content is UTF-8
      const utf8Bom = '\uFEFF'; // Use Unicode BOM character instead of bytes
      return utf8Bom + content;
    }
    return content;
  });

  // Transform for capturing generated URLs (git change tracking)
  // This will be moved to a separate plugin in Phase 2
  eleventyConfig.addTransform("captureGeneratedUrl", function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      const inputPath = path.relative('./', this.page.inputPath);

      // This transform integrates with the changed pages system
      // For now, we'll keep the logic but make it more modular in Phase 2

      // Check if this is a changed file (this will be optimized in Phase 2)
      if (global.changedFilePaths && global.changedFilePaths.has(inputPath)) {
        // URL generation logic (to be optimized)
        const isWatchMode = process.env.ELEVENTY_WATCH === 'true';
        let domain = 'http://localhost';
        let port = '8080';

        // Environment detection
        if (process.env.CODESPACES && process.env.CODESPACE_NAME) {
          domain = `https://${process.env.CODESPACE_NAME}-${port}.app.github.dev`;
        }
        if (process.env.DEPLOY_URL) {
          domain = process.env.DEPLOY_URL;
        }

        // Read port from file
        const fs = require('fs');
        if (fs.existsSync('.eleventy-port')) {
          port = fs.readFileSync('.eleventy-port', 'utf8').trim();
          if (domain === 'http://localhost') {
            domain = `${domain}:${port}`;
          }
        }

        let fullUrl = domain;
        if (domain.includes('localhost') && !domain.includes(`:${port}`)) {
          fullUrl += `:${port}`;
        }
        fullUrl += this.page.url;

        // ANSI colors for console output
        const underline = '\x1b[4m';
        const resetColor = '\x1b[0m';

        if (isWatchMode) {
          console.log(`${underline}Captured URL: ${fullUrl}${resetColor}`);
        } else {
          console.log(`${underline}Changed file: ${inputPath}${resetColor}`);
        }

        // Track for summary (this will be moved to a plugin in Phase 2)
        if (!global.gitChangedUrls) global.gitChangedUrls = [];
        global.gitChangedUrls.push(isWatchMode ? fullUrl : inputPath);
      }
    }
    return content;
  });
};
