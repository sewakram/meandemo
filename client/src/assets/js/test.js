function mymethod(){
alert('sewak');

}

function initAutocomplete() {
  var places='';
  var hola = [];
  var mapdetails = [];
console.log('hola: ',hola);
  console.log('mapdetails: ', mapdetails);
  // if(places){
  //   var latlng = new google.maps.LatLng(places[0].geometry.location.lat(),places[0].geometry.location.lng());
  // }else{
    var latlng = new google.maps.LatLng(14.64,-90.51);
  // }
        
        map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 12
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });
  console.log('searchBox:', searchBox);
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          places = searchBox.getPlaces();
           hola.push(places[0].geometry.location.lat());
          mapdetails.push({ lat: places[0].geometry.location.lat()});
          mapdetails.push({ lng: places[0].geometry.location.lng()});
          $('#pac-input').attr('data-mapdata', JSON.stringify(mapdetails));//data('mapdata', mapdetails);
          console.log('places: ', places);
          console.log('places0: ', places[0]);          
          console.log(places[0].name);
          places[0].formatted_address;
          // if(places){
          //   $('#pac-input').val(places[0].name);
          //  }
          console.log(places[0].geometry.location.lat());
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

      function editcmap(mydata) {
        // alert('holla');
        var places='';
        // var hola = [];
        var mapdetails = [];
        
        // console.log('hola: ',hola);
        // var mydata = $('#edit_country').attr('data-mapdatae');//.data('mapdata');
        console.log('latlng', mydata);
        var latlng = new google.maps.LatLng(mydata[0].lati, mydata[0].longi);
        
          // var latlng = new google.maps.LatLng(14.64,-90.51);
        mapdetails.push({ lat: mydata[0].lati });
        mapdetails.push({ lng: mydata[0].longi });
        $('#edit_country').attr('data-mapdata', JSON.stringify(mapdetails));

        map = new google.maps.Map(document.getElementById('mapec'), {
        center: latlng,
        zoom: 8
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('edit_country');
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          places  = searchBox.getPlaces();
          console.log('placeslatlang:', places[0].geometry.location.lat());
          mapdetails.push({ lat: places[0].geometry.location.lat() });
          mapdetails.push({ lng: places[0].geometry.location.lng() });
          $('#edit_country').attr('data-mapdata', JSON.stringify(mapdetails));
          console.log('mapdetails2: ', mapdetails);
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

function statemap(cdata) {
      var places = '';
      var hola = [];
      var mapdetails = [];
      console.log('hola: ', hola);
  console.log('cdata:', cdata);
  console.log('clatlng:', cdata.lati,cdata.longi);
      // if(places){
      //   var latlng = new google.maps.LatLng(places[0].geometry.location.lat(),places[0].geometry.location.lng());
      // }else{
  var latlng = new google.maps.LatLng(cdata.lati,cdata.longi);
      // }

      map = new google.maps.Map(document.getElementById('maps'), {
        center: latlng,
        zoom: 12
      });

      // Create the search box and link it to the UI element.
        var input = document.getElementById('create-state');
      var searchBox = new google.maps.places.SearchBox(input);
      // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', function () {
        places = searchBox.getPlaces();
        hola.push(places[0].geometry.location.lat());
        mapdetails.push({ lat: places[0].geometry.location.lat() });
        mapdetails.push({ lng: places[0].geometry.location.lng() });
        $('#create-state').attr('data-mapdata', JSON.stringify(mapdetails));//data('mapdata', mapdetails);
        console.log('mapdetails: ', mapdetails);

        console.log('places: ', places);
        console.log('places0: ', places[0]);
        console.log(places[0].name);
        places[0].formatted_address;
        // if(places){
        //   $('#pac-input').val(places[0].name);
        //  }
        console.log(places[0].geometry.location.lat());
        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
      }

function editsmap(mydata) {
  // alert('holla');
  var places = '';
  // var hola = [];
  var mapdetails = [];

  // console.log('hola: ',hola);
  // var mydata = $('#edit_country').attr('data-mapdatae');//.data('mapdata');
  console.log('latlng', mydata);
  // console.log('cdata:', cdata);
  // console.log('clatlng:', cdata.lati, cdata.longi);
  var latlng = new google.maps.LatLng(mydata[0].lati, mydata[0].longi);
  mapdetails.push({ lat: mydata[0].lati });
  mapdetails.push({ lng: mydata[0].longi });
  $('#edit-state').attr('data-mapdata', JSON.stringify(mapdetails));
  // var latlng = new google.maps.LatLng(14.64,-90.51);

  map = new google.maps.Map(document.getElementById('mapes'), {
    center: latlng,
    zoom: 8
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('edit-state');
  var searchBox = new google.maps.places.SearchBox(input);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    places = searchBox.getPlaces();
    mapdetails.push({ lat: places[0].geometry.location.lat() });
    mapdetails.push({ lng: places[0].geometry.location.lng() });
    $('#edit-state').attr('data-mapdata', JSON.stringify(mapdetails));
    console.log('mapdetails2: ', mapdetails);
    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}


function regionmap(statedata) {
        var polygonArray = [];
        // alert('holla');
        // console.log('statedata', statedata);
        // console.log('lat: ', statedata.lati, 'lng: ', statedata.longi);
        var latlng = new google.maps.LatLng(statedata.lati, statedata.longi);
        map = new google.maps.Map(document.getElementById('mapre'), {
        center: latlng,
        zoom: 12
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('create_region');
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        // map.addListener('bounds_changed', function() {
        //   searchBox.setBounds(map.getBounds());
        // });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
  
  $("#create_region").change(function () {
          // var places = searchBox.getPlaces();
          $('#create_region').attr('data-countrydata', JSON.stringify(statedata.cid));
          // if (places.length == 0) {
            // return;
          // }

          // Clear out the old markers.
          // markers.forEach(function(marker) {
          //   marker.setMap(null);
          // });
          // markers = [];

          // // For each place, get the icon, name and location.
          // var bounds = new google.maps.LatLngBounds();
          // places.forEach(function(place) {
          //   if (!place.geometry) {
          //     console.log("Returned place contains no geometry");
          //     return;
          //   }
          //   var icon = {
          //     url: place.icon,
          //     size: new google.maps.Size(71, 71),
          //     origin: new google.maps.Point(0, 0),
          //     anchor: new google.maps.Point(17, 34),
          //     scaledSize: new google.maps.Size(25, 25)
          //   };

          //   // Create a marker for each place.
          //   markers.push(new google.maps.Marker({
          //     map: map,
          //     icon: icon,
          //     title: place.name,
          //     position: place.geometry.location
          //   }));

          //   if (place.geometry.viewport) {
          //     // Only geocodes have viewport.
          //     bounds.union(place.geometry.viewport);
          //   } else {
          //     bounds.extend(place.geometry.location);
          //   }
          // });
          // map.fitBounds(bounds);
        });


        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polygon']
          },
          markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples'},
          // circleOptions: {
          //   fillColor: 'rgb(230, 134, 134)',
          //   fillOpacity: 1,
          //   strokeWeight: 3,
          //   clickable: false,
          //   editable: true,
          //   zIndex: 1
          // }
          polygonOptions: {
          strokeColor:"#e51d1d",
          strokeOpacity:0.6,
          fillColor: "#fcc7c7",
          fillOpacity: 1,
          strokeWeight: 3,
          }
        });
        
        drawingManager.setMap(map);
        //////////////////////
        google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
          // document.getElementById('info').innerHTML += "<b>polygon points:<b>" + "<br><br>";
          for (var i = 0; i < polygon.getPath().getLength(); i++) {
            // document.getElementById('info').innerHTML += "" + polygon.getPath().getAt(i).toUrlValue(6) + ";";
             
            // console.log('polyin', polygon.getPath().getAt(i).lat());
            var myarray = { lat: polygon.getPath().getAt(i).lat(), lng: polygon.getPath().getAt(i).lng()};
            // console.log('myarray', myarray);
            polygonArray.push(myarray);
          }
          $('#create_region').attr('data-mapdata', JSON.stringify(polygonArray)); 

        });
        console.log('polyout',polygonArray);
        
        ////////////////////
}

function editrmap(statedata,mydata){
  console.log('mydata', mydata);
  console.log('statedata:', statedata);
       var polygonArray = [];
        // alert('holla');
       var latlng = new google.maps.LatLng(statedata.lati, statedata.longi);
        map = new google.maps.Map(document.getElementById('mapredit'), {
        center: latlng,
        zoom: 12
        });
        $('#edit_region').attr('data-mydata', JSON.stringify(mydata));
        $('#edit_region').attr('data-mapdata', JSON.stringify(mydata[0].polydata));
        // Create the search box and link it to the UI element.
        var input = document.getElementById('edit_region');
        // var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        // map.addListener('bounds_changed', function() {
        //   searchBox.setBounds(map.getBounds());
        // });

        var markers = [];
        // Define the LatLng coordinates for the polygon's path.
  console.log("mydata[0]", mydata[0]);
  var polyarray = JSON.parse(mydata[0].polydata);
  // [
  //   { "lat": 20.557143485414162, "lng": 78.81602262606737 },
  //   { "lat": 20.56485834982168, "lng": 78.8536164676201 }, 
  //   { "lat": 20.550071184123322, "lng": 78.8730142032158 }, 
  //   { "lat": 20.532710511790434, "lng": 78.83936857333299 }
  // ];
       

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: polyarray,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
       bermudaTriangle.setMap(map);

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
     $("#edit_region").change(function () {
          // var places = searchBox.getPlaces();
      $('#edit_region').attr('data-mydata', JSON.stringify(mydata));
      
          // if (places.length == 0) {
            // return;
          // }

          // Clear out the old markers.
          // markers.forEach(function(marker) {
            // marker.setMap(null);
          // });
          markers = [];
          
          // For each place, get the icon, name and location.
          // var bounds = new google.maps.LatLngBounds();
          // places.forEach(function(place) {
            // if (!place.geometry) {
              // console.log("Returned place contains no geometry");
              // return;
            // }
            // var icon = {
            //   url: place.icon,
            //   size: new google.maps.Size(71, 71),
            //   origin: new google.maps.Point(0, 0),
            //   anchor: new google.maps.Point(17, 34),
            //   scaledSize: new google.maps.Size(25, 25)
            // };

            // Create a marker for each place.
            // markers.push(new google.maps.Marker({
            //   map: map,
            //   icon: icon,
            //   title: place.name,
            //   position: place.geometry.location
            // }));

          //   if (place.geometry.viewport) {
          //     // Only geocodes have viewport.
          //     bounds.union(place.geometry.viewport);
          //   } else {
          //     bounds.extend(place.geometry.location);
          //   }
          // });
          // map.fitBounds(bounds);
          drawingManager.setMap(map);
        });


        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polygon']
          },
          markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples' },
          circleOptions: {
            fillColor: 'rgb(230, 134, 134)',
            fillOpacity: 1,
            strokeWeight: 3,
            clickable: false,
            editable: true,
            zIndex: 1
          }
        });

        
        //////////////////////
        google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
          // document.getElementById('info').innerHTML += "<b>polygon points:<b>" + "<br><br>";
          for (var i = 0; i < polygon.getPath().getLength(); i++) {
            // document.getElementById('info').innerHTML += "" + polygon.getPath().getAt(i).toUrlValue(6) + ";";

            // console.log('polyin', polygon.getPath().getAt(i).lat());
            var myarray = { lat: polygon.getPath().getAt(i).lat(), lng: polygon.getPath().getAt(i).lng() };
            // console.log('myarray', myarray);
            polygonArray.push(myarray);
          }
          $('#edit_region').attr('data-mapdata', JSON.stringify(polygonArray));
          

        });
        console.log('polyout', polygonArray);

              ////////////////////
          // if (drawingManager){
          //   console.log('drawingManager',drawingManager);
          //   // 
          // }else{
          //   console.log('bermudaTriangle', bermudaTriangle);
          //   bermudaTriangle.setMap(map);
          // }
        
      }
      
function routemap(statedata, rlatlng) {
      var polygonArray = [];
      // alert('holla');
      console.log('statedata', statedata);
      // console.log('lat: ', statedata[0].lati, 'lng: ', statedata[0].longi);
  console.log('rlatlng', rlatlng);
  console.log('lat: ', rlatlng.lat, 'lng: ', rlatlng.lng);
  var latlng = new google.maps.LatLng(rlatlng.lat, rlatlng.lng);
        map = new google.maps.Map(document.getElementById('mapro'), {
        center: latlng,
        zoom: 12
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('create_route');
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();
          $('#create_route').attr('data-countrydata', JSON.stringify(statedata));
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });


        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polyline']
          },
          markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples'},
          // circleOptions: {
          //   fillColor: 'rgb(230, 134, 134)',
          //   fillOpacity: 1,
          //   strokeWeight: 3,
          //   clickable: false,
          //   editable: true,
          //   zIndex: 1
          // }
          polylineOptions: {
          strokeColor:"#e51d1d",
              strokeOpacity:0.6,
              strokeWeight: 3
          }
        });
        drawingManager.setMap(map);
        //////////////////////
  google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {
          // document.getElementById('info').innerHTML += "<b>polygon points:<b>" + "<br><br>";
    for (var i = 0; i < polyline.getPath().getLength(); i++) {
            // document.getElementById('info').innerHTML += "" + polygon.getPath().getAt(i).toUrlValue(6) + ";";

      console.log('polyin', polyline.getPath().getAt(i).lat());
      var myarray = { lat: polyline.getPath().getAt(i).lat(), lng: polyline.getPath().getAt(i).lng() };
            // console.log('myarray', myarray);
            polygonArray.push(myarray);
          }
          console.log('polygonArray', polygonArray);
    $('#create_route').attr('data-mapdata', JSON.stringify(polygonArray));

        });
        console.log('polyout', polygonArray);

              ////////////////////
     
}
function editro(statedata, mydata,rlatlng) {
        var polygonArray = [];
        console.log('statedatamap',statedata);
        console.log('rlatlng', rlatlng);
        console.log('lat: ', rlatlng.lat, 'lng: ', rlatlng.lng);
        var latlng = new google.maps.LatLng(rlatlng.lat, rlatlng.lng);
        // var latlng = new google.maps.LatLng(statedata[0].lati, statedata[0].longi);
        map = new google.maps.Map(document.getElementById('maproedit'), {
        center: latlng,
        zoom: 12
        });
  $('#edit_route').attr('data-mydata', JSON.stringify(mydata));
  $('#edit_route').attr('data-mapdata', JSON.stringify(mydata[0].polydata));
        // Create the search box and link it to the UI element.
        var input = document.getElementById('edit_route');
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Define the LatLng coordinates for the polygon's path.
        console.log("mydata[0]", mydata[0]);
        var polyarray = JSON.parse(mydata[0].polydata);
        // [
        //   { "lat": 20.557143485414162, "lng": 78.81602262606737 },
        //   { "lat": 20.56485834982168, "lng": 78.8536164676201 }, 
        //   { "lat": 20.550071184123322, "lng": 78.8730142032158 }, 
        //   { "lat": 20.532710511790434, "lng": 78.83936857333299 }
        // ];


        // Construct the polygon.
        var flightPath = new google.maps.Polyline({
          path: polyarray,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
        // bermudaTriangle.setMap(map);

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();
          $('#edit_route').attr('data-mydata', JSON.stringify(mydata));
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
          drawingManager.setMap(map);
        });


  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ['polyline']
    },
    markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples' },
    // circleOptions: {
    //   fillColor: 'rgb(230, 134, 134)',
    //   fillOpacity: 1,
    //   strokeWeight: 3,
    //   clickable: false,
    //   editable: true,
    //   zIndex: 1
    // }
    polylineOptions: {
    strokeColor:"#e51d1d",
    strokeOpacity:0.6,
    strokeWeight: 3
    }
  });
  
  //////////////////////
  google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {
    // document.getElementById('info').innerHTML += "<b>polygon points:<b>" + "<br><br>";
    for (var i = 0; i < polyline.getPath().getLength(); i++) {
      // document.getElementById('info').innerHTML += "" + polygon.getPath().getAt(i).toUrlValue(6) + ";";

      console.log('polyin', polyline.getPath().getAt(i).lat());
      var myarray = { lat: polyline.getPath().getAt(i).lat(), lng: polyline.getPath().getAt(i).lng() };
      // console.log('myarray', myarray);
      polygonArray.push(myarray);
    }
    console.log('polygonArray', polygonArray);
    $('#edit_route').attr('data-mapdata', JSON.stringify(polygonArray));

  });
  console.log('polyout', polygonArray);

              ////////////////////
       
     
  }

function blockmap(statedata,rolatlng) {
        
        var polygonArray = [];
        // alert('holla');
        console.log('statedata', statedata);
        // console.log('lat: ', statedata[0].lati, 'lng: ', statedata[0].longi);
        console.log('rolatlng', rolatlng);
        console.log('lat: ', rolatlng.lat, 'lng: ', rolatlng.lng);
        var latlng = new google.maps.LatLng(rolatlng.lat, rolatlng.lng);
        // var latlng = new google.maps.LatLng(statedata[0].lati, statedata[0].longi);
        map = new google.maps.Map(document.getElementById('mapb'), {
        center: latlng,
        zoom: 12
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('create_block');
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();
          $('#create_block').attr('data-countrydata', JSON.stringify(statedata));
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polyline']
          },
          markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples' },
          // circleOptions: {
          //   fillColor: 'rgb(230, 134, 134)',
          //   fillOpacity: 1,
          //   strokeWeight: 3,
          //   clickable: false,
          //   editable: true,
          //   zIndex: 1
          // }

          polylineOptions: {
          strokeColor:"#e51d1d",
              strokeOpacity:0.6,
              strokeWeight: 3
          }
        });
        drawingManager.setMap(map);
        //////////////////////
        google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {
          // document.getElementById('info').innerHTML += "<b>polygon points:<b>" + "<br><br>";
          for (var i = 0; i < polyline.getPath().getLength(); i++) {
            // document.getElementById('info').innerHTML += "" + polygon.getPath().getAt(i).toUrlValue(6) + ";";

            console.log('polyin', polyline.getPath().getAt(i).lat());
            var myarray = { lat: polyline.getPath().getAt(i).lat(), lng: polyline.getPath().getAt(i).lng() };
            // console.log('myarray', myarray);
            polygonArray.push(myarray);
          }
          console.log('polygonArray', polygonArray);
          $('#create_block').attr('data-mapdata', JSON.stringify(polygonArray));

        });
        console.log('polyout', polygonArray);

                    ////////////////////
     
  }

function editblock(statedata, mydata, rolatlng) {
  var polygonArray = [];
  console.log('statedatamap', statedata);
  console.log('rolatlng', rolatlng);
  console.log('lat: ', rolatlng.lat, 'lng: ', rolatlng.lng);
  var latlng = new google.maps.LatLng(rolatlng.lat, rolatlng.lng);
  // var latlng = new google.maps.LatLng(statedata[0].lati, statedata[0].longi);
  map = new google.maps.Map(document.getElementById('mapbedit'), {
    center: latlng,
    zoom: 12
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('edit_block');
  var searchBox = new google.maps.places.SearchBox(input);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Define the LatLng coordinates for the polygon's path.
  console.log("mydata[0]", mydata[0]);
  var polyarray = JSON.parse(mydata[0].polydata);
  // [
  //   { "lat": 20.557143485414162, "lng": 78.81602262606737 },
  //   { "lat": 20.56485834982168, "lng": 78.8536164676201 }, 
  //   { "lat": 20.550071184123322, "lng": 78.8730142032158 }, 
  //   { "lat": 20.532710511790434, "lng": 78.83936857333299 }
  // ];


  // Construct the polygon.
  var flightPath = new google.maps.Polyline({
    path: polyarray,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();
    $('#edit_block').attr('data-mydata', JSON.stringify(mydata));
    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
    drawingManager.setMap(map);
  });


  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ['polyline']
    },
    markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples' },
    // circleOptions: {
    //   fillColor: 'rgb(230, 134, 134)',
    //   fillOpacity: 1,
    //   strokeWeight: 3,
    //   clickable: false,
    //   editable: true,
    //   zIndex: 1
    // }
      polylineOptions: {
      strokeColor:"#e51d1d",
      strokeOpacity:0.6,
      strokeWeight: 3
      }
  });

  //////////////////////
  google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {
    // document.getElementById('info').innerHTML += "<b>polygon points:<b>" + "<br><br>";
    for (var i = 0; i < polyline.getPath().getLength(); i++) {
      // document.getElementById('info').innerHTML += "" + polygon.getPath().getAt(i).toUrlValue(6) + ";";

      console.log('polyin', polyline.getPath().getAt(i).lat());
      var myarray = { lat: polyline.getPath().getAt(i).lat(), lng: polyline.getPath().getAt(i).lng() };
      // console.log('myarray', myarray);
      polygonArray.push(myarray);
    }
    console.log('polygonArray', polygonArray);
    $('#edit_block').attr('data-mapdata', JSON.stringify(polygonArray));

  });
  console.log('polyout', polygonArray);

              ////////////////////

}


//////////////////////////////dragablemap of monument
var geocoder = new google.maps.Geocoder();

function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  }, function (responses) {
    if (responses && responses.length > 0) {
      updateMarkerAddress(responses[0].formatted_address);
    } else {
      updateMarkerAddress('Cannot determine address at this location.');
    }
  });
}

function updateMarkerStatus(str) {
  // document.getElementById('markerStatus').innerHTML = str;
  console.log(str);
}

function updateMarkerPosition(latLng) {
  // document.getElementById('info').innerHTML = [
  //   latLng.lat(),
  //   latLng.lng()
  // ].join(', ');
  var maylat = latLng.lat();
  console.log('maylat', maylat);
  $("#lat").val(maylat);
  // $('#lat').attr('data-lat', parseInt(maylat) );
  var maylng = latLng.lng();
  console.log('maylng', maylng);
  $("#lng").val(maylng);
  // $('#lng').attr('data-lng', parseInt(maylng));
  // $("#lat").trigger('change');
  // $("#lng").trigger('change');


}

function updateMarkerAddress(str) {
  // document.getElementById('address').innerHTML = str;
  $("#location").val(str);
}

function monumentnew(lat,lng) {
  var latLng = new google.maps.LatLng(lat, lng);
  var map = new google.maps.Map(document.getElementById('mapm'), {
    zoom: 8,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#0049ff"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"},{"saturation":"-3"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#ff8200"},{"saturation":"0"},{"lightness":"40"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":100},{"visibility":"off"},{"hue":"#ff0000"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#ff8200"},{"saturation":"-100"},{"visibility":"on"},{"lightness":"85"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffce00"},{"saturation":"100"},{"lightness":"47"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#008eff"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ffce00"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#008eff"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#007fff"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#007fff"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#007fff"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
  });
  var marker = new google.maps.Marker({
    position: latLng,
    // title: 'Point A',
    map: map,
    draggable: true
  });

  // Update current position info.
  updateMarkerPosition(latLng);
  geocodePosition(latLng);

  // Add dragging event listeners.
  google.maps.event.addListener(marker, 'dragstart', function () {
    updateMarkerAddress('Dragging...');
  });

  google.maps.event.addListener(marker, 'drag', function () {
    updateMarkerStatus('Dragging...');
    updateMarkerPosition(marker.getPosition());
  });

  google.maps.event.addListener(marker, 'dragend', function () {
    updateMarkerStatus('Drag ended');
    geocodePosition(marker.getPosition());
    $('#lat').trigger('change');
  });
}

// Onload handler to fire off the app.
// google.maps.event.addDomListener(window, 'load', monumentnew);
  // //////////////////////////

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    console.log('searchlat', parseInt(myArray[i].lat));
    if (parseInt(myArray[i].lat) === nameKey) {
      return myArray[i];
    }
  }
}

function searchlng(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    console.log('searchlng', parseInt(myArray[i].lng));
    if (parseInt(myArray[i].lng) === nameKey) {
      return myArray[i];
    }
  }
}

var CHAR_DEG = "\u00B0",
  CHAR_MIN = "\u0027",
  CHAR_SEC = "\u0022",
  CHAR_SEP = "\u0020";
function deg2declng(value) {
  console.log('value', value);
  var matches = decode(value);
  console.log('matches', matches);
  if (!matches) {
    return NaN;
  }

  var deg = parseFloat(matches[1]);
  var min = parseFloat(matches[2]);
  var sec = parseFloat(matches[3]);

  if (isNaN(deg) || isNaN(min) || isNaN(sec)) {
    return NaN;
  }

  return deg + (min / 60.0) + (sec / 3600);
}

function deg2declat(value) {
  console.log('value', value);
  var matches = decode(value);
  console.log('matches', matches);
  if (!matches) {
    return NaN;
  }

  var deg = parseFloat(matches[1]);
  var min = parseFloat(matches[2]);
  var sec = parseFloat(matches[3]);

  if (isNaN(deg) || isNaN(min) || isNaN(sec)) {
    return NaN;
  }

  return deg + (min / 60.0) + (sec / 3600);
}

function decode(value) {
  var pattern = "";

  // deg
  pattern += "(-?\\d+)";
  pattern += this.CHAR_DEG;
  pattern += "\\s*";

  // min
  pattern += "(\\d+)";
  pattern += this.CHAR_MIN;
  pattern += "\\s*";

  // sec
  pattern += "(\\d+(?:\\.\\d+)?)";
  pattern += this.CHAR_SEC;

  return value.match(new RegExp(pattern));
}

function mycanvas() {
  //Canvas
  console.log('mycanvas');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  //Variables
  var canvasx = $(canvas).offset().left;
  var canvasy = $(canvas).offset().top;
  var last_mousex = last_mousey = 0;
  var mousex = mousey = 0;
  var mousedown = false;

  //Mousedown
  $(canvas).on('mousedown', function (e) {
    last_mousex = parseInt(e.clientX - canvasx);
    last_mousey = parseInt(e.clientY - canvasy);
    mousedown = true;
  });

  //Mouseup
  $(canvas).on('mouseup', function (e) {
    mousedown = false;
  });

  //Mousemove
  $(canvas).on('mousemove', function (e) {
    mousex = parseInt(e.clientX - canvasx);
    mousey = parseInt(e.clientY - canvasy);
    if (mousedown) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
      ctx.beginPath();
      var width = mousex - last_mousex;
      var height = mousey - last_mousey;
      ctx.rect(last_mousex, last_mousey, width, height);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 10;
      ctx.stroke();
    }
    //Output
    // $('#output').html('current: ' + mousex + ', ' + mousey + '<br/>last: ' + last_mousex + ', ' + last_mousey + '<br/>mousedown: ' + mousedown);
  });

}