var weather;
var weatherParse;
var temp = document.getElementById("temperature");
var tempData;
var mainDesc = document.getElementById("weather-description");
var weatherIcon = document.getElementById("weather-icon");
var windSpeed = document.getElementById("wind-speed");
var apiStart = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiFinish = "&units=imperial&appid=170f577e5c8e268b1ea9030a582c19d5";
var city = document.getElementById("city");
var cityInput;

//Listen for form Submit
document.getElementById("myForm").addEventListener("submit", loadWeather);
var locationInput = document.getElementById("location-input");

function loadWeather(e) {
  let xhr = new XMLHttpRequest();
  cityInput = locationInput.value;
  xhr.open("GET", apiStart + cityInput + apiFinish, true);

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      weather = this.responseText;
      weatherParse = JSON.parse(weather);
      displayWeather();
    }
  };

  xhr.send();
  document.getElementById("myForm").reset();
  e.preventDefault();
}

function displayWeather() {
  document.getElementById("no-weather").style.display = "none";
  document.getElementById("weather-display-wrapper").className =
    "p-2 card-title rounded bg-light";
  document.getElementById("weather-display").style.display = "inline";

  city.innerHTML = cityInput;
  temp.innerHTML = Math.round(weatherParse.main.temp) + "°F";
  mainDesc.innerHTML = weatherParse.weather[0].main;
  weatherIcon.src =
    "http://openweathermap.org/img/w/" + weatherParse.weather[0].icon + ".png";
  windSpeed.innerHTML =
    "Wind Speed: <br>" + Math.round(weatherParse.wind.speed) + " mph";
}

function initiateWeatherDisplay() {
  document.getElementById("weather-display").style.display = "none";
  document.getElementById("no-weather-wrap").style.display = "inline";
  document.getElementById("no-weather").style.display = "inline";
}
