/**
 * Created by joehyde on 5/14/16.
 */
// API key AIzaSyDHHqox2W_nOU19s4qvdO9rNCJpOX4vj4k
//<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
function initMap() {
var styles = [{
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [{"hue": "#2c2e33"}, {"saturation": 7}, {"lightness": 19}, {"visibility": "on"}]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 80}, {"visibility": "simplified"}]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "off"}]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": 31}, {"visibility": "simplified"}]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": 31}, {"visibility": "on"}]
}, {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": -2}, {"visibility": "simplified"}]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{"hue": "#e9ebed"}, {"saturation": -90}, {"lightness": -8}, {"visibility": "simplified"}]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{"hue": "#e9ebed"}, {"saturation": 10}, {"lightness": 40}, {"visibility": "on"}]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{"hue": "#e9ebed"}, {"saturation": -78}, {"lightness": 67}, {"visibility": "simplified"}]
}];
    var myLatLng = {lat: 31.463802, lng: -100.437768};
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        scrollwheel: false,
        zoom: 17,
        center: new google.maps.LatLng(myLatLng),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h4 id="firstHeading" class="firstHeading">Blaine\'s Pub</h4>'+
        '<div id="bodyContent">'+
        '<p>10 W. Harris St.<br />' +
        'San Angelo, Texas 76903<br />' +
            '(325) 653-7074<br />' +
            'Email: <a href="mailto:blaines_pub@yahoo.com">blaines_pub@yahoo.com</a>' +
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Blaine's Pub",
    });
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
