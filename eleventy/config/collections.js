/**
 * Eleventy Collections Configuration
 *
 * This module contains all custom collections for the Digital Accessibility Toolkit.
 * Collections group and filter content for easier template access.
 */

const path = require('path');
const { stripHtml } = require('string-strip-html');

module.exports = function (eleventyConfig, markdownInstance) {

  // Collection for extracting all headings from pages with TOC
  eleventyConfig.addCollection("allHeadings", function (collectionApi) {
    return collectionApi.getAll().map(item => {
      if (item.data.toc || item.data.tocSimple) {
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

        item.data.headings = headings;
      }
      return item;
    });
  });

  // Custom collection for changed pages (git diff integration)
  eleventyConfig.addCollection('changedPages', function (collectionApi) {
    const changedPages = [];

    // This will be optimized in Phase 2 with better change detection
    const changedFilePaths = global.changedFilePaths || new Set();

    collectionApi.getAll().forEach(item => {
      const normalizedInputPath = path.relative('./', item.inputPath);
      if (changedFilePaths.has(normalizedInputPath)) {
        // Store both the URL, title, and locale for each changed page
        changedPages.push({
          url: item.url,
          title: item.data.title || item.fileSlug, // fallback to fileSlug if no title
          locale: item.data.locale || 'en' // default to 'en' if no locale is set
        });
      }
    });

    return changedPages; // Returning the changed URLs, titles, and locales for the template
  });

  // Collection of all pages that have at least one role
  eleventyConfig.addCollection("rolePages", (api) =>
    api.getAll().filter((item) => !!item.data.role)
  );

  // Custom collection for role groups to work around pagination tag issues
  eleventyConfig.addCollection("roleGroup", (api) => {
    // Find all pages generated from the roles-group.njk template OR
    // pages with URLs matching role group patterns
    return api.getAll().filter((item) => {
      // Check if the page was generated from the roles-group template
      const fromRoleGroupTemplate = item.inputPath && item.inputPath.includes('roles-group.njk');

      // Check if URL matches role group pattern (e.g., /en/roles/business/, /fr/roles/design/)
      const matchesRoleGroupPattern = item.url && item.url.match(/^\/(en|fr)\/roles\/(administration|author|business|design|development|testing)\/$/);

      return fromRoleGroupTemplate || matchesRoleGroupPattern;
    });
  });
};
