module.exports = function(config) {

	config.addPassthroughCopy({ "./node_modules/wet-boew/" : "wet-boew" });
	config.addPassthroughCopy({ "./node_modules/gcweb/" : "gcweb" });

	return {
		  dir: {
			  input : "./src/_pages",
			  output : "_site",
			  includes : "../_includes",
			  data : "../_data"
		  },
		  templateFormats : ["html", "md", "njk", "css"],
		  htmlTemplateEngine : "njk",
		  markdownTemplate : "njk",
		  setUseGitIgnore : false
	  };
  }