var Character = require('./character.js');
var Trigrams = require('./trigrams.js');

var Hexagy = {};

Hexagy.YIN = false;
Hexagy.PHYS = false;
Hexagy.CLOSE = false;

Hexagy.YANG = true;
Hexagy.MAG = true;
Hexagy.LONG = true;

Hexagy.Character = Character;
Hexagy.Trigrams = Trigrams;

module.exports = Hexagy;