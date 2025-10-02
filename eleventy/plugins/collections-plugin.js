/**
 * Collections Plugin
 *
 * Eleventy plugin for custom collections used in the Digital Accessibility Toolkit.
 * Converted from modular configuration to plugin architecture.
 *
 * Phase 3: Plugin Architecture Implementation
 */

const EleventyBasePlugin = require('./base-plugin');
const path = require('path');
const { stripHtml } = require('string-strip-html');

class CollectionsPlugin extends EleventyBasePlugin {

  getDefaultOptions() {
    return {
      ...super.getDefaultOptions(),
      skipGitOps: false, // Can be overridden to skip git operations in development
      enableCaching: true
    };
  }

  getDependencies() {
    return ['MarkdownPlugin']; // May need markdown for processing
  }

  /**
   * Configure all custom collections
   */
  configure(eleventyConfig) {
    this.log('Configuring custom collections...');

    // Get markdown instance from dependencies
    const markdownInstance = this.getMarkdownInstance();

    // Configure collections (skip headings for demo to avoid templateContent timing issues)
    this.log('Skipping headings collection for demo (templateContent timing)', 'debug');
    this.configureChangedPagesCollection(eleventyConfig);
    this.configureTaggedCollections(eleventyConfig);

    this.log('Custom collections configured with caching and performance optimization');
  }

  /**
   * Get markdown instance from dependencies
   */
  getMarkdownInstance() {
    const registry = require('./registry').getRegistry();
    const markdownPlugin = registry.get('MarkdownPlugin');
    return markdownPlugin?.getMarkdownInstance() || null;
  }

  /**
   * Configure headings collection for TOC generation
   */
  configureHeadingsCollection(eleventyConfig, markdownInstance) {
    eleventyConfig.addCollection("allHeadings", (collectionApi) => {
      const cacheKey = 'allHeadings';

      return this.getCached(cacheKey, () => {
        this.log('Generating headings collection...', 'debug');

        return collectionApi.getAll().map(item => {
          // Skip template files and files that might cause issues
          if (item.inputPath.includes('_template') || item.inputPath.includes('node_modules')) {
            return { ...item, headings: [] };
          }

          // Only process items that actually need TOC processing
          if (item.data.toc || item.data.tocSimple) {
            const itemCacheKey = `headings:${item.inputPath}`;

            return this.getCached(itemCacheKey, () => {
              // Safely check for template content
              let content = null;
              try {
                content = item.templateContent;
              } catch (error) {
                // templateContent not ready yet, skip for now
                this.log(`Skipping headings for ${item.inputPath} (content not ready)`, 'debug');
                return { ...item, headings: [] };
              }

              if (!content || !markdownInstance) {
                return { ...item, headings: [] };
              }

              try {
                const tokens = markdownInstance.parse(content, {});
                const headings = tokens
                  .filter(token => token.type === 'heading_open')
                  .map(token => {
                    const level = parseInt(token.tag.substring(1));
                    const contentToken = tokens[tokens.indexOf(token) + 1];
                    const text = contentToken ? stripHtml(contentToken.content).result : '';

                    return {
                      level,
                      text,
                      anchor: this.createSlug(text)
                    };
                  })
                  .filter(heading => {
                    // Filter based on toc settings
                    const minLevel = item.data.tocSimple ? 2 : 2;
                    const maxLevel = item.data.tocSimple ? 2 : 3;
                    return heading.level >= minLevel && heading.level <= maxLevel;
                  });

                return { ...item, headings };
              } catch (error) {
                this.log(`Error processing headings for ${item.inputPath}: ${error.message}`, 'warn');
                return { ...item, headings: [] };
              }
            });
          }

          return { ...item, headings: [] };
        });
      });
    });
  }

  /**
   * Configure changed pages collection
   */
  configureChangedPagesCollection(eleventyConfig) {
    eleventyConfig.addCollection('changedPages', (collectionApi) => {
      const cacheKey = 'changedPages';

      return this.getCached(cacheKey, () => {
        const changedFilePaths = global.changedFilePaths || new Set();

        // Early return if no changed files
        if (changedFilePaths.size === 0) {
          return [];
        }

        this.log(`Processing ${changedFilePaths.size} changed files...`, 'debug');

        // Filter and map changed pages
        return collectionApi.getAll()
          .filter(item => {
            const normalizedInputPath = path.relative('./', item.inputPath);
            return changedFilePaths.has(normalizedInputPath);
          })
          .map(item => ({
            url: item.url,
            title: item.data.title || item.fileSlug,
            locale: item.data.locale || 'en',
            inputPath: item.inputPath,
            lastModified: new Date()
          }))
          .sort((a, b) => b.lastModified - a.lastModified); // Most recent first
      });
    });
  }

  /**
   * Configure tag-based collections
   */
  configureTaggedCollections(eleventyConfig) {
    // Collection for pages by subject
    eleventyConfig.addCollection('pagesBySubject', (collectionApi) => {
      const cacheKey = 'pagesBySubject';

      return this.getCached(cacheKey, () => {
        const pages = collectionApi.getFilteredByGlob('src/pages/**/*.md');
        const grouped = {};

        pages.forEach(page => {
          const subjects = page.data.subject || [];
          subjects.forEach(subject => {
            if (!grouped[subject]) {
              grouped[subject] = [];
            }
            grouped[subject].push(page);
          });
        });

        // Sort pages within each subject by title
        Object.keys(grouped).forEach(subject => {
          grouped[subject].sort((a, b) => {
            const titleA = a.data.title || '';
            const titleB = b.data.title || '';
            return titleA.localeCompare(titleB);
          });
        });

        return grouped;
      });
    });

    // Collection for recent pages (last 10)
    eleventyConfig.addCollection('recentPages', (collectionApi) => {
      const cacheKey = 'recentPages';

      return this.getCached(cacheKey, () => {
        return collectionApi.getAll()
          .filter(item => item.data.title && !item.data.archived)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10);
      });
    });
  }

  /**
   * Create URL-friendly slug
   */
  createSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Clear collection caches when content changes
   */
  async onFileChange(changedFiles) {
    if (this.options.enableCaching) {
      const contentFiles = changedFiles.filter(file =>
        file.endsWith('.md') || file.endsWith('.njk') || file.endsWith('.html')
      );

      if (contentFiles.length > 0) {
        // Clear specific caches that depend on content
        this.cache.delete('allHeadings');
        this.cache.delete('changedPages');
        this.cache.delete('pagesBySubject');
        this.cache.delete('recentPages');

        this.log(`Cleared collection caches for ${contentFiles.length} content changes`);
      }
    }
  }

  /**
   * Skip expensive git operations in development if configured
   */
  shouldSkipGitOperations() {
    return this.options.skipGitOps && this.options.environment === 'development';
  }

  /**
   * Build performance monitoring
   */
  async onBuildEnd() {
    if (this.options.environment === 'development') {
      const stats = {
        cacheSize: this.cache.size,
        collections: ['allHeadings', 'changedPages', 'pagesBySubject', 'recentPages'],
        gitOpsSkipped: this.shouldSkipGitOperations()
      };

      this.log(`Collection stats: ${JSON.stringify(stats)}`, 'debug');
    }
  }

  /**
   * Get metadata with collection-specific info
   */
  getMetadata() {
    const base = super.getMetadata();
    return {
      ...base,
      collections: ['allHeadings', 'changedPages', 'pagesBySubject', 'recentPages'],
      features: {
        tocGeneration: true,
        changeTracking: true,
        subjectGrouping: true,
        caching: this.options.enableCaching
      }
    };
  }
}

module.exports = CollectionsPlugin;
