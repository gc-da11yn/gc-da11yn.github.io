/**
 * Eleventy Collections Configuration
 *
 * This module contains all custom collections for the Digital Accessibility Toolkit.
 * Collections group and filter content for easier template access.
 *
 * Phase 2 Enhancement: Added performance optimizations with caching and reduced iterations
 */

const path = require('path');
const { stripHtml } = require('string-strip-html');

// Phase 2: Collections cache for performance optimization
const collectionsCache = new Map();

module.exports = function (eleventyConfig, options = {}) {
  // Handle both old signature (markdownInstance) and new options object
  const markdownInstance = options.markdownInstance || options;
  const skipGitOps = options.skipGitOps || false;

  // Collection for extracting all headings from pages with TOC (Phase 2: Optimized)
  eleventyConfig.addCollection("allHeadings", function (collectionApi) {
    const cacheKey = 'allHeadings';

    // Check cache first
    if (collectionsCache.has(cacheKey)) {
      return collectionsCache.get(cacheKey);
    }

    const result = collectionApi.getAll().map(item => {
      // Only process items that actually need TOC processing
      if (item.data.toc || item.data.tocSimple) {
        const itemCacheKey = `headings:${item.inputPath}`;

        // Check individual item cache
        if (collectionsCache.has(itemCacheKey)) {
          item.data.headings = collectionsCache.get(itemCacheKey);
          return item;
        }

        const tokens = markdownInstance.parse(item.template.frontMatter.content, {});
        const levels = item.data.tocSimple ? 1 : 2; // tocSimple only includes level 2 headings
        const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);

        const headings = tokens.filter(token =>
          validTags.includes(token.tag) && token.type === 'heading_open'
        ).map(token => {
          const level = token.tag;
          const rawText = tokens[tokens.indexOf(token) + 1].content;
          const text = stripHtml(rawText).result; // Strip HTML tags from the heading text

          // Get slugify function from eleventy
          const eleventySlugify = eleventyConfig.getFilter('slug');
          const id = eleventySlugify(text, { lower: true, strict: true, locale: 'fr' });

          return { level, text, id };
        });

        // Cache the headings for this item
        collectionsCache.set(itemCacheKey, headings);
        item.data.headings = headings;
      }
      return item;
    });

    // Cache the complete collection
    collectionsCache.set(cacheKey, result);
    return result;
  });

  // Custom collection for changed pages (Phase 2: Optimized git diff integration)
  eleventyConfig.addCollection('changedPages', function (collectionApi) {
    const cacheKey = 'changedPages';

    // Check cache first
    if (collectionsCache.has(cacheKey)) {
      return collectionsCache.get(cacheKey);
    }

    // Skip git-based operations in development mode for performance
    if (skipGitOps) {
      const result = [];
      collectionsCache.set(cacheKey, result);
      return result;
    }

    const changedFilePaths = global.changedFilePaths || new Set();

    // Early return if no changed files
    if (changedFilePaths.size === 0) {
      const result = [];
      collectionsCache.set(cacheKey, result);
      return result;
    }

    // More efficient filtering: only process items that might be changed
    const changedPages = collectionApi.getAll()
      .filter(item => {
        const normalizedInputPath = path.relative('./', item.inputPath);
        return changedFilePaths.has(normalizedInputPath);
      })
      .map(item => ({
        url: item.url,
        title: item.data.title || item.fileSlug, // fallback to fileSlug if no title
        locale: item.data.locale || 'en' // default to 'en' if no locale is set
      }));

    // Cache the result
    collectionsCache.set(cacheKey, changedPages);
    return changedPages;
  });

  // Collection of all pages that have at least one role (Phase 2: Optimized with caching)
  eleventyConfig.addCollection("rolePages", (api) => {
    const cacheKey = 'rolePages';

    if (collectionsCache.has(cacheKey)) {
      return collectionsCache.get(cacheKey);
    }

    const result = api.getAll().filter((item) => !!item.data.role);
    collectionsCache.set(cacheKey, result);
    return result;
  });

  // Custom collection for role groups (Phase 2: Optimized with caching and pre-compiled regex)
  eleventyConfig.addCollection("roleGroup", (api) => {
    const cacheKey = 'roleGroup';

    if (collectionsCache.has(cacheKey)) {
      return collectionsCache.get(cacheKey);
    }

    // Pre-compile regex for better performance
    const roleGroupPattern = /^\/(en|fr)\/roles\/(administration|author|business|design|development|testing)\/$/;

    const result = api.getAll().filter((item) => {
      // Check if the page was generated from the roles-group template
      const fromRoleGroupTemplate = item.inputPath && item.inputPath.includes('roles-group.njk');

      // Check if URL matches role group pattern (optimized with pre-compiled regex)
      const matchesRoleGroupPattern = item.url && roleGroupPattern.test(item.url);

      return fromRoleGroupTemplate || matchesRoleGroupPattern;
    });

    collectionsCache.set(cacheKey, result);
    return result;
  });

  // Phase 2: Collections cache management
  global.clearCollectionsCache = () => {
    const size = collectionsCache.size;
    collectionsCache.clear();
    console.log(`🗂️  Cleared ${size} cached collection results`);
    return size;
  };
};
