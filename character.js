var Model = require('ampersand-model');
var Trigrams = require('./trigrams.js');

var Character = Model.extend({
  props: {
    name: 'string',
    yinYang: 'boolean',
    physMag: 'boolean',
    attackRange: 'boolean'
  },
  derived: {
    trigram: {
      deps: [
        'yinYang',
        'physMag',
        'attackRange'
      ],
      fn: function() {
        var trigramValue = (((this.yinYang << 2) | this.attackRange << 1) | this.physMag)
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
        var yinYangString = this.yinYang ? 'yang' : 'yin';
        var physMagString = this.physMag ? 'magical' : 'physical';
        var attackRangeString = this.attackRange ? 'long' : 'close';

        var status = this.name + " is a " + yinYangString + "-aligned " + physMagString + " " + attackRangeString + "-range character.\nTheir element is " + this.trigram.name + " ("+ this.trigram.symbol +").";
        return status;
      }
    }
  }
});

module.exports = Character;