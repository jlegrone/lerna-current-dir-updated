#!/usr/bin/env node

var currentDirUpdated = require('../lib/index');

var result = currentDirUpdated({ arguments: process.argv.slice(2) });

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

if (result.updated) {
  console.log(result.package + ' is updated.');
} else {
  console.log(result.package + ' is not updated.');
  process.exit(1);
}