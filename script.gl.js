// please insert your own MapBox token in place of Jack's version
mapboxgl.accessToken = 'pk.eyJ1IjoiamFja2RvdWdoZXJ0eSIsImEiOiJxMi11TGlzIn0.ydUTGpMKcADi7fKPxy0GVA';

var map1 = new mapboxgl.Map({
  container: 'map1',
  center: [-72.67, 41.76], // Hartford
  zoom: 10,
  style: 'mapbox://styles/mapbox/light-v10'
});

var map2 = new mapboxgl.Map({
  container: 'map2',
  center: [-80.84, 35.22], // Charlotte NC
  zoom: 10,
  style: 'mapbox://styles/mapbox/light-v10',
  attributionControl: false,
});

var hoveredPolygonId1 = null;
var hoveredPolygonId2 = null;
var map1InfoFixed = false;
var map2InfoFixed = false;

// EdBuild elementary school districts 2017
var choroplethLayer = {
    id: 'E_2017',
    source: "src_unielem17",
    "source-layer": "SchoolDistricts_UE_17_data-0hffyk",
    type: "fill",
    paint: {
        "fill-color": {
            property: "pov2017",
            type: "interval",
            stops: [
                [0, "#dff3fe"],
                [.095, "#92DCF0"],
                [.195, "#49B4D6"],
                [.295, "#2586a5"],
                [.395, "#19596d"]
            ],
            "default": "rgba(0, 0, 0, 0)"
        },
        'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 0.8, 1 ]
    }
}

var bordersLayer = {
  id: 'E_2017lines',
  source: "src_unielem17",
  "source-layer": "SchoolDistricts_UE_17_data-0hffyk",
  type: "line",
  paint: {
      "line-color": ['case', ['boolean', ['feature-state', 'fixed'], false], 'red', 'white'],
      'line-width': ['case', ['boolean', ['feature-state', 'fixed'], false], 2, 1],
      'line-offset': ['case', ['boolean', ['feature-state', 'fixed'], false], 2, 0],
  }
}


map1.on('load', function() {

  map1.addSource('src_unielem17', {
    'type': 'vector',
    'url': 'mapbox://edbuild.7srzux4k'
  });

  // Add polygons (school districts)
  map1.addLayer( choroplethLayer, 'road-label');

  // Add white borders around polygons
  map1.addLayer( bordersLayer )

  map1.on('click', function() {
    map1InfoFixed = !map1InfoFixed;
    if (map1InfoFixed) {
      document.getElementById('info1').style.borderColor = 'red'

      map1.setFeatureState({
        source: 'src_unielem17',
        sourceLayer: 'SchoolDistricts_US_17_data-13ybxj',
        id: hoveredPolygonId1
      }, {fixed: true})

    } else {
      document.getElementById('info1').style.borderColor = 'white'

      map1.setFeatureState({
        source: 'src_unielem17',
        sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk',
        id: hoveredPolygonId1
      }, {fixed: false})
    }
  })

  map1.on('mousemove', function(e) {
    var data = map1.queryRenderedFeatures(e.point, {layers: ['E_2017'] })

    if (data[0] && !map1InfoFixed) {

      // Hover opacity change
      if (hoveredPolygonId1) {
        map1.setFeatureState(
          { source: "src_unielem17", sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk', id: hoveredPolygonId1 },
          { hover: false }
        );
      }
      hoveredPolygonId1 = data[0].id;
      map1.setFeatureState(
        { source: "src_unielem17", sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk', id: hoveredPolygonId1 },
        { hover: true }
      );

      // Update info window only if not fixed
      t = data[0].properties
      document.getElementById('info1').innerHTML = "<strong>" + t.NAME + ", " + t.Postal
        + "</strong><hr>Student Population: <b>" + t.StPp_l17
        + "</b><br>Student Population in Poverty: <b>" + t.StPv_17.toLocaleString()
        + "</b><br>Student Poverty Rate: <b>" + t.StPRL_17 + '</b>'

    } else if (!map1InfoFixed) {
      document.getElementById('info1').innerHTML = 'Hover over the school districts to see data.';
    }
  });
})



map2.on('load', function() {

  map2.addSource('src_unielem17', {
    'type': 'vector',
    'url': 'mapbox://edbuild.7srzux4k'
  });

  // Add polygons (school districts)
  map2.addLayer( choroplethLayer, 'road-label');

  // Add white borders around polygons
  map2.addLayer( bordersLayer )

  map2.on('click', function() {
    map2InfoFixed = !map2InfoFixed;
    if (map2InfoFixed) {
      document.getElementById('info2').style.borderColor = 'red'

      map2.setFeatureState({
        source: 'src_unielem17',
        sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk',
        id: hoveredPolygonId2
      }, {fixed: true})

    } else {
      document.getElementById('info2').style.borderColor = 'white'

      map2.setFeatureState({
        source: 'src_unielem17',
        sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk',
        id: hoveredPolygonId2
      }, {fixed: false})
    }
  })

  map2.on('mousemove', function(e) {
    var data = map2.queryRenderedFeatures(e.point, {layers: ['E_2017'] })

    if (data[0] && !map2InfoFixed) {

      // Hover opacity change
      if (hoveredPolygonId2) {
        map2.setFeatureState(
          { source: "src_unielem17", sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk', id: hoveredPolygonId2 },
          { hover: false }
        );
      }
      hoveredPolygonId2 = data[0].id;
      map2.setFeatureState(
        { source: "src_unielem17", sourceLayer: 'SchoolDistricts_UE_17_data-0hffyk', id: hoveredPolygonId2 },
        { hover: true }
      );

      // Update info window only if not fixed
      t = data[0].properties
      document.getElementById('info2').innerHTML = "<strong>" + t.NAME + ", " + t.Postal
        + "</strong><hr>Student Population: <b>" + t.StPp_l17
        + "</b><br>Student Population in Poverty: <b>" + t.StPv_17.toLocaleString()
        + "</b><br>Student Poverty Rate: <b>" + t.StPRL_17 + '</b>'

    } else if (!map2InfoFixed) {
      document.getElementById('info2').innerHTML = 'Hover over the school districts to see data.';
    }
  });
})

/**
 * Add the same controls to both maps
 **/
var maps = [map1, map2];

for (var i = 0; i < maps.length; i++) {
  // Disable zooming on scroll
  maps[i].scrollZoom.disable();

  // Add Mapbox geocoder
  maps[i].addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: i == 0 ? 'Hartford, CT' : 'Charlotte, NC'
    }), 'top-left'
  );

  // Add zoom control
  maps[i].addControl(new mapboxgl.NavigationControl({
    showCompass: false,
  }), 'top-left');

  // Add Scale control
  maps[i].addControl(new mapboxgl.ScaleControl({
    maxWidth: 120,
    unit: 'imperial'
  }))

}

// Attribution
map2.addControl(new mapboxgl.AttributionControl({
  compact: false,
  customAttribution: 'View <a href="https://github.com/OnTheLine/otl-compare-school-districts">code on GitHub</a> | Data by <a href="https://edbuild.org/">EdBuild</a> |'
}))

// Sync maps on zoom
map1.on('zoomend', function() { map2.setZoom(map1.getZoom()) });
map2.on('zoomend', function() { map1.setZoom(map2.getZoom()) });
