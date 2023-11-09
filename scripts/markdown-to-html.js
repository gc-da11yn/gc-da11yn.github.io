const markdownIt = require("markdown-it");

const customMarkdownIt = markdownIt({
  html: true,
}).use(replaceLink, {
  replaceLink: (link) => {
    if (link.startsWith("./") || link.startsWith("../")) {
      // Replace './' with '../'
      let newLink = link.replace(/^\.\//, "../");

      // Replace '.md' with '/'
      newLink = newLink.replace(/\.md$/, "/");
      return newLink;
    }
  }

  // Call the default renderer for links
  return self.renderToken(tokens, idx, options, env, self);
};

module.exports = customMarkdownIt;
