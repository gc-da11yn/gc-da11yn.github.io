#!/usr/bin/env node

/**
 * Interactive Link Checker - Simplified Menu System
 * Uses base link-check.js for all actual checking functionality
 */

const { runLinkCheck, cleanup } = require('./link-check-base');
const readline = require('readline');

// Simple color functions
const colors = {
    cyan: (text) => `\x1b[36m${text}\x1b[0m`,
    gray: (text) => `\x1b[90m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    blue: (text) => `\x1b[34m${text}\x1b[0m`
};

let rl;

// Helper function to create readline interface when needed
function createReadlineInterface() {
    if (!rl) {
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    return rl;
}

// Helper function to prompt user for input
function question(prompt) {
    const readline = createReadlineInterface();
    return new Promise((resolve) => {
        readline.question(prompt, resolve);
    });
}

// Cleanup function
function cleanupAll() {
    if (rl && !rl.closed) {
        rl.close();
    }
    cleanup(); // Cleanup base functions (server, etc.)
}

// Display simplified menu
async function showMenu() {
    console.log(colors.cyan('\n🔗 Interactive Link Checker'));
    console.log(colors.gray('Choose what to check:\n'));
    console.log(colors.yellow('1.') + ' Localhost - Only changed files (fastest)');
    console.log(colors.yellow('2.') + ' Localhost - Full check (based on sitemap.xml)');
    console.log(colors.yellow('3.') + ' PR Preview - Full check (based on sitemap.xml)');
    console.log(colors.yellow('4.') + ' Live site - Full check (based on sitemap.xml)');
    console.log(colors.yellow('5.') + ' Custom URL - Full check (crawler)');
    console.log(colors.red('0.') + ' Exit\n');

    const choice = await question(colors.green('Enter your choice (0-5): '));
    return choice.trim();
}

// Get PR number for preview option
async function getPRNumber() {
    const prInput = await question(colors.green('Enter PR number: '));
    const prNumber = parseInt(prInput.trim());

    if (isNaN(prNumber) || prNumber <= 0) {
        console.log(colors.red('❌ Invalid PR number. Please enter a positive number.'));
        return await getPRNumber();
    }

    return prNumber;
}

// Get custom URL
async function getCustomUrl() {
    const urlInput = await question(colors.green('Enter custom URL (e.g., https://example.com): '));
    const url = urlInput.trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        console.log(colors.red('❌ Invalid URL. Please enter a complete URL starting with http:// or https://'));
        return await getCustomUrl();
    }

    return url;
}

// Main function
async function main() {
    try {
        console.log(colors.cyan('🚀 Starting Interactive Link Checker...'));

        const choice = await showMenu();

        if (choice === '0') {
            console.log(colors.yellow('👋 Goodbye!'));
            cleanupAll();
            process.exit(0);
        }

        let mode;
        // Always exclude external links - focus on internal site links only
        let options = { excludeExternalLinks: true };

        switch (choice) {
            case '1':
                mode = { type: 'localhost-changed' };
                break;

            case '2':
                mode = { type: 'localhost-full' };
                break;

            case '3':
                const prNumber = await getPRNumber();
                mode = { type: 'preview', prNumber };
                break;

            case '4':
                mode = { type: 'live' };
                break;

            case '5':
                const customUrl = await getCustomUrl();
                mode = { type: 'custom', url: customUrl };
                break;

            default:
                console.log(colors.red('❌ Invalid choice. Please try again.'));
                cleanupAll();
                return main();
        }

        console.log(colors.green('\n✅ Starting link check...'));

        await runLinkCheck(mode, options);

        console.log(colors.green('\n🎉 Link check complete!'));

    } catch (error) {
        console.error(colors.red(`❌ Error: ${error.message}`));
        process.exit(1);
    } finally {
        cleanupAll();
    }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
    console.log(colors.yellow('\n👋 Link check cancelled by user'));
    cleanupAll();
    process.exit(0);
});

// Run the script
if (require.main === module) {
    main();
}

module.exports = { main, cleanupAll };
