# otl-compare-school-districts
Compare school district boundaries and data in side-by-side Leaflet map with zoom sync, using EdBuild US school district layer in Mapbox.

## Demo
http://jackdougherty.github.io/otl-compare-school-districts/

## Purpose
- Purpose of the tool is to show different school district boundaries at the same map scale. The startup compares Hartford CT (a narrowly-defined central city school district) versus Charlotte-Mecklenberg, NC (a county-wide school district). These differences are typical of the Northeast versus Southern and Western regions. See more in http://OnTheLine.trincoll.edu book.

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
- Still looking for way to add 2nd pre-defined geocoder input value ("Charlotte NC") without overriding the 1st input value ("Hartford CT")
- Option to focus (but not limit) Mapbox geocoder results to US with proximity feature

## Credits
- Thanks to Sara Hodges and others at http://EdBuild.org for creating the US school districts map and data layers, making them publicly available on MapBox, and encouraging collaboration
- Thanks Dan Swick at MapBox for suggesting an easy way to code geocoder input values
