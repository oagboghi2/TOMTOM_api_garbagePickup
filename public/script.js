// Define your product name and version
tomtom.setProductInfo('dynamic Trash pickup', 'ver.0.0.1');
//Setting TomTom keys
tomtom.routingKey('OXUtvZ4XAkGFx3IKRYBH3xiiCL00LUgZ');
tomtom.searchKey('OXUtvZ4XAkGFx3IKRYBH3xiiCL00LUgZ');
// Creating map
var map = tomtom.L.map('map', {
    key: 'OXUtvZ4XAkGFx3IKRYBH3xiiCL00LUgZ',
    source: 'vector',
    basePath: 'http://localhost:3000/'
});
map.zoomControl.setPosition('topright');
var unitSelector = tomtom.unitSelector.getHtmlElement(tomtom.globalUnitService);
var languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'search');
var unitRow = document.createElement('div');
var unitLabel = document.createElement('label');
unitLabel.innerHTML = 'Unit of measurement';
unitLabel.appendChild(unitSelector);
unitRow.appendChild(unitLabel);
unitRow.className = 'input-container';
var langRow = document.createElement('div');
var langLabel = document.createElement('label');
langLabel.innerHTML = 'Search language';
langLabel.appendChild(languageSelector);
langRow.appendChild(langLabel);
langRow.className = 'input-container';
tomtom.controlPanel({
    position: 'bottomright',
    title: 'Settings',
    collapsed: true
})
    .addTo(map)
    .addContent(unitRow)
    .addContent(langRow);
// Relocating zoom buttons
map.zoomControl.setPosition('bottomleft');
// Adding the route widget
var routeOnMapView = tomtom.routeOnMap({
    // Options for the route start marker
    startMarker: {
        icon: tomtom.L.icon({
            iconUrl: 'img/start.png',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    },
    // Options for the route end marker
    endMarker: {
        icon: tomtom.L.icon({
            iconUrl: 'img/end.png',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }
}).addTo(map);
// Creating route inputs widget
var routeInputsInstance = tomtom.routeInputs({location: false})
    .addTo(map);
// Connecting the route inputs widget with the route widget
routeInputsInstance.on(routeInputsInstance.Events.LocationsFound, function(eventObject) {
    routeOnMapView.draw(eventObject.points);
});
routeInputsInstance.on(routeInputsInstance.Events.LocationsCleared, function(eventObject) {
    routeOnMapView.draw(eventObject.points);
});
