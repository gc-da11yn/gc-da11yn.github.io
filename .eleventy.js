/**
 * Eleventy Configuration - Main Entry Point
 *
 * Modular configuration for the Government of Canada Digital Accessibility Toolkit.
 * This file orchestrates all configuration modules for better maintainability.
 *
 * Refactored: Phase 1 - Extract Configuration Objects
 * Date: September 26, 2025
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { getChangedPagesForBuild } = require('./scripts/build-changed-pages');

// Import configuration modules
const configureMarkdown = require('./eleventy/config/markdown');
const configureFilters = require('./eleventy/config/filters');
const configureTransforms = require('./eleventy/config/transforms');
const configureCollections = require('./eleventy/config/collections');
const configurePassthrough = require('./eleventy/config/passthrough');

// ANSI escape codes for colored console output
const underline = '\x1b[4m';
const resetColor = '\x1b[0m';

// Check if we are in watch mode (development)
const isWatchMode = process.env.ELEVENTY_WATCH === 'true';

// Global variables for change tracking (Phase 2 optimized)
global.changedFilePaths = new Set();
global.gitChangedUrls = [];

// Phase 2: Git operations cache for performance optimization
const gitOperationsCache = new Map();

module.exports = function (eleventyConfig) {

  // Configure markdown processing and get markdown instance
  const markdownInstance = configureMarkdown(eleventyConfig);

  // Configure all other modules
  configureFilters(eleventyConfig, markdownInstance);
  configureTransforms(eleventyConfig);
  configureCollections(eleventyConfig, markdownInstance);
  configurePassthrough(eleventyConfig);

  // Add core Eleventy plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Changed pages tracking system
  let changedPages = [];
  let changedFilesMap = new Map();

  // Environment detection for URL generation
  let domain = 'https://a11y.canada.ca'; // Default to production
  let port = '8080'; // Default port

  // Detect GitHub Codespaces
  if (process.env.CODESPACES && process.env.CODESPACE_NAME) {
    domain = `https://${process.env.CODESPACE_NAME}-${port}.app.github.dev`;
  }

  // Detect Netlify Deploy Preview
  if (process.env.DEPLOY_URL) {
    domain = process.env.DEPLOY_URL;
  }

  // Read the .eleventy-port file to get the correct port for local development
  if (fs.existsSync('.eleventy-port')) {
    port = fs.readFileSync('.eleventy-port', 'utf8').trim();
    domain = `http://localhost:${port}`;
  }

  // Add domain as global data for templates (used by sitemap)
  eleventyConfig.addGlobalData("siteDomain", domain);

  // Event Handlers

  // Capture changed files before the build starts (Method 1: Eleventy watch)
  eleventyConfig.on('beforeWatch', (changedFiles) => {
    changedFiles.forEach(file => {
      console.log(`Changed source file: ${file}`);
      changedFilesMap.set(file, null);
    });
  });

  // Get changed pages using optimized git operations (Method 2: Optimized Git diff)
  eleventyConfig.on('beforeBuild', () => {
    // Use the optimized build-changed-pages script
    changedPages = getChangedPagesForBuild({
      useCache: true,
      skipFetch: isWatchMode  // Skip network fetch in development watch mode
    });

    // Populate global changedFilePaths Set for use by collections and transforms
    global.changedFilePaths.clear();
    changedPages.forEach(page => {
      if (page.inputPath) {
        global.changedFilePaths.add(page.inputPath);
      }
    });

    if (changedPages.length > 0 && !isWatchMode) {
      console.log(`📄 Detected ${changedPages.length} changed page(s) for review`);
    }
  });

  // After build summary and review page link
  eleventyConfig.on('afterBuild', () => {
    const changedFilesCount = global.changedFilePaths.size;

    if (changedFilesCount > 0) {
      // Log the summary of changed pages
      console.log(`\n${changedFilesCount} page(s) changed.`);

      // Log individual URLs or file paths, depending on mode
      global.gitChangedUrls.forEach((changedItem) => {
        console.log(`${underline}${changedItem}${resetColor}`);
      });

      // Add a blank line after the list of changed pages
      console.log('');

      // Only log the review page link in local development mode
      if (isWatchMode) {
        let reviewPageLink = `${domain}`;
        if (domain.includes('localhost') && !domain.includes(`:${port}`)) {
          reviewPageLink += `:${port}`;
        }
        reviewPageLink += '/en/pages-to-review/';

        console.log(`\nReview the changed pages here: ${underline}${reviewPageLink}${resetColor}\n`);
      }
    } else {
      console.log('No pages to review.\n');
    }

    // Clear for the next watch cycle
    global.changedFilePaths.clear();
    global.gitChangedUrls = [];
  });

  // Add computed data for git creation dates (Phase 2: Optimized with memoization)
  eleventyConfig.addGlobalData("eleventyComputed", {
    gitCreated: (data) => {
      if (data.page && data.page.inputPath) {
        const cacheKey = `gitCreated:${data.page.inputPath}`;

        // Check cache first
        if (gitOperationsCache.has(cacheKey)) {
          return gitOperationsCache.get(cacheKey);
        }

        try {
          const gitCommand = `git log --format="%ai" --reverse "${data.page.inputPath}" | head -1`;
          const result = execSync(gitCommand, { encoding: 'utf8' }).trim();

          const date = result ? new Date(result) : null;

          // Cache the result
          gitOperationsCache.set(cacheKey, date);
          return date;
        } catch (error) {
          // Cache the null result to avoid repeated failures
          gitOperationsCache.set(cacheKey, null);
          return null;
        }
      }
      return null;
    }
  });

  // Ignore template files from being built
  eleventyConfig.ignores.add("src/pages/_template.md");
  eleventyConfig.ignores.add("src/links/_template.md");

  // Phase 2: Git operations cache management and debugging
  eleventyConfig.addGlobalData("gitCacheSize", () => gitOperationsCache.size);

  // Clear git cache function for development
  global.clearGitCache = () => {
    const size = gitOperationsCache.size;
    gitOperationsCache.clear();
    console.log(`🗑️  Cleared ${size} cached git operations`);
    return size;
  };

  // Return Eleventy configuration
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk", "css"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    setUseGitIgnore: false
  };
};
