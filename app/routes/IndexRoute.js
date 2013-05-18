App = require('app')

module.exports = Em.Route.extend({
  enter: function() {
    console.log('index');
  },

  model: function() {
    return ['red', 'yellow', 'blue'];
  }
})
