console.log("Hello")


loadMap()


window.addEventListener('load', function(){
    initMap()


})



function startMap () {
    fetch(loadMap())
    
        .then(initMap())


}




function loadMap() {
    let js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = `https://maps.googleapis.com/maps/api/js?key=${config.googleMaps}`;
        document.getElementsByTagName('head')[0].appendChild(js_file);
}



// function loadMap(latitude, longitude) {
//     map = new google.maps.Map(document.getElementById('map'), {center: {lat: latitude, lng: longitude}, zoom: 16});
//     // marker of current location
//     let infowindow = new google.maps.InfoWindow({content: "Your location"});
//     let marker = new google.maps.Marker({position: new google.maps.LatLng(latitude, longitude), map: map, animation: google.maps.Animation.en});
//     marker.addListener('click', function() {infowindow.open(map, marker)});
// }



function initMap() {
    // The location of Uluru
    var uluru = {lat: 39.45, lng: -104.58};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 2, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }