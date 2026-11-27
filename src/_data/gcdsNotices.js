const pathPrefix = require("./pathPrefix")();

module.exports = {
	en: {
		archivedParagraph:
			`Please remove any bookmarks or links to this resource. For updates, check the <a href="${pathPrefix}/en/#updates">Latest updates</a> section on our homepage.`,
		landingTitle: "Content in progress",
		officeTitle: "Office version notice",
		standardTitle: "Standard update",
		roles: {
			danger: "Danger",
			info: "Information",
			success: "Success",
			warning: "Warning"
		}
	},
	fr: {
		archivedParagraph:
			`Veuillez supprimer tous les signets ou liens vers cette ressource. Pour les mises à jour, consultez la section <a href="${pathPrefix}/fr/#actualites">Dernières actualités</a> de notre page d'accueil.`,
		landingTitle: "Contenu en cours",
		officeTitle: "Avis concernant la version d’Office",
		standardTitle: "Mise à jour de la norme",
		roles: {
			danger: "Danger",
			info: "Renseignements",
			success: "Réussite",
			warning: "Avertissement"
		}
	}
};
