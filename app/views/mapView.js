module.exports = Em.View.extend({
  templateName: 'map',

  _update: function() {
  }.observes('content'),

  didInsertElement: function() {
  	var map = L.map('map').setView([51.505, -0.09], 13);
  	L.marker([51.5, -0.09]).addTo(map);
  	L.tileLayer('http://{s}tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Ember Hackathon Wooooop',
	    maxZoom: 18,
	    subdomains: ["", "a.", "b.", "c.", "d."],
	    scheme: "xyz"
	}).addTo(map);
  }
})