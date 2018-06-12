const drawMap = function () {
  const mapDiv = document.getElementById('main-map');
  const glasgow = [55.8642, -4.2518];
  const chicago = ['chicago', [41.8781, -87.6298]];
  const zoomLevel = 12;
  const mainMap = new MapWrapper(mapDiv, glasgow, zoomLevel);

  const locationButton = document.querySelector('#location');
  locationButton.addEventListener('click', function() {
    mainMap.currentLocation();
  })

  const chicagoButton = document.querySelector('#chicago');
  chicagoButton.addEventListener('click', function() {
    mainMap.flyMeTo(chicago);
  });
}



window.addEventListener('load', drawMap);
