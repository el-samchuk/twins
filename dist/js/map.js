var map;
var egglabs = new google.maps.LatLng(50.7643604, 25.39074140000002);
var mapCoordinates = new google.maps.LatLng(50.7643604, 25.39074140000002);


var markers = [];
var image = new google.maps.MarkerImage(
    'mark.png',
    new google.maps.Size(268,294),
    new google.maps.Point(0,0),
    new google.maps.Point(50,50)
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false
      }));
      
}

function initialize() {
  var mapOptions = {
	backgroundColor: "#ffffff",
    zoom: 14,
	disableDefaultUI: true,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	styles: [
			  {
			    "featureType": "landscape.natural",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#OOO" }
			    ]
			  },
			  {
				    "featureType": "landscape.man_made",
				    "stylers": [
				      { "color": "#ooo" },
				      { "visibility": "off" }
				    ]
			  },
			  {
				    "featureType": "water",
				    "stylers": [
				       { "color": "#80C8E5" },
				      { "saturation": 0 }
				    ]
			  },
			  {
				    "featureType": "road.arterial",
				    "elementType": "geometry",
				    "stylers": [
				      { "color": "#999999" }
				    ]
			  }
			 ,{
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      { "visibility": "off" }
				    ]
			  }
				,{
				    "elementType": "labels.text",
				    "stylers": [
				      { "color": "#333333" }
				    ]
				  }
				
				,{
				    "featureType": "road.local",
				    "stylers": [
				      { "color": "#dedede" }
				    ]
				  }
				,{
				    "featureType": "road.local",
				    "elementType": "labels.text",
				    "stylers": [
				      { "color": "#666666" }
				    ]
				  }
				,{
				    "featureType": "transit.station.bus",
				    "stylers": [
				      { "saturation": -57 }
				    ]
				  }
				,{
				    "featureType": "road.highway",
				    "elementType": "labels.icon",
				    "stylers": [
				      { "visibility": "off" }
				    ]
				  },{
				    "featureType": "poi",
				    "stylers": [
				      { "visibility": "off" }
				    ]
				  }
			
			]
    
  };
	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	addMarker();
 
	}
	google.maps.event.addDomListener(window, 'load', initialize);
    