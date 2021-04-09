module.exports = function(config) {

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