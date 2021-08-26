
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
    .then((data) => {
        let components = data.results[0].components
        console.log(components)
        let townOrCityOrVillage = ""
        if(components.hasOwnProperty("city") === true) {
            townOrCityOrVillage = components.city
        } else if(components.town) {
            townOrCityOrVillage = componens.town 
        } else if(components.village) {
            townOrCityOrVillage = components.village
        }
        let locationDiv = document.getElementById("location")
        locationDiv.innerText = `${townOrCityOrVillage}. ${components.country}, ${components.continent}`
        console.log(townOrCityOrVillage)
    });
}

function fetchWeather(location) {
    fetch(`https://goweather.herokuapp.com/weather/${location}`)
    .then((response) => response.json())
    .then((data => {
        let today = [data.temperature, data.wind, data.description]
        console.log(today)
        displayWeather(today, data.forecast)
    })
}

function displayWeather(todaysWeather, mextThreeDays) {
    let todayDiv = document.getElementById("today")
    let threeDaysDiv = document.getElementById("threeDays")
    todayDiv.innerText = `Today, the temperature is ${todaysWeather[0]} with ${} winds and s{} kind of weather.`
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