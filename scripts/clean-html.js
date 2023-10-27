const cleaner = require("clean-html");
const fs = require("fs");
const path = require("path");

const options = {
	"break-around-tags": ["li"],
	wrap: 0,
};

const scriptDirectory = __dirname;

const siteFolderPath = path.join(scriptDirectory, "..", "_site");

function processHTMLFiles(directory) {
	const items = fs.readdirSync(directory);

	items.forEach((item) => {
		const itemPath = path.join(directory, item);
		const isDirectory = fs.statSync(itemPath).isDirectory();

		if (isDirectory) {
			processHTMLFiles(itemPath);
		} else if (itemPath.endsWith(".html")) {
			fs.readFile(itemPath, "utf8", (err, input) => {
				if (!err) {
					cleaner.clean(input, options, (beautifiedHTML) => {
						fs.writeFile(itemPath, beautifiedHTML, (writeErr) => {
							if (writeErr) {
								console.error(
									`Error writing file: ${itemPath}`
								);
							} else {
								console.log(`Beautified: ${itemPath}`);
							}
						});
					});
				} else {
					console.error(`Error reading file: ${itemPath}`);
				}
			});
		}
	});
}

processHTMLFiles(siteFolderPath);
