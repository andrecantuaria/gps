'use strict';

//HTML Elements
const mapDiv = document.getElementById('map');

//Token
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYW1hcmlhbnVuZXpyaXZlcmEiLCJhIjoiY2xxMWJiOXlhMDd1MzJtbzViNnZqd214dSJ9.Ots2kI7dKHtA2K0eNTp7aA';


//Creating a Map
let map = new mapboxgl.Map({
    container: mapDiv,
    style: "mapbox://styles/rosamarianunezrivera/clq3adbbb018601pgh9ajhaes",
    center: [0, 0],
    pitch: 40,
    zoom: 16
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
    color: "#278295",
    draggable: false,
})

function getLocation(position) {
    let { latitude, longitude } = position.coords;

    const actualPosition = [longitude, latitude];
   
    map.easeTo({
        center: actualPosition,
        pitch: 50,
        zoom: 16,
        duration: 1000, // Duración de la transición en milisegundos
    });
    
    // Add market to user's location
    marker.setLngLat(actualPosition).addTo(map);
}

function errorHandler(error) {
    console.log(error.message);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};


if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(getLocation, errorHandler, options);
} else {
    console.log('Geolocation API is not supported by your browser');
}





