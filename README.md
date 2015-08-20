# otl-compare-school-districts
Compare school district boundaries and data in side-by-side Leaflet map with zoom sync, using EdBuild US school district layer in Mapbox

## Demo
http://jackdougherty.github.io/otl-compare-school-districts/

## Background
- Expands on EdBuild US school district map (http://maps.edbuild.org/DividingLines.html)
- Replaces 2012 Google Maps v3 School District Comparison Viewer created with UConn MAGIC (http://magic.lib.uconn.edu/otl/dualzoom_schooldistricts.html), with 2012 code viewable on GitHub (https://github.com/JackDougherty/otl-magic/blob/master/dualzoom-schooldistricts.html)

## To Do
- Ask EdBuild to approve, and ask if they wish to build their own wrapper with title and caption; mine will be embedded inside http://OnTheLine.trincoll.edu book
- Looking to optimize these sync functions, if possible, since not instantaneous
```
    map1.on('zoomend', function(e) {
      zoomValue = map1.getZoom(),
      map2.setZoom(zoomValue);
    });

    map2.on('zoomend', function(e) {
      zoomValue = map2.getZoom(),
      map1.setZoom(zoomValue);
    });
```
- See index-unsuccessful-test.html for alternative sync logic from MapBox example that did not work. Maybe I did not modify it correctly?
- It would be ideal to insert an initial value inside the geocoder box ("Hartford CT"), but I can't find a way to do this in Mapbox.
- Emailed Mapbox to ask if possible to limit geocoder results to United States
