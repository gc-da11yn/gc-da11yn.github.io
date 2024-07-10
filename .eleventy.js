const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { stripHtml } = require('string-strip-html');
const htmlmin = require("html-minifier");
const slugify = require('@sindresorhus/slugify');

module.exports = function (eleventyConfig) {
  let markdownItOptions = {
    html: true, // you can include HTML tags
  };

  const md = markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      slugify: s => slugify(s, { lower: true, strict: true, locale: 'fr' }),
      permalink: false, // Disable permalinks
    });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("stripTagsSlugify", (str) => {
    if (!str) return;
    return slugify(stripHtml(str).result, { lower: true, strict: true, locale: 'fr' });
  });

  const { DateTime } = require("luxon");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
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

  eleventyConfig.addPassthroughCopy({ "./src/_docs": "docs" });
  eleventyConfig.addPassthroughCopy({ "./src/_images": "img" });
  eleventyConfig.addPassthroughCopy({ "./src/CNAME": "CNAME" });

  // Add headings to each page's data
  eleventyConfig.addCollection("allHeadings", function (collectionApi) {
    return collectionApi.getAll().map(item => {
      if (item.data.toc) {
        const tokens = md.parse(item.template.frontMatter.content, {});
        const validTags = ['h2', 'h3']; // Only h2 and h3 headings
        const headings = tokens.filter(token =>
          validTags.includes(token.tag) && token.type === 'heading_open'
        ).map(token => {
          const level = token.tag;
          const text = tokens[tokens.indexOf(token) + 1].content;
          const id = slugify(text, { lower: true, strict: true, locale: 'fr' });
          return { level, text, id };
        });
        item.data.headings = headings;
      }
      return item;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk", "css"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    setUseGitIgnore: false
  };
};
