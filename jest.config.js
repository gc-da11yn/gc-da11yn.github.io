/**
 * Jest Configuration for Digital Accessibility Toolkit Testing
 *
 * This configuration supports multiple test types:
 * - Unit tests for individual functions and components
 * - Integration tests for build processes and workflows
 * - Performance tests for build times and link checking
 */

module.exports = {
  // Test environment
  testEnvironment: 'node',

  // Test file patterns
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
    '<rootDir>/tests/**/*.spec.js'
  ],

  // Collect coverage from these files
  collectCoverageFrom: [
    'scripts/**/*.js',
    'src/_data/**/*.js',
    '.eleventy.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/_site/**'
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },

  // Test directories for different test types
  projects: [
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/tests/unit/**/*.test.js']
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration/**/*.test.js']
    },
    {
      displayName: 'performance',
      testMatch: ['<rootDir>/tests/performance/**/*.test.js']
    }
  ],

  // Setup and teardown
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],

  // Timeouts for different test types
  testTimeout: 30000, // 30 seconds default

  // Mock configurations
  clearMocks: true,
  resetMocks: true,

  // Coverage output
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],

  // Verbose output for CI
  verbose: process.env.CI === 'true'
};
