# otl-compare-school-districts
Compare any US elementary school district boundaries and data, side-by-side in the same scale map, using this Mapbox GL JS tool with zoom sync. Map data layers by EdBuild.org.

## Demo
https://ontheline.github.io/otl-compare-school-districts/index-frame.html

## Embedded in [On The Line book](http://OnTheLine.trincoll.edu)

## Background
- Expands on 2017 EdBuild US school district map https://edbuild.org/content/dividing-lines/main
- Replaces 2016 EdBuild US school district map http://viz.edbuild.org/maps/2016/dividing-lines-2014/
- See also original 2015 EdBuild US school district map http://maps.edbuild.org/DividingLines.html
- Replaces 2012 Google Maps v3 School District Comparison Viewer created with UConn MAGIC http://magic.lib.uconn.edu/otl/dualzoom_schooldistricts.html

## Requires
- Mapbox access token (free use up to a limited number of views per month)
- EdBuild.org public Mapbox layers. EdBuild.org has always been planned as a 5-year project. Their scheduled closing date is June 30th 2020, but they plan to keep their map tile layers active. See also https://github.com/EdBuild

```
// EdBuild elementary school districts 2017
  var choroplethLayer = {
      id: 'E_2017',
      source: "src_unielem17",
      "source-layer": "SchoolDistricts_UE_17_data-0hffyk"
```

## Credits
- Thanks to Sara Hodges and others at https://github.com/EdBuild for creating the US school districts map and poverty data layers, making them publicly available on MapBox, and encouraging collaboration.
- Thanks to Dan Swick at MapBox for great advice on the geocoder input values.
- [ilyankou](https://github.com/ilyankou) for Mapbox GL JS code
