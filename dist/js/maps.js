var map;

google.maps.event.addDomListener(window, "load", function () {

  
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: new google.maps.LatLng(50.7643604, 25.39074140000002),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  
  var infoWindow = new google.maps.InfoWindow();

  
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }

  
    
    var image = {
        url: 'img/mark.png', // image is 512 x 512
        scaledSize : new google.maps.Size(200, 200),
    };

    var marker0 = createMarker({
    position: new google.maps.LatLng(50.7643604, 25.39074140000002),
    map: map,
    icon: image
  });
    

});