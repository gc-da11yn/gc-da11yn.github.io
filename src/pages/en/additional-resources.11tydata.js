const resourceTopics = require('../../_data/resourceTopics');
const { stripHtml } = require('string-strip-html');

module.exports = {
	eleventyComputed: {
		headings: (data) => {
			// Only generate TOC if tocSimple is true
			if (!data.tocSimple) {
				return null;
			}

			const locale = 'en';
			const topics = resourceTopics[locale];
			const headings = [];

			// Sort topics by order
			const sortedTopics = Object.entries(topics).sort((a, b) => a[1].order - b[1].order);

			// Generate heading entries for each topic
			for (const [topicKey, topicData] of sortedTopics) {
				const label = topicData.label;

				// Create ID from heading text using same logic as markdown-it-anchor
				let cleanText = stripHtml(label).result;

				// French accent transliteration
				const accentMap = {
					'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
					'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
					'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
					'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
					'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
					'ý': 'y', 'ÿ': 'y',
					'ñ': 'n',
					'ç': 'c',
					'æ': 'ae',
					'œ': 'oe'
				};
				cleanText = cleanText.replace(/[àáâãäåèéêëìíîïòóôõöùúûüýÿñçæœ]/g, c => accentMap[c]);

				// Standard slugification
				const id = cleanText
					.toLowerCase()
					.replace(/[^\w\s-]/g, '')
					.replace(/[\s_-]+/g, '-')
					.replace(/^-+|-+$/g, '');

				headings.push({
					level: 'h2',
					text: label,
					id
				});
			}

			return headings.length > 0 ? headings : null;
		}
	}
};
