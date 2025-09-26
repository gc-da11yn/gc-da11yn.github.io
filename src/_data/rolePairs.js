// Build an array of [roleKey, roleMeta] tuples from roles.roles
module.exports = () => {
	const rolesData = require("./roles.js"); // same folder as this file
	// rolesData.roles is an object like { contentAuthoring: { group: "author" }, ... }
	return Object.entries(rolesData.roles).sort(([a], [b]) => a.localeCompare(b));
};
