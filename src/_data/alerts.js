module.exports = {
	fr: {
		// Alert section heading
		alertHeading: "Informations importantes",

		// Under construction alert, appears on all pages of the site while site is ramping up on content
		underConstText:
			'<p>Vous êtes en train d\'explorer un site web qui n\'a pas encore été officiellement lancé. Si vous souhaitez nous faire part de vos commentaires, n\'hésitez pas à consulter notre page <a href="/fr/contactez-nous/">Contactez-nous</a>.</p><p>Pour consulter la version actuelle de ce site web, veuillez visiter le site <a href=\"https://a11y.canada.ca/fr\">a11y.canada.ca</a>.</p>',

		// Draft alert, appears on on all pages that have isDraft: true in the front matter
		draftText: "Le contenu de ces pages est à l'état de projet.",

		// Translation to come alert, appears on on all pages that have needsTranslation: true in the front matter
		translationText:
			"This content is only available in French for the moment. We are currently working on a English translation of the content. Please stay tuned.",

		// Internal link to GC alert, appears on on all pages that have internalLinks: true in the front matter
		internalLinkText:
			"Les liens qui ne fonctionnent que derrière le pare-feu du gouvernement du Canada sont marqués avec ",
		icon: "icône ",
		hiddenTextLink: "lien interne",
	},

	en: {
		// Alert section heading
		alertHeading: "Important information",

		// Under construction alert, appears on all pages of the site while site is ramping up on content
		underConstText:
			'<p>You are currently exploring a website that has not been officially launched yet. If you wish to provide feedback, please don\'t hesitate to checkout our <a href="/en/contact-us/">contact us</a> page.</p> <p>To view the current version of this website, please visit <a href="https://a11y.canada.ca/en">a11y.canada.ca</a>.</p>',

		// Draft alert, appears on on all pages that have isDraft: true in the front matter
		draftText: "The content on this pages in draft form.",

		// Translation to come alert, appears on on all pages that have needsTranslation: true in the front matter, also removes the other language link
		translationText:
			"Ce contenu n'est disponible qu'en anglais pour le moment. Nous travaillons actuellement à une traduction française du contenu. Veuillez rester à l'écoute.",

		// Internal link to GC alert, appears on on all pages that have internalLinks: true in the front matter
		internalLinkText:
			"Links that only work within the Government of Canada firewall are marked with ",
		icon: "icon ",
		hiddenTextLink: "internal link",
	},
};
