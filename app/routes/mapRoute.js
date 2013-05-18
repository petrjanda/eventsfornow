App = require('app')

module.exports = Em.Route.extend({
  setupController: function(controller) {
    $.getJSON('http://juan-air.local:9292/events?search=london', function(data) {
      var data = JSON.parse({
        "events": [
          {
            "id": 1,
            "title": "Hacking with Ember!",
            "address": "3 Plough Yard, Shoreditch, EC2A 3LP, London",
            "latitude": 51.5227122,
            "longitude": -0.0790287,
            "start_time": null,
            "end_time": null
          }
        ]
      });

      console.log(data)

    })

    controller.set('content', []);

  }
})