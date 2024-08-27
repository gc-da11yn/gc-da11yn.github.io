const { exec } = require('child_process');
const portfinder = require('portfinder');

portfinder.basePort = 8080; // Default starting port

portfinder.getPortPromise().then((port) => {
	// Serve the Eleventy site on the dynamically found port
	const serveProcess = exec(`npx @11ty/eleventy --serve --port=${port}`);

	serveProcess.stdout.on('data', (data) => {
		console.log(data);
	});

	serveProcess.stderr.on('data', (data) => {
		console.error(data);
	});

	// Once the server is running, run the link checker
	serveProcess.on('close', () => {
		const checkLinksProcess = exec(`node ./scripts/link-checker.js http://localhost:${port}`);

		checkLinksProcess.stdout.on('data', (data) => {
			console.log(data);
		});

		checkLinksProcess.stderr.on('data', (data) => {
			console.error(data);
		});
	});
}).catch((err) => {
	console.error('Error finding a port:', err);
});
