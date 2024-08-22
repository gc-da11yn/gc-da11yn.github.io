const blc = require('broken-link-checker');
const fs = require('fs');

// Read the port from the .eleventy-port file
const port = fs.readFileSync('.eleventy-port', 'utf8');
const siteUrl = `http://localhost:${port}`;

const siteChecker = new blc.SiteChecker(
	{
		excludeExternalLinks: true,  // Exclude external links from checking
		filterLevel: 3,  // Level of filtering, can adjust based on need
	},
	{
		link: (result) => {
			if (result.broken) {
				console.error(`Broken link found on ${result.base.original} -> ${result.url.original} - ${result.status} (${result.statusText})`);
			}
		},
		end: () => {
			console.log('Site link check complete.');
		},
	}
);

siteChecker.enqueue(siteUrl);
