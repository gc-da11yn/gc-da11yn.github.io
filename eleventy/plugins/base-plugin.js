/**
 * Base Eleventy Plugin Class
 *
 * Abstract base class for all Eleventy configuration plugins.
 * Provides standardized interface, lifecycle hooks, and dependency management.
 *
 * Phase 3: Plugin Architecture Implementation
 */

class EleventyBasePlugin {
  constructor(options = {}) {
    this.name = this.constructor.name;
    this.options = this.mergeOptions(this.getDefaultOptions(), options);
    this.dependencies = this.getDependencies();
    this.cache = new Map();
    this.enabled = this.shouldEnable();

    // Performance tracking
    this.startTime = null;
    this.endTime = null;
  }

  /**
   * Get default options for this plugin
   * Override in subclasses to provide defaults
   */
  getDefaultOptions() {
    return {
      enabled: true,
      cache: true,
      skipInDevelopment: false,
      environment: process.env.ELEVENTY_ENV || 'development'
    };
  }

  /**
   * Get plugin dependencies (other plugins this plugin needs)
   * Override in subclasses to specify dependencies
   */
  getDependencies() {
    return [];
  }

  /**
   * Determine if this plugin should be enabled
   * Override for custom logic
   */
  shouldEnable() {
    const { enabled, skipInDevelopment, environment } = this.options;

    if (!enabled) return false;
    if (skipInDevelopment && (environment === 'development' || environment === 'dev')) {
      return false;
    }

    return true;
  }

  /**
   * Merge default options with user options
   */
  mergeOptions(defaults, userOptions) {
    return Object.assign({}, defaults, userOptions);
  }

  /**
   * Cache management with optional TTL
   */
  getCached(key, generator, ttl = null) {
    if (!this.options.cache) {
      return generator();
    }

    const cached = this.cache.get(key);
    if (cached) {
      // Check TTL if specified
      if (ttl && Date.now() - cached.timestamp > ttl) {
        this.cache.delete(key);
      } else {
        return cached.value;
      }
    }

    const value = generator();
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });

    return value;
  }

  /**
   * Clear plugin cache
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Performance timing utilities
   */
  startTiming() {
    this.startTime = performance.now();
  }

  endTiming() {
    this.endTime = performance.now();
    return this.getExecutionTime();
  }

  getExecutionTime() {
    if (this.startTime && this.endTime) {
      return ((this.endTime - this.startTime) / 1000).toFixed(2);
    }
    return null;
  }

  /**
   * Logging utilities with plugin context
   */
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = `[${this.name}]`;

    switch (level) {
      case 'error':
        console.error(`🔴 ${prefix} ${message}`);
        break;
      case 'warn':
        console.warn(`🟡 ${prefix} ${message}`);
        break;
      case 'debug':
        if (this.options.environment === 'development') {
          console.debug(`🔵 ${prefix} ${message}`);
        }
        break;
      default:
        console.log(`ℹ️  ${prefix} ${message}`);
    }
  }

  /**
   * Lifecycle Hooks - Override in subclasses
   */

  /**
   * Called before plugin configuration
   */
  async beforeConfigure(eleventyConfig) {
    // Override in subclasses
  }

  /**
   * Main configuration method - MUST be implemented by subclasses
   */
  configure(eleventyConfig) {
    throw new Error(`Plugin ${this.name} must implement configure() method`);
  }

  /**
   * Called after plugin configuration
   */
  async afterConfigure(eleventyConfig) {
    // Override in subclasses
  }

  /**
   * Called when build starts
   */
  async onBuildStart() {
    // Override in subclasses
  }

  /**
   * Called when build ends
   */
  async onBuildEnd() {
    // Override in subclasses
  }

  /**
   * Called when files change in watch mode
   */
  async onFileChange(changedFiles) {
    // Override in subclasses
  }

  /**
   * Main execution method with lifecycle management
   */
  async execute(eleventyConfig) {
    if (!this.enabled) {
      this.log(`Skipped (disabled)`, 'debug');
      return;
    }

    this.startTiming();
    this.log(`Configuring...`, 'debug');

    try {
      await this.beforeConfigure(eleventyConfig);
      await this.configure(eleventyConfig);
      await this.afterConfigure(eleventyConfig);

      const executionTime = this.endTiming();
      this.log(`Configured in ${executionTime}s`, 'debug');
    } catch (error) {
      this.log(`Configuration failed: ${error.message}`, 'error');
      throw error;
    }
  }

  /**
   * Plugin validation
   */
  validate() {
    if (!this.name) {
      throw new Error('Plugin must have a name');
    }

    if (typeof this.configure !== 'function') {
      throw new Error(`Plugin ${this.name} must implement configure() method`);
    }

    return true;
  }

  /**
   * Get plugin metadata
   */
  getMetadata() {
    return {
      name: this.name,
      enabled: this.enabled,
      dependencies: this.dependencies,
      options: this.options,
      executionTime: this.getExecutionTime()
    };
  }
}

module.exports = EleventyBasePlugin;
