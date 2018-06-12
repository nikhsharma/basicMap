const MapWrapper = function(element, coords, zoom) {
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(element)
  .addLayer(osmLayer)
  .setView(coords, zoom);
  this.map.on('click', function(event) {
    this.addMarker(event.latlng);
  }.bind(this))

}

MapWrapper.prototype.currentLocation = function() {
  // console.log(this.map.locate({setView : true}));
  this.map.locate({setView : true});
}

MapWrapper.prototype.flyMeTo = function(place) {
  this.map.flyTo(place[1], 10);
  L.marker(place[1]).addTo(this.map).bindPopup(`<a href='https://en.wikipedia.org/wiki/${place[0]}' target="_blank">more info about ${place[0]} </a>`).openPopup();
}


MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};
