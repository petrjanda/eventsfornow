module.exports = Em.View.extend({
  templateName: 'map',

  _eventMarkers: [],

  _update: function() {
    console.log('changed')

    if(!this._map) return;

    this._rerenderEvents();
  }.observes('controller.content'),

  didInsertElement: function() {
  	this._map = L.map('map').setView([51.525, -0.09], 13);

    this._rerenderEvents();

  	L.tileLayer('http://{s}tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Ember Hackathon Wooooop',
	    maxZoom: 18,
	    subdomains: ["", "a.", "b.", "c.", "d."],
	    scheme: "xyz"
	  }).addTo(this._map);
  },

  _rerenderEvents: function() {
  	var _self = this;
    _self._cleanup();

    var events = this.get('controller.content');
    
    events.forEach(function(event) {
    	var marker = _self._toMarker(event);

		marker.addTo(_self._map)

		_self._eventMarkers.push(marker);
    })
  },

  _cleanup: function() {
    var self = this;

    this._eventMarkers.forEach(function(marker) {
      self._map.removeLayer(marker);
    })
  },

  _toMarker: function(event) {
  	var marker = L.marker([event.latitude, event.longitude]);
    var text = "<strong>" + event.title + "</strong><br/>" + event.address;
    marker.bindPopup(text).openPopup();

    return marker;
  }
})