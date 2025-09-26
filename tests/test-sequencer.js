/**
 * Custom Test Sequencer
 *
 * Ensures tests run in optimal order:
 * 1. Unit tests (fast)
 * 2. Integration tests (medium)
 * 3. Performance tests (slow)
 */

const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  sort(tests) {
    // Define test priorities
    const getTestPriority = (testPath) => {
      if (testPath.includes('unit/')) return 1;
      if (testPath.includes('integration/')) return 2;
      if (testPath.includes('performance/')) return 3;
      return 4; // Other tests last
    };

    // Sort tests by priority, then alphabetically
    return tests.sort((a, b) => {
      const priorityA = getTestPriority(a.path);
      const priorityB = getTestPriority(b.path);

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      return a.path.localeCompare(b.path);
    });
  }
}

module.exports = CustomSequencer;
