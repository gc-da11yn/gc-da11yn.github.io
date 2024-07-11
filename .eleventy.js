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

  eleventyConfig.addShortcode('extractHeadings', function (content, tocType) {
    const tokens = md.parse(content, {});
    const levels = tocType === 'tocSimple' ? 1 : 2; // tocSimple only includes level 2 headings
    const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);
    const headings = tokens.filter(token =>
      validTags.includes(token.tag) && token.type === 'heading_open'
    ).map(token => {
      const level = token.tag;
      const rawText = tokens[tokens.indexOf(token) + 1].content;
      const text = stripHtml(rawText).result; // Strip HTML tags from the heading text
      const id = slugify(text, { lower: true, strict: true, locale: 'fr' });
      return { level, text, id };
    });

    // Create TOC HTML
    let tocHTML = '<aside><h2>{{ onThisPage[locale].heading }}</h2><ul>';
    const levelsStack = [];

    headings.forEach(heading => {
      const levelIndex = parseInt(heading.level.substring(1)) - 1;

      while (levelsStack.length && levelsStack[levelsStack.length - 1] > levelIndex) {
        tocHTML += '</ul></li>';
        levelsStack.pop();
      }

      if (levelsStack.length && levelsStack[levelsStack.length - 1] === levelIndex) {
        tocHTML += '</li>';
      }

      if (!levelsStack.length || levelsStack[levelsStack.length - 1] < levelIndex) {
        tocHTML += '<ul>';
        levelsStack.push(levelIndex);
      }

      tocHTML += `<li><a href="#${heading.id}">${heading.text}</a>`;
    });

    while (levelsStack.length) {
      tocHTML += '</ul></li>';
      levelsStack.pop();
    }

    tocHTML += '</ul></aside>';

    return tocHTML;
  });

  const slugifyFilter = eleventyConfig.javascriptFunctions.slugify;

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

  eleventyConfig.addCollection("allHeadings", function (collectionApi) {
    return collectionApi.getAll().map(item => {
      if (item.data.toc || item.data.tocSimple) {
        const tokens = md.parse(item.template.frontMatter.content, {});
        const levels = item.data.tocSimple ? 1 : 2; // tocSimple only includes level 2 headings
        const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);
        const headings = tokens.filter(token =>
          validTags.includes(token.tag) && token.type === 'heading_open'
        ).map(token => {
          const level = token.tag;
          const rawText = tokens[tokens.indexOf(token) + 1].content;
          const text = stripHtml(rawText).result; // Strip HTML tags from the heading text
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
