function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        mapId: "c00361db5a21e08b",
        center: { lat: 59.43238210651094, lng: 24.760525055896057 },
        zoom: 18,
    });

    new google.maps.Marker({
    position: { lat: 59.43238210651094, lng: 24.760525055896057 },
    map,
    title: "AllePal!",
    animation: google.maps.Animation.DROP
    });
}

initMap();
