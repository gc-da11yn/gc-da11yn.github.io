const fs = require('fs');
const path = require('path');

function replaceLinksInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(/(<a[^>]+href=["'])(\.\.\/|\.{0,2}\/)(.*?\.md["'][^>]*>)/g, (match, p1, p2, p3) => {
    return `${p1}../${p3.replace(/\.md(["'])/g, '/$1')}`;
  });

  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.resolve(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.html') && fs.statSync(filePath).isFile()) {
      replaceLinksInFile(filePath);
      console.log(`Links replaced in ${filePath}`);
    }
  });
}

// Directory containing HTML files (assuming the _site directory)
const siteDirectory = path.resolve(__dirname, '..', '_site');

// Recursively process HTML files in subdirectories
processDirectory(siteDirectory);

console.log('Link replacement complete.');
