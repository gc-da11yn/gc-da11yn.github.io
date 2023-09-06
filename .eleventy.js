const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
  const { DateTime } = require("luxon");

  let markdownItOptions = {
    html: true // you can include HTML tags
	}

  eleventyConfig.addCollection("mainCollectionEN", function (collection) {
    return collection
      .getFilteredByTags("main")
      .filter((item) => item.data.locale == "en");
  });

  eleventyConfig.addCollection("mainCollectionFR", function (collection) {
    return collection
      .getFilteredByTags("main")
      .filter((item) => item.data.locale == "fr");
  });

	eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor).use(markdownItAttrs))

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
			// pathPrefix : "/gc-da11yn.github.io/"
		};
	}
