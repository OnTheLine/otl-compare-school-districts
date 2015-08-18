# otl-compare-school-districts
Compare school district boundaries and data in side-by-side Leaflet map with zoom sync, using EdBuild US school district layer in Mapbox

## Demo
http://jackdougherty.github.io/otl-compare-school-districts/

## Background
- Expands on EdBuild US school district map (http://maps.edbuild.org/DividingLines.html)
- Improves 2012 Google Maps v3 School District Comparison Viewer created with UConn MAGIC (http://magic.lib.uconn.edu/otl/dualzoom_schooldistricts.html), with code viewable on GitHub (https://github.com/JackDougherty/otl-magic/blob/master/dualzoom-schooldistricts.html)

## To Do
- Improve my simple zoom sync function in Leaflet, which is not as fast as the Google Maps version, and does not yet accept other types of zoom commands (such as two-finger gestures on trackpads)
```
map1.on('zoomend', function(e) {
        	zoomEnd = map1.getZoom(),
        	map2.setZoom(zoomEnd);
});
```

- add geocoder (type in any city + state for related school district)
- add hover data for school districts in each map
