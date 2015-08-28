// please insert your own MapBox token in place of Jack's version
L.mapbox.accessToken = 'pk.eyJ1IjoiamFja2RvdWdoZXJ0eSIsImEiOiJxMi11TGlzIn0.ydUTGpMKcADi7fKPxy0GVA';

//two instances of EdBuild US school district chloropleth map layer
var distMap1 = L.mapbox.tileLayer('edbuild.95702fa3',{
  attribution: '&copy; <a href="http://www.edbuild.org">EdBuild, 2015; US Census, 2013.</a>'
});
var distMap2 = L.mapbox.tileLayer('edbuild.95702fa3',{
  attribution: '&copy; <a href="http://www.edbuild.org">EdBuild, 2015; US Census, 2013.</a>'
});

var startZoom = 10; // initial zoom level for both maps

var map1 = L.map('map1', {
  layers: [distMap1],
  center: [41.76, -72.67], // Hartford
  zoom: startZoom,
  minZoom: 6,
  zoomControl: false, // add later to position below geocoder
  touchZoom: true, // option to turn off all of these UI settings
  scrollWheelZoom: true,
  doubleClickZoom: true,
  boxZoom: true
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
    touchZoom: true, // option to turn off all of these UI settings
    scrollWheelZoom: true,
    doubleClickZoom: true,
    boxZoom: true
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
L.mapbox.tileLayer('edbuild.5e7c9cb7').addTo(map1);
L.mapbox.tileLayer('edbuild.5e7c9cb7').addTo(map2);

//two instances of EdBuild Tooltip Base Layers - Invisible
L.mapbox.tileLayer('edbuild.b6476278').addTo(map1);
L.mapbox.tileLayer('edbuild.b6476278').addTo(map2);
var muniGrid1 = L.mapbox.gridLayer('edbuild.b6476278').addTo(map1);
var muniGrid2 = L.mapbox.gridLayer('edbuild.b6476278').addTo(map2);
var muniControlA = L.mapbox.gridControl(muniGrid1, {follow: false}).addTo(map1);
var muniControlB = L.mapbox.gridControl(muniGrid2, {follow: false}).addTo(map2);

//two instances of Streetmap Overlay Base Layer
L.mapbox.tileLayer('edbuild.f4de156e').addTo(map1);
L.mapbox.tileLayer('edbuild.f4de156e').addTo(map2);

// customize source link to your GitHub repo on map1, blank prefix on map 2
map1.attributionControl.setPrefix('View  <a href="http://github.com/jackdougherty/otl-compare school-districts">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
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

// feel free to modify or remove Jack's Google Analytics tracking code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-5488840-31', 'auto');
ga('send', 'pageview');
