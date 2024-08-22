const { exec } = require('child_process');
const portfinder = require('portfinder');
const fs = require('fs');

portfinder.basePort = 8080; // Start looking for an available port from 8080

portfinder.getPortPromise().then((port) => {
	// Save the found port to a temporary file
	fs.writeFileSync('.eleventy-port', port.toString());

	// Serve the Eleventy site on the found port
	const serveProcess = exec(`npx @11ty/eleventy --serve --port=${port}`);

	serveProcess.stdout.on('data', (data) => {
		console.log(data);
	});

	serveProcess.stderr.on('data', (data) => {
		console.error(data);
	});
}).catch((err) => {
	console.error('Error finding a port:', err);
});
