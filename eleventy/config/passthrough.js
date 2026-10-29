/**
 * Eleventy Passthrough Copy Configuration
 *
 * This module contains all passthrough copy rules for the Digital Accessibility Toolkit.
 * Passthrough copy moves files from source to output without processing.
 */

module.exports = function (eleventyConfig) {

  // Copy document files (Word, PDF, etc.)
  eleventyConfig.addPassthroughCopy({ "./src/_docs": "docs" });

  // Copy image files
  eleventyConfig.addPassthroughCopy({ "./src/_images": "img" });

  // Copy CNAME file for GitHub Pages
  eleventyConfig.addPassthroughCopy({ "./src/CNAME": "CNAME" });

  // Copy JavaScript files
  eleventyConfig.addPassthroughCopy({ "./src/_scripts": "js" });

  // Copy Decap CMS admin files
  eleventyConfig.addPassthroughCopy({ "./src/admin": "admin" });

  // Copy GC Design System files from npm (versions set in package.json)
  eleventyConfig.addPassthroughCopy({
    "./node_modules/@gcds-core/components/dist/gcds": "gcds",
    "./node_modules/@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css": "css/gcds-css-shortcuts.min.css",
  });
};
