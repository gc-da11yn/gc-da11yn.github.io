/**
 * Eleventy Configuration - Main Entry Point
 *
 * Plugin architecture for the Government of Canada Digital Accessibility Toolkit.
 * This file orchestrates plugin-based configuration for maximum extensibility.
 *
 * Evolution:
 * - Phase 1: Modular configuration extraction
 * - Phase 2: Performance optimizations with conditional loading
 * - Phase 3: Complete plugin architecture (Current)
 * Date: October 2, 2025
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { getChangedPagesForBuild } = require('./scripts/build-changed-pages');
const { stripHtml } = require('string-strip-html');

// Phase 3: Plugin Architecture imports
const MarkdownPlugin = require('./eleventy/plugins/markdown-plugin');
const FiltersPlugin = require('./eleventy/plugins/filters-plugin');
const CollectionsPlugin = require('./eleventy/plugins/collections-plugin');

// Legacy modular config (for backward compatibility during transition)
const configurePassthrough = require('./eleventy/config/passthrough');

// Conditionally loaded legacy modules
// Conditionally loaded legacy modules
let configureTransforms;

// ANSI escape codes for colored console output
const underline = '\x1b[4m';
const resetColor = '\x1b[0m';

// Phase 2: Environment detection for conditional loading
const isWatchMode = process.env.ELEVENTY_WATCH === 'true';
const environment = process.env.ELEVENTY_ENV || 'development';
const isProduction = environment === 'production';
const isDevelopment = environment === 'development' || environment === 'dev' || environment === 'local';

// Global variables for change tracking (Phase 2 optimized)
global.changedFilePaths = new Set();
global.gitChangedUrls = [];

// Phase 2: Git operations cache for performance optimization
const gitOperationsCache = new Map();

module.exports = function (eleventyConfig) {

  // Phase 3: Performance timing for plugin architecture
  const configStart = performance.now();

  console.log(`🚀 Eleventy Plugin Architecture (Environment: ${environment})`);

  // Phase 3: Configure Core Plugins
  try {
    console.log('🔧 Configuring plugins...');

    // Configure markdown plugin (foundational)
    const markdownPlugin = new MarkdownPlugin({ environment });
    markdownPlugin.configure(eleventyConfig);
    console.log('✅ Markdown plugin configured');

    // Configure filters plugin
    const filtersPlugin = new FiltersPlugin({
      environment,
      enableMemoization: true
    });
    filtersPlugin.configure(eleventyConfig);
    console.log('✅ Filters plugin configured');

    // Configure collections plugin
    const collectionsPlugin = new CollectionsPlugin({
      environment,
      skipGitOps: isDevelopment && !isWatchMode,
      enableCaching: true
    });
    collectionsPlugin.configure(eleventyConfig);
    console.log('✅ Collections plugin configured');

    console.log('🎉 Plugin architecture: All plugins configured successfully!');
  } catch (error) {
    console.error('❌ Plugin configuration failed:', error.message);
    throw error;
  }

  // Phase 2: Conditional module loading - Load modules based on environment and needs

  // Always configure passthrough (needed for static assets)
  configurePassthrough(eleventyConfig);

  // Filters now handled by FiltersPlugin above

  // Conditionally load transforms based on environment
  if (!configureTransforms) {
    configureTransforms = require('./eleventy/config/transforms');
  }
  // Skip expensive transforms in development for faster builds
  if (isProduction || !isDevelopment) {
    configureTransforms(eleventyConfig);
  } else {
    console.log('🏃 Skipping transforms in development mode for faster builds');
    // But always include essential TOC transform
    eleventyConfig.addTransform('extractTocHeadings', function(content, outputPath) {
      // Only process HTML files
      if (!outputPath || !outputPath.endsWith('.html')) {
        return content;
      }

      // Access page data correctly
      const pageData = this.page?.data || this.data || {};

      // Skip if page doesn't need TOC
      if (!pageData.toc && !pageData.tocSimple) {
        return content;
      }

      // Extract headings from the HTML content
      const headingRegex = /<h([23])([^>]*?)id="([^"]*)"([^>]*?)>(.*?)<\/h[23]>/gi;
      const headings = [];
      let match;

      while ((match = headingRegex.exec(content)) !== null) {
        const level = `h${match[1]}`;
        const id = match[3];
        const rawText = match[5];
        // Strip HTML tags from heading text
        const text = rawText.replace(/<[^>]+>/g, '').trim();

        // Filter based on TOC settings
        const levelNumber = parseInt(match[1]);
        const minLevel = pageData.tocSimple ? 2 : 2;
        const maxLevel = pageData.tocSimple ? 2 : 3;

        if (levelNumber >= minLevel && levelNumber <= maxLevel) {
          headings.push({
            level,
            text,
            id
          });
        }
      }

      // Inject headings data into the page
      if (headings.length > 0) {
        // Replace the empty TOC with populated one
        const tocRegex = /(<aside>\s*<h2>.*?On this page.*?<\/h2>\s*<ul>\s*)([\s\S]*?)(\s*<\/ul>\s*<\/aside>)/i;
        const tocMatch = content.match(tocRegex);

        if (tocMatch) {
          let tocHtml = '';
          let currentLevel = 2;

          headings.forEach((heading, index) => {
            const headingLevel = parseInt(heading.level.substring(1));

            if (headingLevel === 2) {
              // Close previous nested lists
              if (currentLevel > 2) {
                tocHtml += '</ul></li>';
              } else if (index > 0) {
                tocHtml += '</li>';
              }
              tocHtml += `<li><a href="#${heading.id}">${heading.text}</a>`;
              currentLevel = 2;
            } else if (headingLevel === 3 && !pageData.tocSimple) {
              if (currentLevel < 3) {
                tocHtml += '<ul>';
                currentLevel = 3;
              }
              tocHtml += `<li><a href="#${heading.id}">${heading.text}</a></li>`;
            }
          });

          // Close remaining tags
          if (currentLevel > 2) {
            tocHtml += '</ul></li>';
          } else if (headings.length > 0) {
            tocHtml += '</li>';
          }

          content = content.replace(tocRegex, `$1${tocHtml}$3`);
        }
      }

      return content;
    });
  }

  // Collections now handled by CollectionsPlugin above  // Add core Eleventy plugins
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

  // Phase 2: Conditionally add git creation dates (optimize for development)
  if (isProduction || process.env.ENABLE_GIT_DATES === 'true') {
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
  } else {
    console.log('🚀 Skipping git date operations in development for faster builds');
  }

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

  // Phase 2: Configuration performance logging
  if (isDevelopment) {
    const configEnd = performance.now();
    const configTime = ((configEnd - configStart) / 1000).toFixed(2);
    console.log(`⚡ Eleventy configuration completed in ${configTime}s`);
  }

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
    setUseGitIgnore: false,
    quietMode: isDevelopment || isWatchMode // Suppress verbose output only during development/watch
  };
};
