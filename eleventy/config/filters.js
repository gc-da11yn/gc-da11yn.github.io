/**
 * Eleventy Filters Configuration
 *
 * This module contains all custom filters for the Digital Accessibility Toolkit.
 * Filters are used to transform data in templates.
 */

const { stripHtml } = require('string-strip-html');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig, markdownInstance = null) {

  // Strip HTML tags and create URL-friendly slugs
  eleventyConfig.addFilter("stripTagsSlugify", (str) => {
    if (!str) return;
    const eleventySlugify = eleventyConfig.getFilter('slug');
    return eleventySlugify(stripHtml(str).result, { lower: true, strict: true, locale: 'fr' });
  });

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

  // Format date filter to display full date
  eleventyConfig.addFilter("formatDate", function (dateObj) {
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
  });

  // Format year and month to display "Month Year" in the correct locale
  eleventyConfig.addFilter("formatYearMonth", function (dateString) {
    const locale = this.ctx.locale || 'en';  // Use the locale from the context, default to 'en'

    return DateTime.fromFormat(dateString, 'yyyy-MM')
      .setLocale(locale)
      .toFormat('LLLL yyyy');  // Use LLLL for full month name
  });

  // Convert decimal to percentage
  eleventyConfig.addFilter("percentage", function (value) {
    return (parseFloat(value) * 100).toFixed(2) + '%';
  });

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
};
