var weather;
var weatherParse;
var temp = document.getElementById("temperature");
var tempData;
var mainDesc = document.getElementById("weather-description");
var weatherIcon = document.getElementById("weather-icon");
var windSpeed = document.getElementById("wind-speed");
var apiStart = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiFinish = "&units=imperial&appid=170f577e5c8e268b1ea9030a582c19d5";

//Listen for form Submit
document.getElementById("myForm").addEventListener("submit", loadWeather);
var locationInput = document.getElementById("location-input");

function loadWeather(e) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", apiStart + locationInput.value + apiFinish, true);

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
  temp.innerHTML = Math.round(weatherParse.main.temp) + "°F";
  mainDesc.innerHTML = weatherParse.weather[0].main;
  weatherIcon.src =
    "http://openweathermap.org/img/w/" + weatherParse.weather[0].icon + ".png";
  windSpeed.innerHTML = "Wind Speed: " + weatherParse.wind.speed + "MPH";
}
