#!/usr/bin/env node

/**
 * Git helper utilities for tracking changed files
 * Used by link checkers to only check pages that have been modified
 */

const { execSync } = require('child_process');
const path = require('path');

/**
 * Get list of changed pages based on git diff against upstream/main
 * Returns array of relative URLs that correspond to changed pages
 */
function getChangedPagesUrls(baseUrl = '', locale = 'en') {
    try {
        console.log('🔍 Detecting changed pages using git diff...');

        // Determine the upstream URL (works for forks and original repo)
        let upstreamUrl;
        try {
            upstreamUrl = execSync('git config --get remote.upstream.url').toString().trim();
        } catch (err) {
            try {
                upstreamUrl = execSync('git config --get remote.origin.url').toString().trim();
            } catch (err2) {
                console.error('❌ Could not determine upstream repository');
                return null;
            }
        }

        // Fetch the upstream main branch for comparison
        try {
            execSync(`git fetch ${upstreamUrl} main:upstream-main --force`, { stdio: 'pipe' });
        } catch (err) {
            console.error('❌ Error fetching upstream main branch');
            return null;
        }

        // Get the diff between current branch and upstream main
        const gitDiff = execSync('git diff upstream-main --name-only').toString().trim();
        const changedFiles = gitDiff ? gitDiff.split('\n') : [];

        // Clean up: delete the upstream-main branch
        try {
            execSync('git branch -D upstream-main', { stdio: 'pipe' });
        } catch (err) {
            // Branch cleanup failed, but not critical
        }

        // Filter and convert to URLs
        const changedPageUrls = [];
        const processedFiles = new Set();

        changedFiles.forEach(file => {
            // Only process markdown and njk files in pages directories
            if ((file.startsWith('src/pages/') || file.startsWith('src/main/')) &&
                (file.endsWith('.md') || file.endsWith('.njk')) &&
                !processedFiles.has(file)) {

                processedFiles.add(file);

                // Convert file path to URL
                const url = convertFilePathToUrl(file, baseUrl);
                if (url) {
                    changedPageUrls.push(url);
                }
            }
        });

        console.log(`📝 Found ${changedPageUrls.length} changed pages:`);
        changedPageUrls.forEach(url => {
            const displayUrl = url.replace(baseUrl, '');
            console.log(`   • ${displayUrl}`);
        });

        return changedPageUrls.length > 0 ? changedPageUrls : null;

    } catch (error) {
        console.error(`❌ Error detecting changed pages: ${error.message}`);
        return null;
    }
}

/**
 * Convert a source file path to its corresponding URL
 */
function convertFilePathToUrl(filePath, baseUrl) {
    // Handle different file types and structures
    let urlPath = '';

    if (filePath.startsWith('src/pages/')) {
        // Regular pages: src/pages/en/page-name.md -> /en/page-name/
        const relativePath = filePath.replace('src/pages/', '');
        const parts = relativePath.split('/');

        if (parts.length >= 2) {
            const locale = parts[0]; // en or fr
            const fileName = parts[parts.length - 1];
            const pageName = fileName.replace(/\.(md|njk)$/, '');

            // Skip index files as they map to directory root
            if (pageName === 'index') {
                urlPath = `/${locale}/`;
            } else {
                urlPath = `/${locale}/${pageName}/`;
            }
        }
    } else if (filePath.startsWith('src/main/')) {
        // Main pages: src/main/en/index.njk -> /en/
        const relativePath = filePath.replace('src/main/', '');
        const parts = relativePath.split('/');

        if (parts.length >= 1) {
            const locale = parts[0]; // en or fr
            urlPath = `/${locale}/`;
        }
    }

    return urlPath ? `${baseUrl}${urlPath}` : null;
}

/**
 * Get list of all changed files (for debugging/logging)
 */
function getChangedFiles() {
    try {
        const gitDiff = execSync('git diff upstream-main --name-only').toString().trim();
        return gitDiff ? gitDiff.split('\n') : [];
    } catch (error) {
        console.error(`Error getting changed files: ${error.message}`);
        return [];
    }
}

module.exports = {
    getChangedPagesUrls,
    convertFilePathToUrl,
    getChangedFiles
};

// CLI usage
if (require.main === module) {
    const baseUrl = process.argv[2] || 'http://localhost:8080';
    const changedUrls = getChangedPagesUrls(baseUrl);

    if (changedUrls) {
        console.log('\n🎯 URLs to check:');
        changedUrls.forEach(url => console.log(`  ${url}`));
    } else {
        console.log('ℹ️ No changed pages detected or error occurred');
    }
}
