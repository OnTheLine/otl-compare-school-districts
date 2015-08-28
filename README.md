# otl-compare-school-districts
Compare any US school district boundaries and data, side-by-side in the same scale map, using this MapBox JS tool with zoom sync. Data provided by EdBuild.org.

## Demo
http://jackdougherty.github.io/otl-compare-school-districts/

## Companion text

Title: Search and Compare School Districts at the Same Scale

Caption: Search any U.S. location to compare two school districts, side-by-side, in the same map scale. Hover over districts to view student population and poverty data from the [US Census 2013 SAIPE](http://www.census.gov/did/www/saipe/). In the Northeast, many school districts are narrowly drawn along city and suburban boundaries, which concentrates student poverty, as shown in Hartford, Connecticut and its surrounding towns. By contrast, metropolitan and county-wide school districts are more common in Southern and Western states, as shown in Charlotte-Mecklenberg, North Carolina. Learn more about the poverty data on this map at http://edbuild.org/blog/2015/what-about-my-district. Learn more about Hartford schooling and housing in http://OnTheLine.trincoll.edu.

Note: The companion text will appear above and below an iframe version of map in http://OnTheLine.trincoll.edu. Another option is to create a free-standing version of the index.html file and insert divs for title, text, and credits.

## Credits

You are free to share and redistribute this map, and modify its open-source code, if you credit http://OnTheLine.trincoll.edu and http://EdBuild.org.

## Background
- Expands on 2015 EdBuild US school district map (http://maps.edbuild.org/DividingLines.html)
- Replaces 2012 Google Maps v3 School District Comparison Viewer created with UConn MAGIC (http://magic.lib.uconn.edu/otl/dualzoom_schooldistricts.html)

## To Do
- Create static legend with source link for poverty data
- Option to focus (but not limit) Mapbox geocoder results to US with proximity feature

## Credits
- Thanks to Sara Hodges and others at http://EdBuild.org for creating the US school districts map and poverty data layers, making them publicly available on MapBox, and encouraging collaboration.
- Thanks to Dan Swick at MapBox for great advice on the geocoder input values.

Feel free to suggest improvements for this map at http://github.com/jackdougherty/otl-compare-school-districts.
