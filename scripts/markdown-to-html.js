const markdownIt = require("markdown-it");
const replaceLink = require("markdown-it-replace-link");

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
    return link;
  },
});

module.exports = customMarkdownIt;
