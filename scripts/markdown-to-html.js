const markdownIt = require("markdown-it");
const replaceLink = require("markdown-it-replace-link");

const customMarkdownIt = markdownIt({
  html: true,
}).use(replaceLink, {
  replaceLink: (link) => {
    if (link.startsWith("./") || link.startsWith("../")) {
      // Replace './' with '../'
      const newLink = link.replace(/^\.\//, "../");
      return newLink;
    }
    return link;
  },
});

module.exports = customMarkdownIt;
