const fs = require('fs');
const ps = require('prompt-sync');
const path = require('path');

const prompt = ps(); 

process.chdir("src")
console.log("The new working directory is " + process.cwd());

const folderName = prompt("What is the name of your new folder?: ");
const titleEN = prompt("What is the *english* title value of your page?: ");
const descriptionEN = prompt("What is the *english* description value of your page?: ");

var mdContentEN = `
---
title: ${titleEN}
layout: layouts/base.njk
description: ${descriptionEN}
---

<!-- HTML starts here -->`

var jsonContentEN = `
{
	"breadcrumbs": [
		{
			"title": "${titleEN}",
			"link": "/en/${folderName}/"
		}
	]
}
`

try {
  if (!fs.existsSync("." + path.sep + "en" + path.sep + folderName)) {
        fs.mkdirSync("." + path.sep + "en" + path.sep + folderName);
    }   
} catch (err) {
  console.error(err);
}

fs.writeFile("." + path.sep + "en" + path.sep + folderName + path.sep  + "index.md" , mdContentEN, function(err, result) {
    if(err) console.log('error', err);});
fs.writeFile("." + path.sep + "en" + path.sep + folderName + path.sep + `${folderName}.json`, jsonContentEN, function(err, result) {
    if(err) console.log('error', err);});



//---------------------------------------------------------------------------------------------



const titleFR = prompt("What is the *french* title value of your page?: ");
const descriptionFR = prompt("What is the *french* description value of your page?: ");

var mdContentFR = `
---
title: ${titleFR}
layout: layouts/base.njk
description: ${descriptionFR}
---

<!-- HTML starts here -->`

var jsonContentFR = `
{
	"breadcrumbs": [
		{
			"title": "${titleFR}",
			"link": "/en/${folderName}/"
		}
	]
}
`

try {
    if (!fs.existsSync("." + path.sep + "fr" + path.sep + folderName)) {
          fs.mkdirSync("." + path.sep + "fr" + path.sep + folderName);
      }
  } catch (err) {
    console.error(err);
  }

  fs.writeFile("." + path.sep + "fr" + path.sep + folderName + path.sep + "index.md", mdContentFR, function(err, result) {
    if(err) console.log('error', err);});
fs.writeFile("." + path.sep + "fr" + path.sep + folderName + path.sep + `${folderName}.json`, jsonContentFR, function(err, result) {
    if(err) console.log('error', err);});