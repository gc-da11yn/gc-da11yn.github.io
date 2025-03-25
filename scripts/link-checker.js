const blc = require('broken-link-checker');
const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const axios = require('axios');

// Read the port from the .eleventy-port file
const port = fs.readFileSync('.eleventy-port', 'utf8').trim();
const baseUrl = `http://localhost:${port}/en/index.html`;

let brokenLinks = [];

// Function to fetch HTML and extract source file metadata
async function fetchSourceFile(url) {
	try {
		// If the URL ends in a folder path, assume it's an HTML page (e.g., /fr/page/ → /fr/page/index.html)
		if (url.endsWith('/')) {
			url += 'index.html';
		}

		// Ignore non-HTML files (like images, CSS, JS, etc.)
		if (!url.endsWith('.html') && !url.includes('?')) {
			return "Non-HTML file";
		}

		const response = await axios.get(url);
		const html = response.data;
		const dom = new JSDOM(html);
		const document = dom.window.document;

		// Extract the correct source file path from <meta name="source-file">
		const sourceFileMeta = document.querySelector('meta[name="source-file"]');
		let sourceFile = sourceFileMeta ? sourceFileMeta.getAttribute('content') : null;

		if (sourceFile) {
			// Ensure it's a valid file path (remove "./" if present)
			sourceFile = sourceFile.replace(/^\.\/+/, '');

			// Convert the relative path to an absolute path based on your repo structure
			const absolutePath = path.resolve('/Users/shawn.thompson/_git/gc-da11yn.github.io', sourceFile);

			// Convert absolute path to a file:// URL
			return `file://${absolutePath}`;
		} else {
			console.warn(`⚠️  No source file meta tag found for ${url}`);
			return "Unknown source file";
		}
	} catch (error) {
		console.error(`Error fetching source file from ${url}: ${error.message}`);
		return "Unknown source file";
	}
}



// Function to check for broken anchors and extract metadata
async function fetchAndCheckPage(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const dom = new JSDOM(html);
		const document = dom.window.document;

		// Get source file from meta tag
		let sourceFile = await fetchSourceFile(url);

		// Check for broken anchors
		const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
		anchors.forEach(anchor => {
			const targetId = anchor.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (!targetElement) {
				console.log(`Broken anchor found: ${targetId} on page ${url}`);
				if (!isDuplicate(url, `#${targetId}`)) {
					brokenLinks.push({
						page: url,
						link: `#${targetId}`,
						linkText: anchor.textContent.trim(),
						status: 'Broken Anchor',
						statusText: `Anchor #${targetId} not found on page`,
						sourceFile: sourceFile
					});
				}
			}
		});

		return sourceFile;
	} catch (error) {
		console.error(`Error fetching ${url}: ${error.message}`);
		return "Unknown source file";
	}
}

// Helper function to check if a broken link or anchor is already in the list
function isDuplicate(page, link) {
	return brokenLinks.some(
		(entry) => entry.page === page && entry.link === link
	);
}

// Create the SiteChecker instance for general link checking
const siteChecker = new blc.SiteChecker(
	{
		excludeExternalLinks: true,  // Only check internal links
		filterLevel: 3,  // Check all links including anchors
		recurse: true,  // Follow links to other pages within the same domain
		maxSockets: 10,  // Number of concurrent requests
		maxRetries: 2,  // Retry broken links twice before reporting
	},
	{
		link: async (result) => {
			// Fetch the page and extract the correct source file path before checking broken links
			const sourceFile = await fetchSourceFile(result.base.resolved);

			if (result.broken) {
				if (!isDuplicate(result.base.original, result.url.original)) {
					const pageUrl = result.base.original;

					brokenLinks.push({
						page: pageUrl,
						link: result.url.original,
						linkText: result.html.text || "N/A",
						status: result.status,
						statusText: result.statusText,
						sourceFile: sourceFile
					});
				}
			}

			// Check anchor links on each successfully loaded page
			if (result.http.response && result.http.response.statusCode === 200) {
				await fetchAndCheckPage(result.url.resolved);
			}
		},
		end: () => {
			if (brokenLinks.length > 0) {
				// Group links by page
				const groupedLinks = brokenLinks.reduce((acc, item) => {
					let existingPage = acc.find(entry => entry.page === item.page);
					if (!existingPage) {
						existingPage = {
							page: item.page,
							sourceFile: item.sourceFile,
							links: []
						};
						acc.push(existingPage);
					}
					existingPage.links.push({
						link: item.link,
						linkText: item.linkText
					});
					return acc;
				}, []);

				// Add count at the beginning
				const outputData = [{ linksFound: brokenLinks.length }, ...groupedLinks];

				// Write the JSON output
				const outputFilePath = path.join(__dirname, '..', 'broken-links.json');
				fs.writeFileSync(outputFilePath, JSON.stringify(outputData, null, 2));
				console.log(`Broken links found! See ${outputFilePath} for details.`);
			} else {
				console.log('No broken links found.');
			}
			console.log('Site link check complete.');
		},
	}
);

// Start link checking from /en/index.html
siteChecker.enqueue(baseUrl);
