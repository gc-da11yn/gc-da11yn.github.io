module.exports = {
	en: {
		type: {
			"word": "Microsoft Word document",
			"pdf": "PDF Document",
			"powerpoint": "Microsoft PowerPoint presentation"
		},
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
		type: {
			"word": "Document Microsoft Word",
			"pdf": "Document PDF",
			"powerpoint": "Présentation Microsoft PowerPoint"
		},
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
