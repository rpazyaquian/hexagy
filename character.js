var Model = require('ampersand-model');

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
        return (((this.yinYang << 2) | this.physMag << 1) | this.attackRange);
      }
    }
  }
});

module.exports = Character;