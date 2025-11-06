module.exports = {
  eleventyComputed: {
    toggle: data => {
      // Auto-generate toggle path based on current file path
      const inputPath = data.page.inputPath;

      if (!inputPath) return '';

      // Extract filename without extension
      const filename = inputPath.split('/').pop().replace('.md', '');

      // Determine other language path based on current path
      if (inputPath.includes('/resources/en/')) {
        return `src/resources/fr/${filename}.md`;
      } else if (inputPath.includes('/resources/fr/')) {
        return `src/resources/en/${filename}.md`;
      }

      return '';
    }
  }
};
