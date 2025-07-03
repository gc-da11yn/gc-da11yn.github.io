const pathPrefix = require('./pathPrefix')(); // resolve once per build

module.exports = {
	eleventyExcludeFromCollections(data) {
		return data.archived === true;
	}
};
