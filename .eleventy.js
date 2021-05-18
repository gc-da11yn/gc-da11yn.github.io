module.exports = function(eleventyConfig) {
	const moment = require("moment");

	eleventyConfig.addPassthroughCopy({ "./node_modules/wet-boew/" : "wet-boew" });
	eleventyConfig.addPassthroughCopy({ "./node_modules/gcweb/" : "gcweb" });
	eleventyConfig.addPassthroughCopy({ "./src/_docs" : "docs" });
	eleventyConfig.addPassthroughCopy({ "./src/_images" : "img" });
	eleventyConfig.addPassthroughCopy({ "./src/CNAME" : "CNAME" });

	// date filter (localized)
	eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
		locale = locale ? locale : "en";
		moment.locale(locale);
		return moment(date).format(format);
	});

	// Localized collections
		eleventyConfig.addCollection("posts_en", function (collection) {
		  return collection.getFilteredByGlob("./src/en/posts/*.md");
		});
	  
		eleventyConfig.addCollection("posts_fr", function (collection) {
		  return collection.getFilteredByGlob("./src/fr/posts/*.md");
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