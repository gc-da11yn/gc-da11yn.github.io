/**
 * Eleventy Plugin Registry
 *
 * Centralized registry for managing Eleventy plugins with dependency resolution,
 * conditional loading, and lifecycle management.
 *
 * Phase 3: Plugin Architecture Implementation
 */

const EleventyBasePlugin = require('./base-plugin');

class EleventyPluginRegistry {
  constructor(options = {}) {
    this.plugins = new Map();
    this.executionOrder = [];
    this.globalOptions = options;
    this.environment = process.env.ELEVENTY_ENV || 'development';
    this.isDevelopment = ['development', 'dev', 'local'].includes(this.environment);
    this.hooks = {
      beforeBuild: [],
      afterBuild: [],
      onFileChange: [],
      beforeConfigure: [],
      afterConfigure: []
    };
  }

  /**
   * Register a plugin with the registry
   */
  register(PluginClass, options = {}) {
    // Validate plugin class
    if (!PluginClass.prototype instanceof EleventyBasePlugin) {
      throw new Error(`Plugin must extend EleventyBasePlugin: ${PluginClass.name}`);
    }

    // Merge global options with plugin-specific options
    const mergedOptions = Object.assign({}, this.globalOptions, options, {
      environment: this.environment
    });

    // Create plugin instance
    const plugin = new PluginClass(mergedOptions);

    // Validate plugin
    plugin.validate();

    // Register plugin
    this.plugins.set(plugin.name, plugin);

    plugin.log(`Registered with options: ${JSON.stringify(mergedOptions)}`, 'debug');

    return this;
  }

  /**
   * Register multiple plugins at once
   */
  registerMany(pluginConfigs) {
    pluginConfigs.forEach(({ plugin, options = {} }) => {
      this.register(plugin, options);
    });
    return this;
  }

  /**
   * Get a registered plugin by name
   */
  get(name) {
    return this.plugins.get(name);
  }

  /**
   * Check if a plugin is registered
   */
  has(name) {
    return this.plugins.has(name);
  }

  /**
   * Get all registered plugins
   */
  getAll() {
    return Array.from(this.plugins.values());
  }

  /**
   * Get enabled plugins only
   */
  getEnabled() {
    return this.getAll().filter(plugin => plugin.enabled);
  }

  /**
   * Resolve plugin dependencies and determine execution order
   */
  resolveDependencies() {
    const resolved = [];
    const resolving = new Set();
    const visited = new Set();

    const resolve = (pluginName) => {
      if (visited.has(pluginName)) {
        return;
      }

      if (resolving.has(pluginName)) {
        throw new Error(`Circular dependency detected: ${pluginName}`);
      }

      const plugin = this.plugins.get(pluginName);
      if (!plugin) {
        throw new Error(`Plugin dependency not found: ${pluginName}`);
      }

      if (!plugin.enabled) {
        visited.add(pluginName);
        return;
      }

      resolving.add(pluginName);

      // Resolve dependencies first
      plugin.dependencies.forEach(depName => {
        if (!this.plugins.has(depName)) {
          throw new Error(`Plugin ${pluginName} depends on unregistered plugin: ${depName}`);
        }
        resolve(depName);
      });

      resolving.delete(pluginName);
      visited.add(pluginName);
      resolved.push(plugin);
    };

    // Resolve all enabled plugins
    this.getEnabled().forEach(plugin => {
      resolve(plugin.name);
    });

    this.executionOrder = resolved;
    return this.executionOrder;
  }

  /**
   * Configure all plugins in dependency order
   */
  async configureAll(eleventyConfig) {
    const startTime = performance.now();

    console.log(`🔧 Plugin Registry: Configuring ${this.getEnabled().length} enabled plugins...`);

    // Resolve dependencies
    const orderedPlugins = this.resolveDependencies();

    // Execute beforeConfigure hooks
    await this.executeHooks('beforeConfigure', eleventyConfig);

    // Configure plugins in dependency order
    for (const plugin of orderedPlugins) {
      try {
        await plugin.execute(eleventyConfig);
      } catch (error) {
        console.error(`❌ Plugin ${plugin.name} configuration failed:`, error.message);
        throw error;
      }
    }

    // Execute afterConfigure hooks
    await this.executeHooks('afterConfigure', eleventyConfig);

    const endTime = performance.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`✅ Plugin Registry: All plugins configured in ${totalTime}s`);

    return this;
  }

  /**
   * Register and execute lifecycle hooks
   */
  addHook(hookName, callback) {
    if (!this.hooks[hookName]) {
      throw new Error(`Invalid hook name: ${hookName}`);
    }
    this.hooks[hookName].push(callback);
    return this;
  }

  /**
   * Execute all callbacks for a specific hook
   */
  async executeHooks(hookName, ...args) {
    if (!this.hooks[hookName]) {
      return;
    }

    for (const callback of this.hooks[hookName]) {
      try {
        await callback(...args);
      } catch (error) {
        console.error(`Hook ${hookName} failed:`, error.message);
      }
    }
  }

  /**
   * Setup Eleventy event listeners for plugin lifecycle
   */
  setupEventListeners(eleventyConfig) {
    // Build start hooks
    eleventyConfig.on('beforeBuild', async () => {
      await this.executeHooks('beforeBuild');

      // Call plugin-specific onBuildStart
      for (const plugin of this.getEnabled()) {
        try {
          await plugin.onBuildStart();
        } catch (error) {
          plugin.log(`onBuildStart failed: ${error.message}`, 'error');
        }
      }
    });

    // Build end hooks
    eleventyConfig.on('afterBuild', async () => {
      await this.executeHooks('afterBuild');

      // Call plugin-specific onBuildEnd
      for (const plugin of this.getEnabled()) {
        try {
          await plugin.onBuildEnd();
        } catch (error) {
          plugin.log(`onBuildEnd failed: ${error.message}`, 'error');
        }
      }
    });

    // File change hooks (watch mode)
    eleventyConfig.on('beforeWatch', async (changedFiles) => {
      await this.executeHooks('onFileChange', changedFiles);

      // Call plugin-specific onFileChange
      for (const plugin of this.getEnabled()) {
        try {
          await plugin.onFileChange(changedFiles);
        } catch (error) {
          plugin.log(`onFileChange failed: ${error.message}`, 'error');
        }
      }
    });

    return this;
  }

  /**
   * Get registry statistics and metadata
   */
  getStats() {
    const allPlugins = this.getAll();
    const enabledPlugins = this.getEnabled();

    return {
      total: allPlugins.length,
      enabled: enabledPlugins.length,
      disabled: allPlugins.length - enabledPlugins.length,
      executionOrder: this.executionOrder.map(p => p.name),
      plugins: allPlugins.map(p => p.getMetadata()),
      environment: this.environment
    };
  }

  /**
   * Clear all plugin caches
   */
  clearAllCaches() {
    this.getAll().forEach(plugin => plugin.clearCache());
    console.log('🧹 Cleared all plugin caches');
    return this;
  }

  /**
   * Enable/disable plugins conditionally
   */
  configure(configCallback) {
    if (typeof configCallback === 'function') {
      configCallback(this);
    }
    return this;
  }

  /**
   * Debug information
   */
  debug() {
    const stats = this.getStats();
    console.log('🔍 Plugin Registry Debug Info:');
    console.log(`  Environment: ${stats.environment}`);
    console.log(`  Total plugins: ${stats.total}`);
    console.log(`  Enabled plugins: ${stats.enabled}`);
    console.log(`  Execution order: ${stats.executionOrder.join(' → ')}`);

    if (this.isDevelopment) {
      stats.plugins.forEach(plugin => {
        const status = plugin.enabled ? '✅' : '❌';
        const time = plugin.executionTime ? ` (${plugin.executionTime}s)` : '';
        console.log(`    ${status} ${plugin.name}${time}`);
      });
    }

    return this;
  }
}

// Singleton instance
let registryInstance = null;

/**
 * Get the singleton plugin registry instance
 */
function getRegistry(options = {}) {
  if (!registryInstance) {
    registryInstance = new EleventyPluginRegistry(options);
  }
  return registryInstance;
}

/**
 * Reset the registry (mainly for testing)
 */
function resetRegistry() {
  registryInstance = null;
}

module.exports = {
  EleventyPluginRegistry,
  getRegistry,
  resetRegistry
};
