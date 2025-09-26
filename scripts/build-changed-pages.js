#!/usr/bin/env node

/**
 * Build-optimized changed pages detector
 * Lightweight version of git-helper.js specifically for Eleventy build process
 * Focuses on performance and minimal overhead during development builds
 */

const { execSync } = require('child_process');
const path = require('path');

/**
 * Performance optimization configuration
 */
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes
let cachedResult = null;
let cacheTimestamp = null;

/**
 * Get changed pages optimized for build performance
 * Uses caching and optimized git operations to minimize build slowdown
 *
 * @param {Object} options Configuration options
 * @param {boolean} options.useCache Whether to use caching (default: true for development)
 * @param {boolean} options.skipFetch Skip network fetch in dev mode (default: true for watch)
 * @returns {Array} Array of changed file information
 */
function getChangedPagesForBuild(options = {}) {
    const {
        useCache = true,
        skipFetch = process.env.ELEVENTY_WATCH === 'true'
    } = options;

    // Use cache if available and within time limit
    if (useCache && cachedResult && cacheTimestamp) {
        const cacheAge = Date.now() - cacheTimestamp;
        if (cacheAge < CACHE_DURATION_MS) {
            console.log('📦 Using cached changed pages result');
            return cachedResult;
        }
    }

    try {
        let upstreamRef = 'upstream/main';

        // Fast path: Try to use existing upstream reference first
        try {
            execSync('git rev-parse --verify upstream/main', { stdio: 'pipe' });
        } catch (err) {
            // Upstream reference doesn't exist, need to set it up
            const setupSuccess = setupUpstreamReference(skipFetch);
            if (!setupSuccess) {
                console.warn('⚠️ Could not setup upstream reference, using origin/main');
                upstreamRef = 'origin/main';
            }
        }

        // Get changed files using the available reference
        const gitDiff = execSync(`git diff ${upstreamRef} --name-only`, {
            stdio: 'pipe',
            encoding: 'utf8'
        }).trim();

        const changedFiles = gitDiff ? gitDiff.split('\n') : [];
        const changedPages = processChangedFiles(changedFiles);

        // Cache the result
        if (useCache) {
            cachedResult = changedPages;
            cacheTimestamp = Date.now();
        }

        // Log summary for development
        if (process.env.ELEVENTY_WATCH === 'true' && changedPages.length > 0) {
            console.log(`📝 Found ${changedPages.length} changed pages for review`);
        }

        return changedPages;

    } catch (error) {
        console.error(`❌ Error getting changed pages: ${error.message}`);
        return [];
    }
}

/**
 * Setup upstream reference with optimized fetch strategy
 */
function setupUpstreamReference(skipFetch = false) {
    try {
        // First try to add upstream if it doesn't exist
        try {
            const upstreamUrl = 'https://github.com/gc-da11yn/gc-da11yn.github.io.git';
            execSync(`git remote add upstream ${upstreamUrl}`, { stdio: 'pipe' });
        } catch (err) {
            // Remote might already exist, that's fine
        }

        if (!skipFetch) {
            // Only fetch if not in development watch mode
            console.log('🔄 Fetching upstream for changed pages detection...');
            execSync('git fetch upstream main --quiet', { stdio: 'pipe' });
        }

        return true;
    } catch (error) {
        console.warn(`⚠️ Could not setup upstream: ${error.message}`);
        return false;
    }
}

/**
 * Process changed files and convert to page information
 */
function processChangedFiles(changedFiles) {
    const changedPages = [];
    const processedFiles = new Set();

    changedFiles.forEach(file => {
        // Only process markdown and njk files in pages directories
        if ((file.startsWith('src/pages/') || file.startsWith('src/main/')) &&
            (file.endsWith('.md') || file.endsWith('.njk')) &&
            !processedFiles.has(file)) {

            processedFiles.add(file);

            // Extract page information
            const pageInfo = extractPageInfo(file);
            if (pageInfo) {
                changedPages.push(pageInfo);
            }
        }
    });

    return changedPages;
}

/**
 * Extract page information from file path
 */
function extractPageInfo(filePath) {
    try {
        const relativePath = path.relative(process.cwd(), filePath);
        let locale = 'en';
        let url = '';

        if (filePath.startsWith('src/pages/')) {
            // Regular pages: src/pages/en/page-name.md -> /en/page-name/
            const parts = filePath.replace('src/pages/', '').split('/');
            if (parts.length >= 2) {
                locale = parts[0];
                const fileName = parts[parts.length - 1];
                const pageName = fileName.replace(/\.(md|njk)$/, '');

                url = pageName === 'index' ? `/${locale}/` : `/${locale}/${pageName}/`;
            }
        } else if (filePath.startsWith('src/main/')) {
            // Main pages: src/main/en/index.njk -> /en/
            const parts = filePath.replace('src/main/', '').split('/');
            if (parts.length >= 1) {
                locale = parts[0];
                url = `/${locale}/`;
            }
        }

        return {
            inputPath: relativePath,
            url: url,
            locale: locale,
            // Placeholder for title - will be filled by Eleventy collection
            title: null
        };
    } catch (error) {
        console.warn(`⚠️ Could not process file ${filePath}: ${error.message}`);
        return null;
    }
}

/**
 * Clear cache (useful for development)
 */
function clearCache() {
    cachedResult = null;
    cacheTimestamp = null;
}

module.exports = {
    getChangedPagesForBuild,
    clearCache,
    processChangedFiles,
    extractPageInfo
};

// CLI usage for testing
if (require.main === module) {
    const changedPages = getChangedPagesForBuild();

    if (changedPages.length > 0) {
        console.log('\n📋 Changed pages detected:');
        changedPages.forEach(page => {
            console.log(`  ${page.url} (${page.inputPath})`);
        });
    } else {
        console.log('\n✅ No changed pages detected');
    }
}
