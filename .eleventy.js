const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { stripHtml } = require('string-strip-html');
const path = require('path');
const fs = require('fs');

module.exports = function(eleventyConfig) {

  let markdownItOptions = {
    html: true, // you can include HTML tags
  };

  eleventyConfig.setLibrary(
    "md",
    markdownIt(markdownItOptions).use(markdownItAnchor).use(markdownItAttrs)
  );

  const slugifyFilter = eleventyConfig.javascriptFunctions.slugify;

  eleventyConfig.addFilter("stripTagsSlugify", (str) => {

    if (!str) return;

    return slugifyFilter(stripHtml(str).result, {
    });
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

  eleventyConfig.addDataExtension('json', (contents) => {
    return JSON.parse(contents);
  });

  eleventyConfig.addGlobalData('src', () => {
    const srcJsonPath = path.resolve(__dirname, 'src', 'src.json');
    const jsonContent = fs.readFileSync(srcJsonPath, 'utf8');
    return JSON.parse(jsonContent);
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
	}
