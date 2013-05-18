App = require('app')

module.exports = App.IndexRoute = Em.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
})
