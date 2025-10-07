const pathPrefix = require('./pathPrefix')(); // resolve once per build
const fs = require('fs');
const { stripHtml } = require('string-strip-html');

module.exports = {
	eleventyExcludeFromCollections(data) {
		return data.archived === true;
	},

    headings: (data) => {
        const { page, toc, tocSimple } = data;

        if (!toc && !tocSimple) {
            return null;
        }

        try {
            // Read the source file if available
            if (!data.page || !data.page.inputPath) {
                return null;
            }

            // Read the markdown file
            const content = fs.readFileSync(data.page.inputPath, 'utf8');

            // Extract frontmatter and content
            const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
            if (!frontmatterMatch) {
                return null;
            }

            const markdownContent = frontmatterMatch[2];

            // Simple regex to extract headings from markdown
            const headingRegex = /^(#{2,3})\s+(.+)$/gm;
            const headings = [];
            let match;

            while ((match = headingRegex.exec(markdownContent)) !== null) {
                const level = match[1].length; // Number of # characters
                const text = match[2].trim();

                // Create ID from heading text using the same logic as markdown-it-anchor
                // This matches the slugification in both the markdown plugin and stripTagsSlugify filter
                let cleanText = stripHtml(text).result;

                // French accent transliteration (matching stripTagsSlugify filter)
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

                // Standard slugification (matching markdown plugin)
                const id = cleanText
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '') // Remove remaining special characters
                    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
                    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

                // Filter based on TOC settings
                const minLevel = 2;
                const maxLevel = data.tocSimple ? 2 : 3;

                if (level >= minLevel && level <= maxLevel && text.length > 0) {
                    headings.push({
                        level: `h${level}`,
                        text,
                        id
                    });
                }
            }

            return headings.length > 0 ? headings : null;
        } catch (error) {
            console.warn(`Error generating TOC for ${data.page?.inputPath}: ${error.message}`);
            return null;
        }
    }
};
