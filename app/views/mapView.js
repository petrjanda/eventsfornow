module.exports = Em.View.extend({
  templateName: 'map',

  _eventMarkers: {},

  _update: function() {
    if(!this._map) return;

    this._rerenderEvents();
  }.observes('controller.filteredContent'),

  _updatePosition: function() {
    if(!this._map) return;

    var eventId = this.get('controller.currentEvent');
    this._panMapTo(eventId);
  }.observes('controller.currentEvent'),

  didInsertElement: function() {
  	this._map = L.map('map').setView([51.525, -0.09], 12);

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

    var events = this.get('controller.filteredContent');
    
    events.forEach(function(event) {
    	var marker = _self._toMarker(event);

		marker.addTo(_self._map)

		_self._eventMarkers[event.id] = marker;
    })
  },

  _cleanup: function() {
    var self = this;

   	$.each(this._eventMarkers, function(eventId, eventMarker) {
   		self._map.removeLayer(eventMarker);
   	})
  },

  _toMarker: function(event) {
  	var marker = L.marker([event.latitude, event.longitude]);
    var text = "<strong>" + event.title + "</strong><br/>" + event.address;
    marker.bindPopup(text).openPopup();

    return marker;
  },

  _panMapTo: function(eventId) {
    var marker = this._eventMarkers[eventId];
    console.log(marker);

    this._map.panTo(marker.getLatLng());
    this._map.setZoom(14);
  }
})