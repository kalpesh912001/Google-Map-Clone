mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FscGVzaDIwMDEiLCJhIjoiY2w4emlmMG4wMHFzbjN2cXYwNDhlaDFkZiJ9.nH_Qs155H0fgvY9j80piEA";
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    setUpMap([position.coords.longitude, position.coords.latitude]);
    console.log(position);
}
function errorLocation() {
    setUpMap([28.6448, 77.216721]);
}

function setUpMap(center) {
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/satellite-v9",  //streets-v11
        center: center,
        zoom: 4,
    });
    let position = new mapboxgl.LngLat(19.0748, 72.8856);
    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}
