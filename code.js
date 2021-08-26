
let fallbackLocation = {
    latitude: 17.5046,
    longitutude: -88.1962
};



function fetechCity(coords) {
    const key = '45871dc4479d4bb785eb9c7615fcadc8'
    let lat = coords.latitude;
    let lon = coords.longitutude;
    
    const request = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${key}`

  //  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${key}`)
    fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

navigator.geolocation.getCurrentPosition(
    geoLocationSuccess, 
    geoLocationError
);

function geoLocationSuccess(position) {
    console.log(position.coords)
    fetechCity(position.coords);
}

function geoLocationError(error) {
    console.error(error);
    fetchCity(fallbackLocation);
}