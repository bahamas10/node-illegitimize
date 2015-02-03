#!/usr/bin/env node

var fs = require('fs');
var illegitimize = require('../');
var args = process.argv.slice(2);

if (!args) {
  console.error('Usage: %s <file> ...', process.argv[1]);
  process.exit(1);
}

args.forEach(function(file) {
  var newfile = illegitimize(file);
  console.log('%s -> %s', file, newfile);
  fs.renameSync(file, newfile);
});
