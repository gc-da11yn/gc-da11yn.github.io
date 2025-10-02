/**
 * Eleventy Filters Configuration
 *
 * This module contains all custom filters for the Digital Accessibility Toolkit.
 * Filters are used to transform data in templates.
 *
 * Phase 2 Enhancement: Added memoization for performance optimization
 */

const { stripHtml } = require('string-strip-html');
const { DateTime } = require('luxon');

// Memoization cache for expensive filter operations
const filterCache = new Map();

// Generic memoization function for filters
function memoize(fn, keyGenerator) {
  return function(...args) {
    const key = keyGenerator ? keyGenerator.apply(this, args) : JSON.stringify(args);

    if (filterCache.has(key)) {
      return filterCache.get(key);
    }

    const result = fn.apply(this, args);
    filterCache.set(key, result);
    return result;
  };
}

module.exports = function (eleventyConfig, markdownInstance = null) {

  // Strip HTML tags and create URL-friendly slugs (memoized for performance)
  eleventyConfig.addFilter("stripTagsSlugify", memoize((str) => {
    if (!str) return;
    const eleventySlugify = eleventyConfig.getFilter('slug');
    return eleventySlugify(stripHtml(str).result, { lower: true, strict: true, locale: 'fr' });
  }, (str) => `stripTagsSlugify:${str}`));

  // Filter collections by locale to match current page locale
  eleventyConfig.addFilter("localeMatch", function (collection) {
    const { locale } = this.ctx; // avoid retrieving it for each item
    return collection.filter((item) => item.data.locale === locale);
  });

  // Specific postDate filter for blog posts or other content with strict formatting
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("en")
      .toFormat("yyyy'-'MM'-'dd");
  });

  // Format date filter to display full date (memoized for performance)
  eleventyConfig.addFilter("formatDate", memoize(function (dateObj) {
    const locale = this.ctx.locale || 'en';  // Use the locale from the context, default to 'en'

    let luxonDate;

    // Check if the dateObj is an ISO string and parse it to a DateTime object
    if (typeof dateObj === 'string') {
      luxonDate = DateTime.fromISO(dateObj);  // Handle ISO strings
    } else if (dateObj instanceof Date) {
      luxonDate = DateTime.fromJSDate(dateObj);  // Handle JS Date objects
    } else {
      return "Invalid Date";  // Return fallback if neither works
    }

    return luxonDate.setLocale(locale).toLocaleString(DateTime.DATE_HUGE);  // Use DATE_HUGE for formatting
  }, function (dateObj) {
    const locale = this.ctx.locale || 'en';
    const dateKey = dateObj instanceof Date ? dateObj.toISOString() : String(dateObj);
    return `formatDate:${dateKey}:${locale}`;
  }));

  // Format year and month to display "Month Year" in the correct locale (memoized for performance)
  eleventyConfig.addFilter("formatYearMonth", memoize(function (dateString) {
    const locale = this.ctx.locale || 'en';  // Use the locale from the context, default to 'en'

    return DateTime.fromFormat(dateString, 'yyyy-MM')
      .setLocale(locale)
      .toFormat('LLLL yyyy');  // Use LLLL for full month name
  }, function (dateString) {
    const locale = this.ctx.locale || 'en';
    return `formatYearMonth:${dateString}:${locale}`;
  }));

  // Convert decimal to percentage (memoized for performance)
  eleventyConfig.addFilter("percentage", memoize(function (value) {
    return (parseFloat(value) * 100).toFixed(2) + '%';
  }, (value) => `percentage:${value}`));

  // Get recent months from analytics data
  eleventyConfig.addFilter("recentMonths", function (analytics) {
    const sortedMonths = Object.entries(analytics).sort(([a], [b]) => b.localeCompare(a)); // Reverse sort by month key
    return sortedMonths.slice(0, 3); // Get the last three months
  });

  // Get the role keys that belong to a given group
  eleventyConfig.addFilter("roleKeysForGroup", function (groupKey, rolesData) {
    if (!groupKey || !rolesData || !rolesData.roles) return [];
    return Object.entries(rolesData.roles)
      .filter(([, meta]) => meta.group === groupKey)
      .map(([key]) => key);
  });

  // Given a list of role keys, return all pages that match ANY of them
  eleventyConfig.addFilter("byAnyRole", function (collection, roleKeys) {
    if (!collection || !roleKeys || !roleKeys.length) return [];
    return collection.filter((item) => {
      const r = item.data.role;
      if (!r) return false;
      const arr = Array.isArray(r) ? r : [r];
      return arr.some((k) => roleKeys.includes(k));
    });
  });

  // Nunjucks-specific filters

  // Add custom Markdown filter for Nunjucks
  eleventyConfig.addNunjucksFilter("markdown", function (value) {
    if (markdownInstance) {
      return markdownInstance.render(value);
    } else {
      // Fallback if no markdown instance is provided
      const markdownIt = require('markdown-it');
      const md = markdownIt({ html: true });
      return md.render(value);
    }
  });

  // Add split filter for Nunjucks
  eleventyConfig.addNunjucksFilter("split", function (str, separator) {
    if (typeof str !== 'string') return [];
    return str.split(separator || ' ');
  });

  // Add wordCount filter for convenience
  eleventyConfig.addNunjucksFilter("wordCount", function (content) {
    if (!content) return 0;
    const text = typeof content === 'string' ? content : String(content);
    const stripped = stripHtml(text).result;
    const words = stripped.trim().split(/\s+/);
    return words.length === 1 && words[0] === '' ? 0 : words.length;
  });

  // Expose cache management functions for development/debugging
  eleventyConfig.addGlobalData("filterCacheSize", () => filterCache.size);

  // Clear cache function (useful for development)
  global.clearFilterCache = () => {
    const size = filterCache.size;
    filterCache.clear();
    console.log(`🧹 Cleared ${size} cached filter results`);
    return size;
  };
};
