module.exports = {
	en: {
		type: "Microsoft Word Document",
		altText: "Document Icon",
		sizeUnits: {
			KB: "KiloByte",
			MB: "MegaByte",
		},
		localizedUnits: {
			KB: "KB",
			MB: "MB",
		},
		downloadText: "Download the document",
	},
	fr: {
		type: "Document Microsoft Word",
		altText: "Icône de document",
		sizeUnits: {
			KB: "kilo-octet",
			MB: "méga-octet",
		},
		localizedUnits: {
			KB: "ko",
			MB: "Mo",
		},
		downloadText: "Télécharger le document",
	},
	unitMap: {
		kb: "KB", // Maps any case variation of KB
		KB: "KB",
		ko: "KB", // Maps French "ko" to "KB"
		KO: "KB",
		mb: "MB", // Maps any case variation of MB
		MB: "MB",
		mo: "MB", // Maps French "Mo" to "MB"
		MO: "MB",
	},
};
