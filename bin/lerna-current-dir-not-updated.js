#!/usr/bin/env node

var lernaCurrentDirUpdated = require('../lib/index');

lernaCurrentDirUpdated({
  arguments: process.argv.slice(2),
  exitIfUpdated: true
});