/**
 * Jest Test Setup
 *
 * Global setup for all tests including environment variables
 * and common utilities.
 */

// Set environment variables for testing
process.env.ELEVENTY_ENV = 'test';
process.env.NODE_ENV = 'test';

// Increase timeout for integration tests
jest.setTimeout(300000); // 5 minutes for build tests

// Global test utilities
global.testUtils = {

  // Utility to wait for file system operations
  waitForFile: async (filePath, timeout = 5000) => {
    const fs = require('fs').promises;
    const start = Date.now();

    while (Date.now() - start < timeout) {
      try {
        await fs.access(filePath);
        return true;
      } catch (error) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    throw new Error(`File ${filePath} not found within ${timeout}ms`);
  },

  // Utility to clean build directory
  cleanBuild: async () => {
    const { execSync } = require('child_process');
    try {
      execSync('rm -rf _site', { stdio: 'pipe' });
    } catch (error) {
      // Ignore errors if directory doesn't exist
    }
  },

  // Utility to get build output info
  getBuildInfo: () => {
    const { execSync } = require('child_process');
    try {
      const output = execSync('npm run build', {
        stdio: 'pipe',
        encoding: 'utf8'
      });

      const fileCountMatch = output.match(/Wrote (\d+) files/);
      const timeMatch = output.match(/in ([\d.]+) seconds/);

      return {
        fileCount: fileCountMatch ? parseInt(fileCountMatch[1]) : 0,
        buildTime: timeMatch ? parseFloat(timeMatch[1]) * 1000 : 0,
        output: output
      };
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }
};

// Console logging for test progress
const originalConsoleLog = console.log;
console.log = (...args) => {
  // Add timestamp to test logs
  const timestamp = new Date().toISOString().substr(11, 8);
  originalConsoleLog(`[${timestamp}]`, ...args);
};

// Handle unhandled promise rejections in tests
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

console.log('🧪 Test environment initialized');
