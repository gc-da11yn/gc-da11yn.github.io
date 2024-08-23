const blc = require('broken-link-checker');
const fs = require('fs');
const path = require('path');

// Read the port from the .eleventy-port file
const port = fs.readFileSync('.eleventy-port', 'utf8').trim();
const startUrl = `http://localhost:${port}/en/index.html`;

let brokenLinks = [];

// Create the SiteChecker instance
const siteChecker = new blc.SiteChecker(
	{
		excludeExternalLinks: true,  // Only check internal links
		filterLevel: 0,  // Ensure all links are checked
		recurse: true,  // Follow links to other pages within the same domain
		maxSockets: 10,  // Number of concurrent requests
		maxRetries: 2,  // Retry broken links twice before reporting
	},
	{
		link: (result) => {
			if (result.broken) {
				// Log broken link details only to the JSON file, not to the terminal
				brokenLinks.push({
					page: result.base.original,
					link: result.url.original,
					linkText: result.html.text || "N/A",
					status: result.status,
					statusText: result.statusText
				});
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
siteChecker.enqueue(startUrl);
