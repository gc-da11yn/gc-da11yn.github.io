module.exports = {
	rootPath: function (data) {
		return data.page.url
			.split('/')
			.filter(function (x) {
				return x;
			})
			.map(function () {
				return '../';
			})
			.join('');
	},
	eleventyExcludeFromCollections: function (data) {
		return data.archived === true;
	}
  };
