#!/usr/bin/env node

'use strict';

var markdownLinkCheck = require('markdown-link-check');
var fs = require('fs');
var glob = require('glob');
var path = require('path');
var chalk = require('chalk');

var pagesDirectory = 'src/pages';
var files = glob.sync(pagesDirectory + '/**/*.md', {
  ignore: ['**/node_modules/**/*.md'],
  realpath: true,
});

var config = JSON.parse(fs.readFileSync('.markdown-link-check.json'));
config.timeout = '30s';

var ignorePaths = ['/en/', '/fr/']; // Define the paths to ignore
var imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg']; // Define image extensions

var results = [];

files.forEach(function (file) {
  var markdown = fs.readFileSync(file).toString();
  let opts = Object.assign({}, config);

  opts.baseUrl = 'file://' + path.dirname(path.resolve(file)).replace(/\\/g, '/');

  markdownLinkCheck(markdown, opts, function (err, linkResults) {
    if (err) {
      console.error('Error', err);
      return;
    }

    console.log(chalk.green('Reading: ' + file));

    linkResults.forEach(function (result) {
      if (
        result.link.startsWith('http://') ||
        result.link.startsWith('https://') ||
        result.link.startsWith('mailto:') // Ignore mailto links
      ) {
        return;
      }

      // Check if the link starts with one of the ignored paths
      if (ignorePaths.some((prefix) => result.link.startsWith(prefix))) {
        return;
      }

      // Check if the file has an image extension
      if (imageExtensions.some((ext) => result.link.toLowerCase().endsWith(ext))) {
        return;
      }

      if (result.status === 'dead') {
        process.exitCode = 1;
        console.log(chalk.red('Dead: ' + result.link));
        results.push({ file, link: result.link, status: 'dead' });
      } else if (result.status == 'error') {
        process.exitCode = 1;
        console.log(chalk.red('Link Error: ' + result.link));
        results.push({ file, link: result.link, status: 'error' });
      }
    });

    fs.writeFileSync('broken-links.json', JSON.stringify(results, null, 2));
  });
});
