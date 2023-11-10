const markdownIt = require("markdown-it");

const customMarkdownIt = markdownIt({
  html: true,
});

customMarkdownIt.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const hrefIndex = tokens[idx].attrIndex('href');
  if (hrefIndex !== -1) {
    let hrefValue = tokens[idx].attrs[hrefIndex][1];

    // Handle your link replacement logic here
    if (hrefValue.startsWith("./") || hrefValue.startsWith("../")) {
      hrefValue = hrefValue.replace(/^\.\//, "../").replace(/\.md$/, "/");
      tokens[idx].attrs[hrefIndex][1] = hrefValue;
    }
  }

  // Call the default renderer for links
  return self.renderToken(tokens, idx, options, env, self);
};

module.exports = customMarkdownIt;
