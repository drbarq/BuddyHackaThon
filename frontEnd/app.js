console.log("Hello")
loadMap()


window.addEventListener('load', function(){
    // initMap()
    // initializeMapPano()
    initialize()
    addRandomBuddyListener()
    getBuddyBackEnd()

})

function loadMap() {
    let js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = `https://maps.googleapis.com/maps/api/js?key=${config.googleMaps}`;
        document.getElementsByTagName('head')[0].appendChild(js_file);
}

  function initialize() {
    var home = {lat: 39.758007, lng: -105.007339};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 14
    });
    var buddyInfo = "Hello"
    var marker = new google.maps.Marker({position: home, map: map});
    var infowindow = new google.maps.InfoWindow({content: buddyInfo});
    marker.addListener('click', function() {infowindow.open(map, marker)});

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: home,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
    map.setStreetView(panorama);
  }

  let randomBuddyButton 

  function addRandomBuddyListener() {
      randomBuddyButton = document.getElementsByClassName('randomBuddy')[0]
      addRandomBuddyEvent()
  }

  function addRandomBuddyEvent() {
    randomBuddyButton.addEventListener('click', function(e) {
        getRandomBuddy()
    })
  }

  function getRandomBuddy() {
    randomBuddyMapRender(buddiesBackEnd[getRandomArbitrary().toFixed(0)])
  }

  function initializeTwo() {
    var home = {lat: 35.699210, lng: 51.338187};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 14
    });
    var buddyInfo = "Buddy"
    var marker = new google.maps.Marker({position: home, map: map});
    var infowindow = new google.maps.InfoWindow({content: buddyInfo});
    marker.addListener('click', function() {infowindow.open(map, marker)});
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: home,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
    map.setStreetView(panorama);
  }


  function buddyLocation(lat, lon, buddy) {
    var home = {lat: lat, lng: lon};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 14
    });
    var buddyInfo = `Buddy here is: ${buddy}`
    var marker = new google.maps.Marker({position: home, map: map});
    var infowindow = new google.maps.InfoWindow({content: buddyInfo});
    marker.addListener('click', function() {infowindow.open(map, marker)});
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: home,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
    map.setStreetView(panorama);
  }

  function getRandomArbitrary() {
    return Math.random() * (10 - 1) + 1;
}

function randomBuddyMapRender(locationInfo) {
    buddyLocation(locationInfo["lat"], locationInfo["lon"], locationInfo["wordforbuddy"])
}

//   let backEnd = [
//     {id: 1, country: "Thailand", language: "Thai", wordforbuddy: "เพื่อน" , capitalcity: "Bangkok", lat:13.45, lon:100.35},
//     {id: 2, country: "Viet Nam", language: "Vietnamese", wordforbuddy: "bạn bè", capitalcity: "Hanoi", lat:21.05, lon:105.55},
//     {id: 3, country: "South Africa", language: "Sesotho", wordforbuddy: "motsoalle", capitalcity: "Pretoria", lat:25.44, lon:28.12},
//     {id: 4, country: "Somalia", language: "Somali", wordforbuddy: "jaallahay", capitalcity: "Mogadishu", lat:2.02, lon:45.25},
//     {id: 5, country: "Nigeria", language: "Yoruba", wordforbuddy: "ore", capitalcity: "Abuja", lat:09.05, lon: 7.32},
//     {id: 6, country: "Philippines", language: "Filipino", wordforbuddy: "pare", capitalcity: "Manila" , lat:14.40, lon:121.03},
//     {id: 7, country: "Indonesia", language: "Indonesian",wordforbuddy: "sobat", capitalcity: "Jakarta", lat:6.09, lon:106.49},
//     {id: 8, country: "Madagascar", language: "Malagasy", wordforbuddy: "akama", capitalcity: "Madagascar", lat:18.55, lon:47.31},
//     {id: 9, country: "Malaysia", language: "Malay", wordforbuddy: "teman", capitalcity: "Kuala Lumpur", lat:3.09, lon:101.41},
//     {id: 10, country: "New Zealand", language: "Maori", wordforbuddy: "hoa", capitalcity: "Wellington", lat:41.19, lon:174.46}
//   ]

let buddiesBackEnd 

  function getBuddyBackEnd () {
    let url = 'https://rocky-stream-81147.herokuapp.com/'

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(result) {
        buddiesBackEnd = result
    })
    .catch(function(err){
        console.error(err)
    })
  }

