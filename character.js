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
    },
    status: {
      deps: [
        'name',
        'yinYang',
        'physMag',
        'attackRange'
      ],
      fn: function() {
        var yinYangString = {
          false: 'yin',
          true: 'yang'
        };
        var physMagString = {
          false: 'physical',
          true: 'magical'
        };
        var attackRangeString = {
          false: 'close',
          true: 'long'
        };
        var status = this.name + " is a " + yinYangString[this.yinYang] + "-aligned " + physMagString[this.physMag] + " " + attackRangeString[this.attackRange] + "-range character.";
        return status;
      }
    }
  }
});

module.exports = Character;