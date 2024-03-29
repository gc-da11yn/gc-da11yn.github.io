const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { stripHtml } = require('string-strip-html');
const htmlmin = require("html-minifier");
const { dynamicImport } = require('tsimportlib');

module.exports = function (eleventyConfig) {

  let markdownItOptions = {
    html: true, // you can include HTML tags
  };

  const md = markdownIt(markdownItOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);

  dynamicImport('@sindresorhus/slugify', module)
    .then((module) => {
      const slugify = module.default;
      md.use(markdownItAnchor, { slugify });
    })
    .catch((err) => {
      console.error('Error importing slugify:', err);
    });

  const slugifyFilter = eleventyConfig.javascriptFunctions.slugify;

  eleventyConfig.addFilter("stripTagsSlugify", (str) => {

    if (!str) return;

    return slugifyFilter(stripHtml(str).result, {
    });
  });

  const { DateTime } = require("luxon");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

   // Minify HTML output
   eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

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
