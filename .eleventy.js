const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { stripHtml } = require('string-strip-html');
const customMarkdownIt = require("../gc-da11yn.github.io/scripts/markdown-to-html");

module.exports = function(eleventyConfig) {

  const slugifyFilter = eleventyConfig.javascriptFunctions.slugify;

  eleventyConfig.addFilter("stripTagsSlugify", (str) => {

    if (!str) return;

    return slugifyFilter(stripHtml(str).result, {
    });
  });

  const { DateTime } = require("luxon");

  let markdownItOptions = {
    html: true // you can include HTML tags
	}

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addFilter("localeMatch", function (collection) {
    const { locale } = this.ctx; // avoid retrieving it for each item
    return collection.filter((item) => item.data.locale === locale);
  });

	eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor).use(markdownItAttrs))

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("en")
      .toFormat("yyyy'-'MM'-'dd");
  });
  eleventyConfig.setLibrary("md", customMarkdownIt);
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
	}
