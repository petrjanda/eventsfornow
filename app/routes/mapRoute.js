App = require('app')

module.exports = Em.Route.extend({
  setupController: function(controller) {
    var content = [
      {location: {lat: 51.505, long: -0.09}},
      {location: {lat: 51.505, long: -0.08}},
      {location: {lat: 51.510, long: -0.08}},
      {location: {lat: 51.500, long: -0.08}},
      {location: {lat: 51.505, long: -0.07}},
    ];


    controller.set('content', content);

  }
})