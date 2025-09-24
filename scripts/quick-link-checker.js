#!/usr/bin/env node

/**
 * Quick Link Checker for Changed Files
 * Focused on checking only git-changed files for GitHub Actions and fast development workflows
 * Uses base link-check.js for actual checking functionality
 */

const { runLinkCheck, cleanup } = require('./link-check-base');

// Simple color functions
const colors = {
    cyan: (text) => `\x1b[36m${text}\x1b[0m`,
    gray: (text) => `\x1b[90m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    blue: (text) => `\x1b[34m${text}\x1b[0m`
};

async function quickCheck() {
    try {
        console.log(colors.cyan('⚡ Quick Link Checker - Changed Files Only'));
        console.log(colors.gray('Perfect for development workflows and GitHub Actions\n'));
        
        // Always check localhost with changed files only
        const mode = { type: 'localhost-changed' };
        const options = { excludeExternalLinks: true };
        
        await runLinkCheck(mode, options);
        
        console.log(colors.green('\n✅ Quick link check complete!'));
        
    } catch (error) {
        console.error(colors.red(`❌ Error: ${error.message}`));
        process.exit(1);
    } finally {
        cleanup();
    }
}

// Handle process termination
process.on('SIGINT', () => {
    console.log(colors.yellow('\n👋 Quick check cancelled by user'));
    cleanup();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log(colors.yellow('\n🛑 Process terminated'));
    cleanup();
    process.exit(0);
});

if (require.main === module) {
    quickCheck();
}

module.exports = { quickCheck };