const API_KEY = "0126d8ed99a9c54972231289d309cfbd";

let weatherICon = {
  "01": "sunny-outline",
  "02": "partly-sunny-outline",
  "03": "cloud-outline",
  "04": "cloud-outline",
  "09": "rainy-outline",
  10: "rainy-outline",
  11: "thunderstorm-outline",
  13: "snow-outline",
  50: "reorder-three-outline",
};

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather__icon");
      const city = document.querySelector("#weather__city");
      const temp = document.querySelector("#weather__temp");

      console.log(data);
      temp.innerText = `${Math.floor(data.main.temp)}°`;
      city.innerText = data.name;

      weather.innerHTML = `<ion-icon size="large" name="${
        weatherICon[data.weather[0].icon.substr(0, 2)]
      }"></ion-icon>`;
    });
}

function onGeoError() {
  alert("Can't find your location for weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
