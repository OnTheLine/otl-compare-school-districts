# otl-compare-school-districts
Compare school district boundaries and data in side-by-side Leaflet map with zoom sync

## Demo
http://jackdougherty.github.io/otl-compare-school-districts/

## Background
- Trying to improve on this 2012 Google Maps v3 School District Comparison Viewer created with UConn MAGIC http://magic.lib.uconn.edu/otl/dualzoom_schooldistricts.html
- See essential code at https://github.com/JackDougherty/otl-magic/blob/master/dualzoom-schooldistricts.html

## To Do
- Looking for ways to improve on my simple zoom sync function in Leaflet, which is not as fast as the Google Maps version, and does not yet accept other types of zoom commands (such as two-finger gestures on trackpads)
```
map1.on('zoomend', function(e) { 
        	zoomEnd = map1.getZoom(),
        	map2.setZoom(zoomEnd);
});
```
- looking to add US school districts as tile layer, similar to http://maps.edbuild.org/DividingLines.html
- replace limited drop-down menu with geocoder (type in any city + state for related school district)
