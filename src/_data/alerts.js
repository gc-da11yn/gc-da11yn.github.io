module.exports = {
	fr: {
		// Alert section heading
		alertHeading: "Informations importantes",

		// Under construction alert, appears on all pages of the site while site is ramping up on content
		underConstText: "Notre site, qui sera bientôt génial, est nouveau et toujours en construction. Veuillez ouvrir un <a hreflang=\"en\" href=\"https://github.com/gc-da11yn/gc-da11yn.github.io/issues\">« <span lang=\"en\">issue</span> » sur notre projet Github</a> si vous voyez quelque chose qui doit être corrigé ou si vous avez des recommandations.",

		// Draft alert, appears on on all pages that have isDraft: true in the front matter
		draftText: "Le contenu de ces pages est à l'état de projet.",

		// Translation to come alert, appears on on all pages that have needsTranslation: true in the front matter
		translationText: "This content is only available in French for the moment. We are currently working on a English translation of the content. Please stay tuned.",

		// Internal link to GC alert, appears on on all pages that have internalLinks: true in the front matter
		internalLinkText: "Les liens qui ne fonctionnent que derrière le pare-feu du gouvernement du Canada sont marqués avec ",
		icon: "icône",
		hiddenTextLink: "lien interne"
	},

	en: {
		// Alert section heading
		alertHeading: "Important information",

		// Under construction alert, appears on all pages of the site while site is ramping up on content
		underConstText: "Our soon to be awesome site is new and still under construction. Please open an <a href=\"https://github.com/gc-da11yn/gc-da11yn.github.io/issues\">issue on our Github project</a> if you see anything that needs to be fixed or if you have any recommendations.",

		// Draft alert, appears on on all pages that have isDraft: true in the front matter
		draftText: "The content on this pages in draft form.",

		// Translation to come alert, appears on on all pages that have needsTranslation: true in the front matter, also removes the other language link
		translationText: "Ce contenu n'est disponible qu'en anglais pour le moment. Nous travaillons actuellement à une traduction française du contenu. Veuillez rester à l'écoute.",

		// Internal link to GC alert, appears on on all pages that have internalLinks: true in the front matter
		internalLinkText: "Links that only work within the Government of Canada firewall are marked with ",
		icon: "icon",
		hiddenTextLink: "internal link"
	}
}
