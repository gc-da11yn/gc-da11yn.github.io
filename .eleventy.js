const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { stripHtml } = require('string-strip-html');
const path = require('path');

module.exports = function(eleventyConfig) {

  let markdownItOptions = {
    html: true, // you can include HTML tags
  };

  // Replace "./" with "../" and ".md" with "/"
  const customMarkdownIt = markdownIt(markdownItOptions)
    .use(markdownItAnchor)
    .use(markdownItAttrs)
    .use((md) => {
      md.core.ruler.push('replace-links', (state) => {
        state.tokens.forEach((token) => {
          if (token.type === 'inline' && token.children) {
            token.children.forEach((child) => {
              if (child.type === 'link_open' && child.attrs) {
                child.attrs.forEach((attr) => {
                  if (attr[0] === 'href' && (attr[1].startsWith('./') || attr[1].startsWith('../'))) {
                    // Replace './' with '../' and '.md' with '/'
                    attr[1] = path.join('..', attr[1].replace(/^\.\//, '').replace(/\.md$/, '/'));
                  }
                });
              } else if (child.type === 'link_open' && child.content) {
                // Handle inline links like [text](./path/to/file.md)
                const match = child.content.match(/\]\((\.{1,2}\/.*?\.md)\)/);
                if (match) {
                  const replacedLink = match[1].replace(/^\.\//, '').replace(/\.md$/, '/');
                  child.content = child.content.replace(match[1], replacedLink);
                }
              }
            });
          }
        });
      });
    });

  eleventyConfig.setLibrary(
    "md",
    customMarkdownIt
  );

  const slugifyFilter = eleventyConfig.javascriptFunctions.slugify;

  eleventyConfig.addFilter("stripTagsSlugify", (str) => {
    if (!str) return;
    return slugifyFilter(stripHtml(str).result, {});
  });

  const { DateTime } = require("luxon");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addFilter("localeMatch", function (collection) {
    const { locale } = this.ctx; // avoid retrieving it for each item
    return collection.filter((item) => item.data.locale === locale);
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("en")
      .toFormat("yyyy'-'MM'-'dd");
  });

  eleventyConfig.addPassthroughCopy({ "./src/_docs" : "docs" });
  eleventyConfig.addPassthroughCopy({ "./src/_images" : "img" });
  eleventyConfig.addPassthroughCopy({ "./src/CNAME" : "CNAME" });

  return {
    dir: {
      input : "src",
      output : "_site",
      includes : "_includes",
      data : "_data"
    },
    templateFormats : ["html", "md", "njk", "css"],
    htmlTemplateEngine : "njk",
    markdownTemplate : "njk",
    setUseGitIgnore : false
  };
};
