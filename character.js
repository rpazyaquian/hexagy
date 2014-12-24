var Model = require('ampersand-model');
var Trigrams = require('./trigrams.js');


var Character = Model.extend({
  props: {
    name: 'string',
    yinYang: 'boolean',
    physMag: 'boolean',
    attackRange: 'boolean',
  },
  derived: {
    trigram: {
      deps: [
        'yinYang',
        'physMag',
        'attackRange'
      ],
      fn: function() {
        var trigramValue = (((this.yinYang << 2) | this.physMag << 1) | this.attackRange)
        return Trigrams[trigramValue];
      }
    }
  }
});

module.exports = Character;