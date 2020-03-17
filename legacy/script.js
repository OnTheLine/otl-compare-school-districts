// please insert your own MapBox token in place of Jack's version
L.mapbox.accessToken = 'pk.eyJ1IjoiamFja2RvdWdoZXJ0eSIsImEiOiJxMi11TGlzIn0.ydUTGpMKcADi7fKPxy0GVA';

//two instances of EdBuild US school district chloropleth map layer; see Alaska, Hawaii, Puerto Rico at view-source:http://viz.edbuild.org/maps/2016/dividing-lines-2014/
var distMap1 = L.mapbox.tileLayer('edbuild.SD_2014_Poverty');
var distMap2 = L.mapbox.tileLayer('edbuild.SD_2014_Poverty',{
  attribution: '&copy; <a href="http://www.edbuild.org">EdBuild, 2016; US Census, 2014.</a>'
});

var startZoom = 10; // initial zoom level for both maps

var map1 = L.map('map1', {
  layers: [distMap1],
  center: [41.76, -72.67], // Hartford
  zoom: startZoom,
  minZoom: 6,
  zoomControl: false, // add later to position below geocoder
  scrollWheelZoom: false
})
.addControl(L.mapbox.geocoderControl('mapbox.places', {
      autocomplete: true,
      keepOpen: true,
      placeholder: " "
}));

var inputForm1 = document.querySelector('#map1 .leaflet-control-mapbox-geocoder input');
inputForm1.placeholder='Hartford, CT';

new L.Control.Zoom({ position: 'topleft'}).addTo(map1);

var map2 = L.map('map2', {
    layers: [distMap2],
    center: [35.22, -80.84], // Charlotte NC
    zoom: startZoom,
    minZoom: 6,
    zoomControl: false,  // add later to map in top-right
    scrollWheelZoom: false
})
.addControl(L.mapbox.geocoderControl('mapbox.places', {
      autocomplete: true,
      keepOpen: true,
      placeholder: " "
}));

var inputForm2 = document.querySelector('#map2 .leaflet-control-mapbox-geocoder input');
inputForm2.placeholder='Charlotte, NC';

new L.Control.Zoom({ position: 'topleft'}).addTo(map2);

//two instances of EdBuild State Borders Base Layer
L.mapbox.tileLayer('edbuild.n8o0bffb').addTo(map1);
L.mapbox.tileLayer('edbuild.n8o0bffb').addTo(map2);

//two instances of EdBuild Tooltip Base Layers - Invisible
L.mapbox.tileLayer('edbuild.SD_2014_Tooltip').addTo(map1);
L.mapbox.tileLayer('edbuild.SD_2014_Tooltip').addTo(map2);
var muniGrid1 = L.mapbox.gridLayer('edbuild.SD_2014_Tooltip').addTo(map1);
var muniGrid2 = L.mapbox.gridLayer('edbuild.SD_2014_Tooltip').addTo(map2);
var muniControlA = L.mapbox.gridControl(muniGrid1, {follow: false}).addTo(map1);
var muniControlB = L.mapbox.gridControl(muniGrid2, {follow: false}).addTo(map2);

//two instances of Streetmap Overlay Base Layer
L.mapbox.tileLayer('edbuild.f4de156e').addTo(map1);
L.mapbox.tileLayer('edbuild.f4de156e').addTo(map2);

// customize source link to your GitHub repo on map1, blank prefix on map 2
map1.attributionControl.setPrefix('View  <a href="http://github.com/jackdougherty/otl-compare-school-districts" target="_blank">code on GitHub</a>, with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
map2.attributionControl.setPrefix(''); //intentionally blank to avoid redundancy

// add scales to both maps
L.control.scale().addTo(map1);
L.control.scale().addTo(map2);

// looking to optimize these sync functions, if possible, since not instantaneous
map1.on('zoomend', function(e) {
  zoomValue = map1.getZoom(),
  map2.setZoom(zoomValue);
});

map2.on('zoomend', function(e) {
  zoomValue = map2.getZoom(),
  map1.setZoom(zoomValue);
});
