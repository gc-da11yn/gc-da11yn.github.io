// Returns path prefix for GitHub Pages deployments
// This affects internal links (CSS, JS, href) but NOT file structure
module.exports = () => {
  const pathPrefix = process.env.PATH_PREFIX;

  if (pathPrefix) {
    // Only add leading slash if pathPrefix is set, and remove any leading/trailing slashes from the value
    return '/' + pathPrefix.replace(/^\/+|\/+$/g, '');
  }

  // Default to empty string for main repo (no prefix needed)
  return '';
};
