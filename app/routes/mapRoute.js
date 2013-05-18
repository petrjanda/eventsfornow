App = require('app')

module.exports = Em.Route.extend({
  setupController: function(controller) {
    var content = ['hello'];

    controller.set('content', content);

  }
})