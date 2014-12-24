var Character = require('./character.js');
var Trigrams = require('./trigrams.js');

var YIN, PHYS, CLOSE = false;
var YANG, MAG, LONG = true;

var rebecca = new Character({
  name: 'Rebecca',
  yinYang: YANG,
  physMag: MAG,
  attackRange: CLOSE
});

console.log(Trigrams[rebecca.trigram]);