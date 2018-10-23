var weather;
var weatherParse;
var temp = document.getElementById("temperature");
var tempData;
function loadWeather() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=170f577e5c8e268b1ea9030a582c19d5",
    true
  );

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      weather = this.responseText;
      weatherParse = JSON.parse(weather);
      displayWeather();
    }
  };

  xhr.send();
}

function displayWeather() {
  temp.innerHTML = Math.round(weatherParse.main.temp) + "°F";
}
