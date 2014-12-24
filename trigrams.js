var Trigram = require('./trigram.js');

// here we will assume that
// yin (0) and yang (1) are
// the most significant bit.

// the next two bits are the
// integer value of the other
// four choies.

// paired up, these trigrams are

// earth (000)
// metal (100)

// thunder (001)
// fire (101)

// water (010)
// wind (110)

// dark (011)
// light (111)

var Earth = new Trigram({
  name: 'Earth',
  value: 0
});

var Metal = new Trigram({
  name: 'Metal',
  value: 4
});

var Thunder = new Trigram({
  name: 'Thunder',
  value: 1
});

var Fire = new Trigram({
  name: 'Fire',
  value: 5
});

var Water = new Trigram({
  name: 'Water',
  value: 2
});

var Wind = new Trigram({
  name: 'Wind',
  value: 6
});

var Dark = new Trigram({
  name: 'Dark',
  value: 3
});

var Light = new Trigram({
  name: 'Light',
  value: 7
});

var Trigrams = [

  // in numerical order for ease of access

  Earth,  // 000
  Thunder,  // 001
  Water,  // 010
  Dark,  // 011
  Metal,  // 100
  Fire,  // 101
  Wind,  // 110
  Light  // 111
];

module.exports = Trigrams;