module.exports = Em.View.extend({
  templateName: 'map',

  _update: function() {
  }.observes('content'),

  didInsertElement: function() {
  	var map = L.map('map').setView([51.505, -0.09], 13);

  	// var events = this.get('events');
  	var events = [
	  	{location: {lat: 51.505, long: -0.09}},
	  	{location: {lat: 51.505, long: -0.08}},
	  	{location: {lat: 51.510, long: -0.08}},
	  	{location: {lat: 51.500, long: -0.08}},
	  	{location: {lat: 51.505, long: -0.07}},
  	];

  	for(var i = 0; i < events.length; i++) {
  		var event = events[i];
  		L.marker([event.location.lat, event.location.long]).addTo(map);
  	}

  	L.tileLayer('http://{s}tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Ember Hackathon Wooooop',
	    maxZoom: 18,
	    subdomains: ["", "a.", "b.", "c.", "d."],
	    scheme: "xyz"
	}).addTo(map);
  }
})