module.exports = function(eleventyConfig) {
	const moment = require("moment");
	//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); This is in progress...
	//eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPassthroughCopy({ "./src/_docs" : "docs" });
	eleventyConfig.addPassthroughCopy({ "./src/_images" : "img" });
	eleventyConfig.addPassthroughCopy({ "./src/CNAME" : "CNAME" });

	// date filter (localized)
	eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
		locale = locale ? locale : "en";
		moment.locale(locale);
		return moment(date).format(format);
	});

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
