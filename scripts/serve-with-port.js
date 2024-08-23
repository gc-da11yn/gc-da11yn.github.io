const { exec } = require('child_process');
const portfinder = require('portfinder');
const fs = require('fs');

portfinder.basePort = 8080; // Start looking for an available port from 8080

portfinder.getPortPromise().then((port) => {
	// Save the found port to a temporary file
	fs.writeFileSync('.eleventy-port', port.toString());
	console.log(`Port ${port} written to .eleventy-port`);

	// Serve the Eleventy site on the found port
	const serveProcess = exec(`npx @11ty/eleventy --serve --port=${port}`);

	serveProcess.stdout.on('data', (data) => {
		console.log(data);
	});

	serveProcess.stderr.on('data', (data) => {
		console.error(data);
	});

	serveProcess.on('exit', (code) => {
		console.log(`Eleventy server exited with code ${code}`);
	});
}).catch((err) => {
	console.error('Error finding a port:', err);
});
