module.exports = function(eleventyConfig) {
  const { DateTime } = require("luxon");

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
