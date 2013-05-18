App = require('app')

module.exports = Em.Route.extend({
  setupController: function(controller) {
    $.getJSON('http://juan-air.local:9292/events', function(data) {
      controller.set('content', data.events.filter( function(item) { return !!item.latitude}));
    })

    controller.set('content', []);
  },

  events: {
    showEvent: function(eventId) {
      this.get('controller').set('currentEvent', eventId);
    }
  }
})