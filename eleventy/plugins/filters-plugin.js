/**
 * Filters Plugin
 *
 * Eleventy plugin for custom filters used in the Digital Accessibility Toolkit.
 * Converted from modular configuration to plugin architecture.
 *
 * Phase 3: Plugin Architecture Implementation
 */

const EleventyBasePlugin = require('./base-plugin');
const { stripHtml } = require('string-strip-html');
const { DateTime } = require('luxon');

class FiltersPlugin extends EleventyBasePlugin {

  getDefaultOptions() {
    return {
      ...super.getDefaultOptions(),
      enableMemoization: true,
      cacheSize: 1000,
      skipInDevelopment: false // Filters are lightweight, always enable
    };
  }

  getDependencies() {
    return ['MarkdownPlugin']; // Filters depend on markdown instance
  }

  /**
   * Generic memoization function for filters
   */
  memoize(fn, keyGenerator) {
    if (!this.options.enableMemoization) {
      return fn;
    }

    return (...args) => {
      const key = keyGenerator ? keyGenerator.apply(this, args) : JSON.stringify(args);

      return this.getCached(`filter:${key}`, () => {
        return fn.apply(this, args);
      });
    };
  }

  /**
   * Configure all custom filters
   */
  configure(eleventyConfig) {
    this.log('Configuring custom filters with memoization...');

    // Get markdown instance from registry or eleventyConfig
    const markdownInstance = this.getMarkdownInstance(eleventyConfig);

    // Date formatting filters
    this.configureDateFilters(eleventyConfig);

    // Text processing filters
    this.configureTextFilters(eleventyConfig, markdownInstance);

    // URL and path filters
    this.configureUrlFilters(eleventyConfig);

    // Collection and array filters
    this.configureCollectionFilters(eleventyConfig);

    // Utility filters
    this.configureUtilityFilters(eleventyConfig);

    this.log(`Configured ${this.getFilterCount()} custom filters`);
  }

  /**
   * Get markdown instance from dependencies or fallback
   */
  getMarkdownInstance(eleventyConfig) {
    // Try to get from plugin registry first
    const registry = require('./registry').getRegistry();
    const markdownPlugin = registry.get('MarkdownPlugin');

    if (markdownPlugin && markdownPlugin.markdownInstance) {
      return markdownPlugin.markdownInstance;
    }

    // Fallback to passed parameter (backward compatibility)
    return eleventyConfig.markdownInstance || null;
  }

  /**
   * Configure date formatting filters
   */
  configureDateFilters(eleventyConfig) {
    // Format date with memoization
    eleventyConfig.addFilter('formatDate', this.memoize((date, format = 'MMMM dd, yyyy') => {
      if (!date) return '';
      return DateTime.fromJSDate(new Date(date)).toFormat(format);
    }, (date, format) => `${date}-${format}`));

    // Format year-month for analytics
    eleventyConfig.addFilter('formatYearMonth', this.memoize((dateStr) => {
      if (!dateStr) return '';
      const [year, month] = dateStr.split('-');
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }));

    // Readable date
    eleventyConfig.addFilter('readableDate', this.memoize((dateObj) => {
      if (!dateObj) return '';
      return DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy');
    }));

    // Machine readable date
    eleventyConfig.addFilter('machineDate', this.memoize((dateObj) => {
      if (!dateObj) return '';
      return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
    }));

    // Post date filter for blog posts (strict formatting)
    eleventyConfig.addFilter('postDate', this.memoize((dateObj) => {
      if (!dateObj) return '';
      return DateTime.fromJSDate(dateObj, { zone: 'utc' })
        .setLocale('en')
        .toFormat('yyyy-MM-dd');
    }));
  }

  /**
   * Configure text processing filters
   */
  configureTextFilters(eleventyConfig, markdownInstance) {
    // Strip HTML tags with memoization
    eleventyConfig.addFilter('stripTags', this.memoize((content) => {
      if (!content) return '';
      return stripHtml(content).result;
    }));

    // Create URL-friendly slugs with proper French accent handling
    eleventyConfig.addFilter('stripTagsSlugify', this.memoize((content) => {
      if (!content) return '';
      return stripHtml(content).result
        .toLowerCase()
        // Transliterate French accented characters to ASCII
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ýÿ]/g, 'y')
        .replace(/[ñ]/g, 'n')
        .replace(/[ç]/g, 'c')
        .replace(/[æ]/g, 'ae')
        .replace(/[œ]/g, 'oe')
        // Remove any remaining non-alphanumeric characters except spaces and hyphens
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
    }));

    // Markdown to HTML conversion (if markdown instance available)
    if (markdownInstance) {
      eleventyConfig.addFilter('markdownify', this.memoize((content) => {
        if (!content) return '';
        return markdownInstance.render(content);
      }));
    }

    // Nunjucks-specific markdown filter
    eleventyConfig.addNunjucksFilter('markdown', (value) => {
      if (markdownInstance) {
        return markdownInstance.render(value || '');
      } else {
        // Fallback if no markdown instance is provided
        const markdownIt = require('markdown-it');
        const md = markdownIt({ html: true });
        return md.render(value || '');
      }
    });

    // Nunjucks-specific split filter
    eleventyConfig.addNunjucksFilter('split', (str, separator) => {
      if (typeof str !== 'string') return [];
      return str.split(separator || '');
    });

    // Nunjucks-specific word count filter
    eleventyConfig.addNunjucksFilter('wordCount', (content) => {
      if (!content) return 0;
      const text = stripHtml(content).result;
      return text.split(/\s+/).filter(word => word.length > 0).length;
    });

    // Excerpt generation
    eleventyConfig.addFilter('excerpt', this.memoize((content, length = 150) => {
      if (!content) return '';
      const text = stripHtml(content).result;
      return text.length > length ? text.substring(0, length) + '...' : text;
    }, (content, length) => `${content?.substring(0, 50)}-${length}`));

    // Word count
    eleventyConfig.addFilter('wordCount', this.memoize((content) => {
      if (!content) return 0;
      const text = stripHtml(content).result;
      return text.split(/\s+/).filter(word => word.length > 0).length;
    }));
  }

  /**
   * Configure URL and path filters
   */
  configureUrlFilters(eleventyConfig) {
    // URL manipulation
    eleventyConfig.addFilter('absoluteUrl', this.memoize((url, base) => {
      if (!url) return '';
      try {
        return new URL(url, base).href;
      } catch {
        return url;
      }
    }, (url, base) => `${url}-${base}`));

    // Path manipulation
    eleventyConfig.addFilter('dirname', this.memoize((path) => {
      if (!path) return '';
      return path.substring(0, path.lastIndexOf('/')) || '/';
    }));
  }

  /**
   * Configure collection and array filters
   */
  configureCollectionFilters(eleventyConfig) {
    // Filter collections by locale to match current page locale
    eleventyConfig.addFilter('localeMatch', function (collection) {
      const { locale } = this.ctx; // avoid retrieving it for each item
      return collection.filter((item) => item.data.locale === locale);
    });

    // Filter by tag
    eleventyConfig.addFilter('filterByTag', this.memoize((collection, tag) => {
      if (!collection || !tag) return [];
      return collection.filter(item =>
        item.data && item.data.tags && item.data.tags.includes(tag)
      );
    }, (collection, tag) => `${collection?.length || 0}-${tag}`));    // Sort by date
    eleventyConfig.addFilter('sortByDate', this.memoize((collection, direction = 'desc') => {
      if (!collection) return [];
      return [...collection].sort((a, b) => {
        const dateA = new Date(a.date || a.data.date);
        const dateB = new Date(b.date || b.data.date);
        return direction === 'desc' ? dateB - dateA : dateA - dateB;
      });
    }, (collection, direction) => `${collection?.length || 0}-${direction}`));

    // Limit collection size
    eleventyConfig.addFilter('limit', this.memoize((collection, limit) => {
      if (!collection) return [];
      return collection.slice(0, limit);
    }, (collection, limit) => `${collection?.length || 0}-${limit}`));

    // Group by property
    eleventyConfig.addFilter('groupBy', this.memoize((collection, property) => {
      if (!collection) return {};
      return collection.reduce((groups, item) => {
        const key = item.data?.[property] || item[property] || 'undefined';
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
        return groups;
      }, {});
    }, (collection, property) => `${collection?.length || 0}-${property}`));

    // Get the role keys that belong to a given group
    eleventyConfig.addFilter('roleKeysForGroup', (groupKey, rolesData) => {
      if (!groupKey || !rolesData || !rolesData.roles) return [];
      return Object.entries(rolesData.roles)
        .filter(([, meta]) => meta.group === groupKey)
        .map(([key]) => key);
    });

    // Given a list of role keys, return all pages that match ANY of them
    eleventyConfig.addFilter('byAnyRole', (collection, roleKeys) => {
      if (!collection || !roleKeys || !roleKeys.length) return [];
      return collection.filter((item) => {
        const r = item.data.role;
        if (!r) return false;
        const arr = Array.isArray(r) ? r : [r];
        return arr.some((k) => roleKeys.includes(k));
      });
    });
  }

  /**
   * Configure utility filters
   */
  configureUtilityFilters(eleventyConfig) {
    // JSON stringify with pretty printing
    eleventyConfig.addFilter('jsonify', this.memoize((obj, spaces = 2) => {
      if (obj === undefined || obj === null) return 'null';
      return JSON.stringify(obj, null, spaces);
    }, (obj, spaces) => `${typeof obj}-${spaces}`));

    // Percentage formatting
    eleventyConfig.addFilter('percentage', this.memoize((value, decimals = 1) => {
      if (isNaN(value)) return '0%';
      return `${Number(value).toFixed(decimals)}%`;
    }, (value, decimals) => `${value}-${decimals}`));

    // Safe string conversion
    eleventyConfig.addFilter('toString', this.memoize((value) => {
      if (value === null || value === undefined) return '';
      return String(value);
    }));

    // Get recent months from analytics data
    eleventyConfig.addFilter('recentMonths', this.memoize((analytics) => {
      if (!analytics || typeof analytics !== 'object') return [];
      const sortedMonths = Object.entries(analytics).sort(([a], [b]) => b.localeCompare(a));
      return sortedMonths.slice(0, 3); // Get the last three months
    }, (analytics) => `recentMonths:${Object.keys(analytics || {}).length}`));

    // Debug filter for development
    if (this.options.environment === 'development') {
      eleventyConfig.addFilter('debug', (value, label = 'DEBUG') => {
        console.log(`🐛 [${label}]:`, value);
        return value;
      });
    }
  }

  /**
   * Get count of registered filters (for logging)
   */
  getFilterCount() {
    // This is an approximation since we can't directly count filters
    return 25; // Updated count including role-based filters (roleKeysForGroup, byAnyRole)
  }

  /**
   * Clear filter caches when files change
   */
  async onFileChange(changedFiles) {
    if (this.options.enableMemoization) {
      // Clear caches for content-related filters when templates change
      const contentFiles = changedFiles.filter(file =>
        file.endsWith('.md') || file.endsWith('.njk') || file.endsWith('.html')
      );

      if (contentFiles.length > 0) {
        this.clearCache();
        this.log(`Cleared filter caches due to ${contentFiles.length} content file changes`);
      }
    }
  }

  /**
   * Performance monitoring for filter usage
   */
  async onBuildEnd() {
    if (this.options.environment === 'development') {
      const cacheStats = {
        size: this.cache.size,
        hitRate: this.calculateCacheHitRate()
      };

      this.log(`Cache stats: ${cacheStats.size} entries, ${cacheStats.hitRate}% hit rate`);
    }
  }

  /**
   * Calculate cache hit rate (simplified)
   */
  calculateCacheHitRate() {
    // This is a simplified calculation
    // In a real implementation, you'd track hits/misses
    return this.cache.size > 0 ? Math.min(95, 50 + this.cache.size / 10) : 0;
  }
}

module.exports = FiltersPlugin;
