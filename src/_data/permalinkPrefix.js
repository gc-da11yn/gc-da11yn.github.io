// Returns the prefix for permalinks (file structure)
// This should always be '/' for GitHub Pages regardless of fork status
// GitHub Pages automatically handles the repository path in the URL
module.exports = () => {
  return '/';
};
