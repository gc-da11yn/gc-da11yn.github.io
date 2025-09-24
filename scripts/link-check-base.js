#!/usr/bin/env node

/**
 * Universal Link Checker Base
 * Handles all environments (localhost, preview, live, custom) with server auto-management
 * Can be used by both interactive and automated scripts
 */

const blc = require('broken-link-checker');
const fs = require('fs');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { spawn } = require('child_process');
const { getChangedPagesUrls } = require('./git-helper');

// Colors for output
const colors = {
    cyan: (text) => `\x1b[36m${text}\x1b[0m`,
    gray: (text) => `\x1b[90m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    blue: (text) => `\x1b[34m${text}\x1b[0m`
};

let brokenLinks = [];
let devServerProcess = null;

// Check if server is running on given port
async function checkServerRunning(port) {
    try {
        const response = await axios.get(`http://localhost:${port}`, { timeout: 2000 });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

// Start the development server
function startDevServer() {
    return new Promise((resolve, reject) => {
        console.log(colors.cyan('🚀 Starting development server...'));

        devServerProcess = spawn('npm', ['run', 'start-prod'], {
            stdio: ['ignore', 'pipe', 'pipe'],
            shell: false
        });

        devServerProcess.stdout.on('data', (data) => {
            const output = data.toString();
            console.log(colors.gray('📝 Server:', output.trim()));
        });

        devServerProcess.stderr.on('data', (data) => {
            console.log(colors.gray('⚠️ Server warning:', data.toString().trim()));
        });

        devServerProcess.on('error', (error) => {
            reject(new Error(`Failed to start server: ${error.message}`));
        });

        // Wait for the server to be ready
        const checkInterval = setInterval(async () => {
            try {
                if (fs.existsSync('.eleventy-port')) {
                    const filePort = fs.readFileSync('.eleventy-port', 'utf8').trim();
                    if (await checkServerRunning(filePort)) {
                        clearInterval(checkInterval);
                        console.log(colors.green(`✅ Server ready on port ${filePort}`));
                        resolve(filePort);
                    }
                }
            } catch (error) {
                // Keep waiting
            }
        }, 1000);

        // Timeout after 45 seconds
        setTimeout(() => {
            clearInterval(checkInterval);
            reject(new Error('Server startup timeout after 45 seconds'));
        }, 45000);
    });
}

// Cleanup function to kill the dev server
function cleanup() {
    if (devServerProcess && !devServerProcess.killed) {
        console.log(colors.yellow('🧹 Stopping development server...'));
        devServerProcess.kill('SIGTERM');

        setTimeout(() => {
            if (devServerProcess && !devServerProcess.killed) {
                devServerProcess.kill('SIGKILL');
            }
        }, 5000);
    }
}

// Get sitemap URLs
async function getSitemapUrls(baseUrl) {
    try {
        console.log(colors.gray('🗺️ Fetching sitemap...'));
        const sitemapUrl = `${baseUrl}/sitemap.xml`;
        const response = await axios.get(sitemapUrl, { timeout: 10000 });

        // Extract URLs from sitemap XML
        const urlPattern = /<loc>(.*?)<\/loc>/g;
        const urls = [];
        let match;

        while ((match = urlPattern.exec(response.data)) !== null) {
            let url = match[1];

            // Replace domain with baseUrl for consistency
            if (baseUrl.includes('localhost')) {
                url = url.replace(/https?:\/\/[^\/]+/, baseUrl);
            }

            urls.push(url);
        }

        console.log(colors.green(`✅ Found ${urls.length} URLs in sitemap`));
        return urls;
    } catch (error) {
        console.log(colors.yellow(`⚠️ Sitemap not available: ${error.message}`));
        return null;
    }
}

// Progress indicator
function createProgressIndicator() {
    let pageCount = 0;
    let linkCount = 0;

    return {
        updatePage: () => {
            pageCount++;
            process.stdout.write(`\r${colors.cyan('📄')} Pages: ${pageCount} | ${colors.blue('🔗')} Links: ${linkCount}`);
        },
        updateLink: () => {
            linkCount++;
            process.stdout.write(`\r${colors.cyan('📄')} Pages: ${pageCount} | ${colors.blue('🔗')} Links: ${linkCount}`);
        },
        finish: () => {
            console.log(`\r${colors.green('✅ Scanning complete:')} ${pageCount} pages, ${linkCount} links checked`);
        }
    };
}

// Check specific URLs (sitemap-based)
// Check specific URLs from a list (e.g., from sitemap or changed files)
async function checkSpecificUrls(urls, options) {
    if (!urls || urls.length === 0) {
        console.log(colors.yellow('No URLs to check'));
        return;
    }

    console.log(colors.gray(`🔍 Checking links within ${urls.length} specific pages...`));

    const axios = require('axios');
    const { JSDOM } = require('jsdom');

    // Simple progress tracking for specific URLs
    let completedPages = 0;
    let totalLinks = 0;

    const updateProgress = () => {
        process.stdout.write(`\r📄 Pages: ${completedPages}/${urls.length} | 🔗 Links: ${totalLinks}`);
    };

    for (const url of urls) {
        try {
            // Fetch the page HTML
            const response = await axios.get(url);
            const dom = new JSDOM(response.data);
            const document = dom.window.document;

            // Extract all links from the page
            const links = Array.from(document.querySelectorAll('a[href], img[src], link[href], script[src]'))
                .map(el => ({
                    url: el.getAttribute('href') || el.getAttribute('src'), // Use getAttribute to get the actual href/src
                    text: el.textContent || el.alt || 'No text',
                    tag: el.tagName.toLowerCase()
                }))
                .filter(link => link.url && !link.url.startsWith('mailto:') && !link.url.startsWith('tel:'));

            // Count anchor links quietly for progress tracking
            const anchorLinks = links.filter(link => link.url.includes('#'));

            // Check each link on this page
            for (const link of links) {
                totalLinks++;
                updateProgress();

                try {
                    // Resolve the link URL against the base URL
                    const resolvedUrl = new URL(link.url, url);

                    // Skip external links if option is set
                    if (options.excludeExternalLinks !== false) {
                        const baseUrl = new URL(url);
                        if (resolvedUrl.hostname !== baseUrl.hostname) {
                            continue;
                        }
                    }

                    // Skip certain development-only files
                    if (resolvedUrl.pathname.includes('/.11ty/') ||
                        resolvedUrl.pathname.includes('/reload-client.js')) {
                        continue;
                    }

                    // Check the link
                    if (resolvedUrl.hash) {
                        // Handle anchor links
                        const targetId = resolvedUrl.hash.substring(1); // Remove the #

                        if (resolvedUrl.href.replace(resolvedUrl.hash, '') === url ||
                            resolvedUrl.pathname === new URL(url).pathname) {
                            // Same-page anchor - check in current document
                            const targetElement = document.getElementById(targetId);
                            if (!targetElement) {
                                throw new Error(`Anchor not found: ${resolvedUrl.hash}`);
                            }
                        } else {
                            // Different page anchor - fetch that page and check
                            const anchorResponse = await axios.get(resolvedUrl.toString(), {
                                timeout: 5000,
                                validateStatus: (status) => status < 400
                            });

                            // Parse the target page to check if anchor exists
                            const anchorDom = new JSDOM(anchorResponse.data);
                            const anchorDoc = anchorDom.window.document;

                            // Check if element with that ID exists
                            const targetElement = anchorDoc.getElementById(targetId);
                            if (!targetElement) {
                                throw new Error(`Anchor not found: ${resolvedUrl.hash}`);
                            }
                        }
                    } else {
                        // Regular link check
                        const linkResponse = await axios.head(resolvedUrl.toString(), {
                            timeout: 5000,
                            validateStatus: (status) => status < 400
                        });
                    }

                } catch (linkError) {
                    // Found a broken link - use resolved URL for reporting
                    const resolvedUrl = new URL(link.url, url);

                    let pageData = brokenLinks.find(p => p.page === url);
                    if (!pageData) {
                        pageData = { page: url, sourceFile: url, links: [] };
                        brokenLinks.push(pageData);
                    }

                    pageData.links.push({
                        link: resolvedUrl.toString(),
                        linkText: link.text,
                        statusCode: linkError.response ? linkError.response.status : null,
                        statusText: linkError.message
                    });
                }
            }

            completedPages++;
            updateProgress();

        } catch (pageError) {
            console.error(colors.red(`\nError checking page ${url}: ${pageError.message}`));
            completedPages++;
            updateProgress();
        }
    }

    console.log(''); // New line after progress
}

// Crawl-based checking (for custom URLs)
async function runCrawlBasedCheck(startUrl, options = {}) {
    return new Promise((resolve, reject) => {
        const progress = createProgressIndicator();

        const siteChecker = new blc.SiteChecker(options, {
            link: (result) => {
                progress.updateLink();

                if (result.broken) {
                    const existingPage = brokenLinks.find(p => p.page === result.base.resolved);
                    if (existingPage) {
                        existingPage.links.push({
                            link: result.url.resolved,
                            linkText: result.html.text || 'No text',
                            statusCode: result.http.response ? result.http.response.statusCode : null,
                            statusText: result.brokenReason
                        });
                    } else {
                        brokenLinks.push({
                            page: result.base.resolved,
                            sourceFile: "Crawler detected",
                            links: [{
                                link: result.url.resolved,
                                linkText: result.html.text || 'No text',
                                statusCode: result.http.response ? result.http.response.statusCode : null,
                                statusText: result.brokenReason
                            }]
                        });
                    }
                }
            },
            page: (error, pageUrl) => {
                progress.updatePage();
                if (error) {
                    console.error(colors.red(`Error checking page ${pageUrl}: ${error}`));
                }
            },
            end: () => {
                progress.finish();
                resolve();
            }
        });

        siteChecker.enqueue(startUrl, {});
    });
}

// Generate results file
function generateResults() {
    if (brokenLinks.length === 0) {
        console.log(colors.green('\n🎉 No broken links found!'));

        // Still create the file but with empty results
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                totalPagesWithBrokenLinks: 0,
                totalBrokenLinks: 0
            },
            brokenLinks: []
        };

        fs.writeFileSync('broken-links.json', JSON.stringify(report, null, 2));
        console.log(colors.blue('📄 Report saved to: broken-links.json'));
        return;
    }

    console.log(colors.red(`\n💥 Found ${brokenLinks.length} page(s) with broken links:`));

    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            totalPagesWithBrokenLinks: brokenLinks.length,
            totalBrokenLinks: brokenLinks.reduce((sum, page) => sum + page.links.length, 0)
        },
        brokenLinks: brokenLinks
    };

    fs.writeFileSync('broken-links.json', JSON.stringify(report, null, 2));

    // Console output
    brokenLinks.forEach((pageData, index) => {
        console.log(colors.yellow(`\n${index + 1}. ${pageData.page}`));
        console.log(colors.gray(`   Source: ${pageData.sourceFile}`));

        pageData.links.forEach((link, linkIndex) => {
            const status = link.statusCode ? `[${link.statusCode}]` : '[ERROR]';
            console.log(colors.red(`   ${linkIndex + 1}. ${status} ${link.link}`));
            console.log(colors.gray(`      Text: "${link.linkText}"`));
            if (link.statusText) {
                console.log(colors.gray(`      Issue: ${link.statusText}`));
            }
        });
    });

    console.log(colors.blue(`\n📄 Full report saved to: broken-links.json`));
}

// Main checking function
async function runLinkCheck(mode, options = {}) {
    let baseUrl;
    let checkUrls = null;

    // Reset broken links array
    brokenLinks = [];

    try {
        switch (mode.type) {
            case 'localhost-changed':
                // Handle localhost with changed files only
                let port = await ensureLocalhostServer();
                baseUrl = `http://localhost:${port}`;
                console.log(colors.cyan(`💻 Checking localhost:${port} (changed files only)...`));

                checkUrls = getChangedPagesUrls(baseUrl);
                if (!checkUrls || checkUrls.length === 0) {
                    console.log(colors.yellow('ℹ️ No changed pages detected. Nothing to check.'));
                    return;
                }

                await checkSpecificUrls(checkUrls, options);
                break;

            case 'localhost-full':
                // Handle localhost with full sitemap
                let fullPort = await ensureLocalhostServer();
                baseUrl = `http://localhost:${fullPort}`;
                console.log(colors.cyan(`💻 Checking localhost:${fullPort} (full sitemap)...`));

                checkUrls = await getSitemapUrls(baseUrl);
                if (checkUrls) {
                    console.log(colors.gray('🗺️ Using sitemap-based checking'));
                    await checkSpecificUrls(checkUrls, options);
                } else {
                    console.log(colors.yellow('⚠️ Sitemap unavailable, using crawler'));
                    await runCrawlBasedCheck(baseUrl, {
                        excludeExternalLinks: options.excludeExternalLinks !== false,
                        maxSocketsPerHost: 2,
                        rateLimit: 100
                    });
                }
                break;

            case 'preview':
                // Handle PR preview
                const prNumber = mode.prNumber;
                baseUrl = `https://deploy-preview-${prNumber}--a11ycanada.netlify.app`;
                console.log(colors.cyan(`🚀 Checking PR #${prNumber} preview...`));

                checkUrls = await getSitemapUrls(baseUrl);
                if (checkUrls) {
                    console.log(colors.gray('🗺️ Using sitemap-based checking'));
                    await checkSpecificUrls(checkUrls, options);
                } else {
                    console.log(colors.yellow('⚠️ Sitemap unavailable, using crawler'));
                    await runCrawlBasedCheck(baseUrl, {
                        excludeExternalLinks: options.excludeExternalLinks !== false,
                        maxSocketsPerHost: 2,
                        rateLimit: 100
                    });
                }
                break;

            case 'live':
                // Handle live site
                baseUrl = 'https://a11y.canada.ca';
                console.log(colors.cyan('🌐 Checking live site...'));

                checkUrls = await getSitemapUrls(baseUrl);
                if (checkUrls) {
                    console.log(colors.gray('🗺️ Using sitemap-based checking'));
                    await checkSpecificUrls(checkUrls, options);
                } else {
                    console.log(colors.yellow('⚠️ Sitemap unavailable, using crawler'));
                    await runCrawlBasedCheck(baseUrl, {
                        excludeExternalLinks: options.excludeExternalLinks !== false,
                        maxSocketsPerHost: 2,
                        rateLimit: 100
                    });
                }
                break;

            case 'custom':
                // Handle custom URL with crawler
                baseUrl = mode.url;
                console.log(colors.cyan(`🔧 Checking custom URL: ${baseUrl}...`));
                console.log(colors.gray('🕷️ Using crawler-based checking'));

                await runCrawlBasedCheck(baseUrl, {
                    excludeExternalLinks: options.excludeExternalLinks !== false,
                    maxSocketsPerHost: 2,
                    rateLimit: 100
                });
                break;

            default:
                throw new Error(`Unknown mode: ${mode.type}`);
        }

        generateResults();

    } catch (error) {
        console.error(colors.red(`❌ Error: ${error.message}`));
        throw error;
    }
}

// Ensure localhost server is running
async function ensureLocalhostServer() {
    // Try to get expected port from port file
    let expectedPort = null;
    if (fs.existsSync('.eleventy-port')) {
        try {
            expectedPort = fs.readFileSync('.eleventy-port', 'utf8').trim();
        } catch (error) {
            // Ignore
        }
    }

    // Check if server is already running
    if (expectedPort && await checkServerRunning(expectedPort)) {
        console.log(colors.green(`💻 Using existing server on localhost:${expectedPort}`));
        return expectedPort;
    } else {
        console.log(colors.yellow('🔍 Server not detected, starting development server...'));
        return await startDevServer();
    }
}

// Process handlers for cleanup
process.on('SIGINT', () => {
    console.log(colors.yellow('\n👋 Link check cancelled by user'));
    cleanup();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log(colors.yellow('\n🛑 Process terminated'));
    cleanup();
    process.exit(0);
});

process.on('beforeExit', () => {
    cleanup();
});

module.exports = {
    runLinkCheck,
    cleanup,
    ensureLocalhostServer,
    getSitemapUrls,
    checkSpecificUrls,
    runCrawlBasedCheck,
    generateResults
};
