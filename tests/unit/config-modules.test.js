/**
 * Unit Tests for Eleventy Configuration Modules
 *
 * Tests individual configuration modules to ensure they work correctly
 * in isolation and provide the expected functionality.
 */

const fs = require('fs');
const path = require('path');

// Mock Eleventy config object
const mockEleventyConfig = {
  filters: new Map(),
  transforms: new Map(),
  collections: new Map(),
  passthroughCopy: new Map(),
  shortcodes: new Map(),
  nunjucksFilters: new Map(),

  addFilter: function(name, fn) { this.filters.set(name, fn); },
  addTransform: function(name, fn) { this.transforms.set(name, fn); },
  addCollection: function(name, fn) { this.collections.set(name, fn); },
  addPassthroughCopy: function(config) {
    Object.entries(config).forEach(([key, value]) => {
      this.passthroughCopy.set(key, value);
    });
  },
  addShortcode: function(name, fn) { this.shortcodes.set(name, fn); },
  addNunjucksFilter: function(name, fn) { this.nunjucksFilters.set(name, fn); },
  getFilter: function(name) {
    // Mock slugify filter
    if (name === 'slug') {
      return (str, options = {}) => str.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    }
    return this.filters.get(name);
  },
  setLibrary: function(name, lib) { this.libraries = this.libraries || {}; this.libraries[name] = lib; }
};

describe('Configuration Modules', () => {

  describe('Filters Module', () => {
    let configureFilters;

    beforeEach(() => {
      // Reset mock
      mockEleventyConfig.filters.clear();
      mockEleventyConfig.nunjucksFilters.clear();

      // Require the module fresh
      delete require.cache[require.resolve('../../eleventy/config/filters.js')];
      configureFilters = require('../../eleventy/config/filters.js');
    });

    test('loads without errors', () => {
      expect(() => configureFilters(mockEleventyConfig)).not.toThrow();
    });

    test('registers expected filters', () => {
      configureFilters(mockEleventyConfig);

      const expectedFilters = [
        'stripTagsSlugify', 'localeMatch', 'postDate', 'formatDate',
        'formatYearMonth', 'percentage', 'recentMonths', 'roleKeysForGroup', 'byAnyRole'
      ];

      expectedFilters.forEach(filterName => {
        expect(mockEleventyConfig.filters.has(filterName)).toBe(true);
      });
    });

    test('registers Nunjucks filters', () => {
      configureFilters(mockEleventyConfig);

      const expectedNunjucksFilters = ['markdown', 'split', 'wordCount'];
      expectedNunjucksFilters.forEach(filterName => {
        expect(mockEleventyConfig.nunjucksFilters.has(filterName)).toBe(true);
      });
    });

    test('percentage filter works correctly', () => {
      configureFilters(mockEleventyConfig);
      const percentageFilter = mockEleventyConfig.filters.get('percentage');

      expect(percentageFilter(0.1234)).toBe('12.34%');
      expect(percentageFilter('0.5')).toBe('50.00%');
    });

    test('wordCount filter works correctly', () => {
      configureFilters(mockEleventyConfig);
      const wordCountFilter = mockEleventyConfig.nunjucksFilters.get('wordCount');

      expect(wordCountFilter('Hello world')).toBe(2);
      expect(wordCountFilter('One two three four five')).toBe(5);
      expect(wordCountFilter('')).toBe(0);
      expect(wordCountFilter('<p>Hello <strong>world</strong></p>')).toBe(2);
    });
  });

  describe('Transforms Module', () => {
    let configureTransforms;

    beforeEach(() => {
      mockEleventyConfig.transforms.clear();
      delete require.cache[require.resolve('../../eleventy/config/transforms.js')];
      configureTransforms = require('../../eleventy/config/transforms.js');
    });

    test('loads without errors', () => {
      expect(() => configureTransforms(mockEleventyConfig)).not.toThrow();
    });

    test('registers expected transforms', () => {
      configureTransforms(mockEleventyConfig);

      expect(mockEleventyConfig.transforms.has('htmlbeautify')).toBe(true);
      expect(mockEleventyConfig.transforms.has('csvUtf8Bom')).toBe(true);
      expect(mockEleventyConfig.transforms.has('captureGeneratedUrl')).toBe(true);
    });

    test('CSV UTF-8 BOM transform works', () => {
      configureTransforms(mockEleventyConfig);
      const csvTransform = mockEleventyConfig.transforms.get('csvUtf8Bom');

      const csvContent = 'Name,Age\nJohn,25';
      const result = csvTransform.call({}, csvContent, 'test.csv');

      expect(result).toBe('\uFEFF' + csvContent);
    });

    test('HTML beautify transform works on HTML files', () => {
      configureTransforms(mockEleventyConfig);
      const htmlTransform = mockEleventyConfig.transforms.get('htmlbeautify');

      const htmlContent = '<html><head><title>Test</title></head><body><h1>Hello</h1></body></html>';
      const result = htmlTransform.call({}, htmlContent, 'test.html');

      expect(result).toContain('\n'); // Should be beautified with line breaks
      expect(result).toContain('<title>Test</title>');
    });

    test('transforms skip non-matching files', () => {
      configureTransforms(mockEleventyConfig);
      const csvTransform = mockEleventyConfig.transforms.get('csvUtf8Bom');
      const htmlTransform = mockEleventyConfig.transforms.get('htmlbeautify');

      const content = 'some content';

      expect(csvTransform.call({}, content, 'test.html')).toBe(content);
      expect(htmlTransform.call({}, content, 'test.csv')).toBe(content);
    });
  });

  describe('Collections Module', () => {
    let configureCollections;

    beforeEach(() => {
      mockEleventyConfig.collections.clear();
      delete require.cache[require.resolve('../../eleventy/config/collections.js')];
      configureCollections = require('../../eleventy/config/collections.js');
    });

    test('loads without errors', () => {
      const mockMarkdown = { parse: () => [] };
      expect(() => configureCollections(mockEleventyConfig, mockMarkdown)).not.toThrow();
    });

    test('registers expected collections', () => {
      const mockMarkdown = { parse: () => [] };
      configureCollections(mockEleventyConfig, mockMarkdown);

      const expectedCollections = ['allHeadings', 'changedPages', 'rolePages', 'roleGroup'];
      expectedCollections.forEach(collectionName => {
        expect(mockEleventyConfig.collections.has(collectionName)).toBe(true);
      });
    });
  });

  describe('Passthrough Copy Module', () => {
    let configurePassthrough;

    beforeEach(() => {
      mockEleventyConfig.passthroughCopy.clear();
      delete require.cache[require.resolve('../../eleventy/config/passthrough.js')];
      configurePassthrough = require('../../eleventy/config/passthrough.js');
    });

    test('loads without errors', () => {
      expect(() => configurePassthrough(mockEleventyConfig)).not.toThrow();
    });

    test('registers expected passthrough copy rules', () => {
      configurePassthrough(mockEleventyConfig);

      expect(mockEleventyConfig.passthroughCopy.get('./src/_docs')).toBe('docs');
      expect(mockEleventyConfig.passthroughCopy.get('./src/_images')).toBe('img');
      expect(mockEleventyConfig.passthroughCopy.get('./src/CNAME')).toBe('CNAME');
      expect(mockEleventyConfig.passthroughCopy.get('./src/_scripts')).toBe('js');
    });
  });

  describe('Markdown Module', () => {
    let configureMarkdown;

    beforeEach(() => {
      mockEleventyConfig.shortcodes.clear();
      delete require.cache[require.resolve('../../eleventy/config/markdown.js')];
      configureMarkdown = require('../../eleventy/config/markdown.js');
    });

    test('loads without errors', () => {
      expect(() => configureMarkdown(mockEleventyConfig)).not.toThrow();
    });

    test('returns markdown instance', () => {
      const markdownInstance = configureMarkdown(mockEleventyConfig);
      expect(markdownInstance).toBeDefined();
      expect(typeof markdownInstance.render).toBe('function');
    });

    test('registers extractHeadings shortcode', () => {
      configureMarkdown(mockEleventyConfig);
      expect(mockEleventyConfig.shortcodes.has('extractHeadings')).toBe(true);
    });

    test('markdown instance renders correctly', () => {
      const markdownInstance = configureMarkdown(mockEleventyConfig);
      const result = markdownInstance.render('# Hello World\n\nThis is a test.');

      expect(result).toContain('<h1');
      expect(result).toContain('Hello World');
      expect(result).toContain('<p>This is a test.</p>');
    });
  });

  describe('Module Integration', () => {
    test('all modules load together without conflicts', () => {
      const mockConfig = {
        filters: new Map(),
        transforms: new Map(),
        collections: new Map(),
        passthroughCopy: new Map(),
        shortcodes: new Map(),
        nunjucksFilters: new Map(),

        addFilter: function(name, fn) { this.filters.set(name, fn); },
        addTransform: function(name, fn) { this.transforms.set(name, fn); },
        addCollection: function(name, fn) { this.collections.set(name, fn); },
        addPassthroughCopy: function(config) {
          Object.entries(config).forEach(([key, value]) => {
            this.passthroughCopy.set(key, value);
          });
        },
        addShortcode: function(name, fn) { this.shortcodes.set(name, fn); },
        addNunjucksFilter: function(name, fn) { this.nunjucksFilters.set(name, fn); },
        getFilter: function(name) {
          if (name === 'slug') {
            return (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '-');
          }
          return this.filters.get(name);
        },
        setLibrary: function(name, lib) { this.libraries = this.libraries || {}; this.libraries[name] = lib; }
      };

      expect(() => {
        const configureMarkdown = require('../../eleventy/config/markdown.js');
        const configureFilters = require('../../eleventy/config/filters.js');
        const configureTransforms = require('../../eleventy/config/transforms.js');
        const configureCollections = require('../../eleventy/config/collections.js');
        const configurePassthrough = require('../../eleventy/config/passthrough.js');

        const markdownInstance = configureMarkdown(mockConfig);
        configureFilters(mockConfig, markdownInstance);
        configureTransforms(mockConfig);
        configureCollections(mockConfig, markdownInstance);
        configurePassthrough(mockConfig);
      }).not.toThrow();
    });
  });
});
