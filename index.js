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
  physMag: PHYS,
  attackRange: CLOSE
});

var roxanne = new Character({
  name: 'Roxanne',
  yinYang: YIN,
  physMag: MAG,
  attackRange: LONG
});

console.log(rebecca.status);
console.log(roxanne.status);