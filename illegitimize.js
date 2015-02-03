var path = require('path');

// cool
var TEAMS = [
  'K!ll3rs',
  'OP[!KGH!]',
  'TEAM[RAPT0R]',
  'TV4ALL',
  'R34P4R',
];

// formats
var FORMATS = [
  'divX',
  'Xvid'
];

// string manipulation functions
var STRING_MANIP = [
  'toLowerCase',
  'toUpperCase',
];

// return a random item from an array
function rand(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

module.exports = illegitimize;
function illegitimize(s) {
  var ext = path.extname(s);
  var dir = path.dirname(s);
  var base = path.basename(s, ext);

  base = base.replace(/\s+/g, '.')[rand(STRING_MANIP)]() + '.' + rand(TEAMS) + '.' + rand(FORMATS);

  return dir + path.sep + base + ext;
}
