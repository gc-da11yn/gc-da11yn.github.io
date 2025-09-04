module.exports = () => {
	const roles = require("./roles.js");
	return Object.entries(roles.groups.en).map(([key, name]) => {
		// Get all role keys that belong to this group
		const roleKeysInGroup = Object.entries(roles.roles)
			.filter(([, meta]) => meta.group === key)
			.map(([roleKey]) => roleKey);

		// Get the translated labels for these roles
		const roleLabels = roleKeysInGroup.map(roleKey => roles.labels.en[roleKey]);

		return [
			key,
			name,
			roles.descriptions.en[key],
			roleLabels
		];
	}).sort();
};
