const fs = require('fs');
const ps = require('prompt-sync');
const path = require('path');

const prompt = ps(); 
/*TODO
  Error handling and a help function.
  What are breadcrumbs. Learn how to communicate what exactly and how this script fixes a problem. 
*/
process.chdir("src")

var args = process.argv.slice(2);


var folderName = prompt("What is the name of your new folder?: ");
const titleEN = prompt("What is the ENGLISH title of your page?: ");
const descriptionEN = prompt("What is the ENGLISH description of your page?: ");
var relativeFolderPath;

if(args.length == 0){
  args[0] = "";
  relativeFolderPath = path.sep + folderName;
}else{
  relativeFolderPath = path.sep + args[0] + path.sep + folderName;
}

console.log(relativeFolderPath.split(path.sep).join(path.sep + path.sep));
var mdContentEN = `
---
title: ${titleEN}
layout: layouts${path.sep}base.njk
description: ${descriptionEN}
---

<!-- HTML starts here -->`

var jsonContentEN = `
{
	"breadcrumbs": [
		{
			"title": "${titleEN}",
			"link": "${path.sep}${path.sep}en${relativeFolderPath.split(path.sep).join(path.sep + path.sep)}"
		}
	]
}
`

try {
  console.log("." + path.sep + "en" + path.sep + relativeFolderPath)
  if (!fs.existsSync("." + path.sep + "en" + path.sep + relativeFolderPath)) {
        fs.mkdirSync("." + path.sep + "en" + path.sep + relativeFolderPath);
    }   
} catch (err) {
  console.error(err);
}

fs.writeFile("." + path.sep + "en" + path.sep + relativeFolderPath + path.sep  + "index.md" , mdContentEN, function(err, result) {
    if(err) console.log('error', err);});
fs.writeFile("." + path.sep + "en" + path.sep + relativeFolderPath + path.sep + `${folderName}.json`, jsonContentEN, function(err, result) {
    if(err) console.log('error', err);});


const titleFR = prompt("What is the FRENCH title of your page?: ");
const descriptionFR = prompt("What is the FRENCH description of your page?: ");

var mdContentFR = `
---
title: ${titleFR}
layout: layouts${path.sep}base.njk
description: ${descriptionFR}
---

<!-- HTML starts here -->`

var jsonContentFR = `
{
	"breadcrumbs": [
		{
			"title": "${titleFR}",
			"link": "${path.sep}${path.sep}fr${relativeFolderPath.split(path.sep).join(path.sep + path.sep)}"
		}
	]
}
`

try {
    if (!fs.existsSync("." + path.sep + "fr" + path.sep + relativeFolderPath)) {
          fs.mkdirSync("." + path.sep + "fr" + path.sep + relativeFolderPath);
      }
  } catch (err) {
    console.error(err);
  }

  fs.writeFile("." + path.sep + "fr" + path.sep + relativeFolderPath + path.sep + "index.md", mdContentFR, function(err, result) {
    if(err) console.log('error', err);});
fs.writeFile("." + path.sep + "fr" + path.sep + relativeFolderPath + path.sep + `${folderName}.json`, jsonContentFR, function(err, result) {
    if(err) console.log('error', err);});