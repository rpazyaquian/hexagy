var Model = require('ampersand-model');

var Trigram = Model.extend({
  props: {
    name: 'string',
    value: 'integer'
  }
});

module.exports = Trigram;