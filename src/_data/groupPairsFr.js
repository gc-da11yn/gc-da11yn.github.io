module.exports = () => {
	const roles = require("./roles.js");
	return Object.entries(roles.groups.fr).map(([key, name]) => {
		// Get all role keys that belong to this group
		const roleKeysInGroup = Object.entries(roles.roles)
			.filter(([, meta]) => meta.group === key)
			.map(([roleKey]) => roleKey);

		// Get the translated labels for these roles
		const roleLabels = roleKeysInGroup.map(roleKey => roles.labels.fr[roleKey]);

		return [
			key,
			name,
			roles.descriptions.fr[key],
			roleLabels
		];
	}).sort();
};
