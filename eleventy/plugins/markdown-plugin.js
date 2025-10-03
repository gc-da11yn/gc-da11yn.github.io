/**
 * Markdown Plugin
 *
 * Eleventy plugin for markdown processing configuration.
 * Converted from modular configuration to plugin architecture.
 *
 * Phase 3: Plugin Architecture Implementation
 */

const EleventyBasePlugin = require('./base-plugin');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { stripHtml } = require('string-strip-html');

class MarkdownPlugin extends EleventyBasePlugin {

  constructor(options = {}) {
    super(options);
    this.markdownInstance = null;
  }

  getDefaultOptions() {
    return {
      ...super.getDefaultOptions(),
      html: true,
      breaks: false,
      linkify: true,
      typographer: true,
      anchor: {
        permalink: false, // Just add IDs, no clickable anchor links
        level: [2, 3, 4, 5, 6],
        slugify: this.createSlugify()
      },
      attrs: {
        // Enable attributes syntax like {.class #id}
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: []  // Empty array allows all attributes
      }
    };
  }

  /**
   * No dependencies - this is a foundational plugin
   */
  getDependencies() {
    return [];
  }

  /**
   * Create enhanced slugify function that matches FiltersPlugin stripTagsSlugify
   * This ensures TOC anchors match the same slugification used elsewhere
   */
  createSlugify() {
    return (str) => {
      // Strip HTML tags first
      let cleanStr = stripHtml(str).result;

      // French accent transliteration
      cleanStr = cleanStr
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ýÿ]/g, 'y')
        .replace(/[ñ]/g, 'n')
        .replace(/[ç]/g, 'c')
        .replace(/[æ]/g, 'ae')
        .replace(/[œ]/g, 'oe');

      // Standard slugification
      return cleanStr
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove remaining special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    };
  }

  /**
   * Configure markdown processing
   */
  configure(eleventyConfig) {
    this.log('Configuring markdown processing...');

    // Create markdown instance with options
    const md = this.createMarkdownInstance();

    // Store instance for other plugins to use
    this.markdownInstance = md;

    // Set as Eleventy's markdown processor
    eleventyConfig.setLibrary('md', md);

    // Store reference on eleventyConfig for backward compatibility
    eleventyConfig.markdownInstance = md;

    this.log('Markdown processing configured with anchor and TOC support');
  }

  /**
   * Create and configure markdown-it instance
   */
  createMarkdownInstance() {
    const { anchor, attrs, ...mdOptions } = this.options;

    // Create base markdown instance
    const md = markdownIt(mdOptions);

    // Add anchor plugin for header links
    if (anchor) {
      md.use(markdownItAnchor, anchor);
      this.log('Added markdown anchor plugin');
    }

    // Add attributes plugin for styling
    if (attrs) {
      md.use(markdownItAttrs, attrs);
      this.log('Added markdown attributes plugin');
    }

    // Add custom rules and plugins
    this.addCustomRules(md);

    return md;
  }

  /**
   * Add custom markdown rules
   */
  addCustomRules(md) {
    // Custom renderer for external links
    const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

    // Removed custom link_open renderer - all links will open in same tab/window

    // Custom renderer for better accessibility
    md.renderer.rules.image = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      const src = token.attrGet('src');
      const alt = token.content || '';
      const title = token.attrGet('title') || '';

      // Ensure alt text exists
      if (!alt) {
        console.warn(`⚠️  Image missing alt text: ${src}`);
      }

      return `<img src="${src}" alt="${alt}"${title ? ` title="${title}"` : ''} loading="lazy">`;
    };

    this.log('Added custom markdown rules for accessibility and external links');
  }

  /**
   * Get the markdown instance for other plugins
   */
  getMarkdownInstance() {
    return this.markdownInstance;
  }

  /**
   * Render markdown content
   */
  render(content) {
    if (!this.markdownInstance) {
      throw new Error('Markdown plugin not configured yet');
    }
    return this.markdownInstance.render(content);
  }

  /**
   * Parse markdown content to tokens
   */
  parse(content) {
    if (!this.markdownInstance) {
      throw new Error('Markdown plugin not configured yet');
    }
    return this.markdownInstance.parse(content);
  }

  /**
   * Validate configuration
   */
  validate() {
    super.validate();

    // Check required dependencies
    try {
      require('markdown-it');
      require('markdown-it-anchor');
      require('markdown-it-attrs');
    } catch (error) {
      throw new Error(`Missing markdown dependencies: ${error.message}`);
    }

    return true;
  }

  /**
   * Monitor markdown processing performance
   */
  async onBuildEnd() {
    if (this.options.environment === 'development' && this.markdownInstance) {
      // Get some basic stats (this would be more detailed in a real implementation)
      const stats = {
        configured: !!this.markdownInstance,
        plugins: ['markdown-it-anchor', 'markdown-it-attrs'],
        options: {
          html: this.options.html,
          breaks: this.options.breaks,
          linkify: this.options.linkify,
          typographer: this.options.typographer
        }
      };

      this.log(`Markdown stats: ${JSON.stringify(stats, null, 2)}`, 'debug');
    }
  }

  /**
   * Hot reload support for markdown configuration
   */
  async onFileChange(changedFiles) {
    // Check if any markdown configuration files changed
    const configFiles = changedFiles.filter(file =>
      file.includes('markdown') || file.includes('.eleventy.js')
    );

    if (configFiles.length > 0) {
      this.log('Markdown configuration files changed, consider restarting for full reload');
    }
  }

  /**
   * Get plugin metadata with markdown-specific info
   */
  getMetadata() {
    const base = super.getMetadata();
    return {
      ...base,
      markdownInstance: !!this.markdownInstance,
      plugins: ['markdown-it', 'markdown-it-anchor', 'markdown-it-attrs'],
      features: {
        anchors: !!this.options.anchor,
        toc: !!this.options.toc,
        externalLinks: true,
        accessibility: true
      }
    };
  }
}

module.exports = MarkdownPlugin;
