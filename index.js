var Character = require('./character.js');
var Trigrams = require('./trigrams.js');

var YIN = false;
var PHYS = false;
var CLOSE = false;

var YANG = true;
var MAG = true;
var LONG = true;

var rebecca = new Character({
  name: 'Rebecca',
  yinYang: YANG,
  physMag: MAG,
  attackRange: CLOSE
});

console.log(rebecca.status);