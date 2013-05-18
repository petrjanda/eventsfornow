module.exports = Em.View.extend({
  templateName: 'map',

  _eventMarkers: [],

  _update: function() {
    console.log('changed')

    if(!this._map) return;

    this._rerenderEvents();
  }.observes('controller.content'),

  didInsertElement: function() {
  	this._map = L.map('map').setView([51.505, -0.09], 13);

    this._rerenderEvents();

  	L.tileLayer('http://{s}tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Ember Hackathon Wooooop',
	    maxZoom: 18,
	    subdomains: ["", "a.", "b.", "c.", "d."],
	    scheme: "xyz"
	  }).addTo(this._map);
  },

  _rerenderEvents: function() {
    this._cleanup();

    var events = this.get('controller.content');
    for(var i = 0; i < events.length; i++) {
      var event = events[i];
      var marker = L.marker([event.latitude, event.longitude])

      marker.addTo(this._map)

      this._eventMarkers.push(marker);
    }
  },

  _cleanup: function() {
    var self = this;

    this._eventMarkers.forEach(function(marker) {
      self._map.removeLayer(marker);
    })
  }
})