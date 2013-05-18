App = require('app')

module.exports = Em.Route.extend({
  setupController: function(controller) {
    $.getJSON('http://juan-air.local:9292/events?search=london', function(data) {
      controller.set('content', data.events);
    })

    controller.set('content', []);
  },

  events: {
    showEvent: function(eventId) {
      this.get('controller').set('currentEvent', eventId);
    }
  }
})