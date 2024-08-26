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

// Function to fetch HTML and check for broken anchors
async function fetchAndCheckAnchors(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const dom = new JSDOM(html);
		const document = dom.window.document;

		const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
		anchors.forEach(anchor => {
			const targetId = anchor.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (!targetElement) {
				console.log(`Broken anchor found: ${targetId} on page ${url}`);
				brokenLinks.push({
					page: url,
					link: `#${targetId}`,
					linkText: anchor.textContent.trim(),
					status: 'Broken Anchor',
					statusText: `Anchor #${targetId} not found on page`
				});
			}
		});
	} catch (error) {
		console.error(`Error fetching ${url}: ${error.message}`);
	}
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
			if (result.broken) {
				brokenLinks.push({
					page: result.base.original,
					link: result.url.original,
					linkText: result.html.text || "N/A",
					status: result.status,
					statusText: result.statusText
				});
			}

			// Check anchor links on each page that was successfully loaded
			if (result.http.response && result.http.response.statusCode === 200) {
				await fetchAndCheckAnchors(result.url.resolved);
			}
		},
		end: () => {
			if (brokenLinks.length > 0) {
				const outputFilePath = path.join(__dirname, '..', 'broken-links.json');
				fs.writeFileSync(outputFilePath, JSON.stringify(brokenLinks, null, 2));
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
