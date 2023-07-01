// Show current time and day

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;

// Show forecast html and data
function transformOnDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forecastDaily = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecast = `<div class="row">`;
  forecastDaily.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecast =
        forecast +
        `<div class="col">
            <div class="another-weather">
              <div class="another-day"><strong>${transformOnDay(
                forecastDay.dt
              )}</strong></div>
              <img class="another-icon" src="https://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png" alt="icon">
              <div class="another-max-min-tem" id="forecast-max-min-tem">
                 ${Math.round(forecastDay.temp.min)} / ${Math.round(
          forecastDay.temp.max
        )}
              </div>
            </div>
        </div> `;
    }
  
  });
  forecast = forecast + `</div>`;
  forecastElement.innerHTML = forecast;
}

function getForecast(coordinates) {
  console.log(coordinates.lat);
  let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

// Show current input data and auto city(temperature, description, humidity, wind)

function showCityData(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  let minTemp = Math.floor(response.data.main.temp_min);
  let maxTemp = Math.ceil(response.data.main.temp_max);
  document.querySelector(
    "#current-max-min-tem"
  ).innerHTML = `${minTemp} / ${maxTemp}`;

  celsiusTemperature = response.data.main.temp;
  celsiusMaxTem = response.data.main.temp_max;
  celsiusMinTem = response.data.main.temp_min;

  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;

  let inputIcon = response.data.weather[0].icon;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${inputIcon}@2x.png`
  );
  icon.setAttribute("alt", `${response.data.weather[0].description}`);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  getForecast(response.data.coord);
}
function searchCity(city) {
  let keyApi = `0f8bc384a7c31b717a18cfe38a95ae06`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`;
  axios.get(url).then(showCityData);
}
function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
searchCity("Kyiv");

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);

// // Location Current weather by coordinates(latitude and longitude)

function currentLocation(position) {
  let keyApi = `0f8bc384a7c31b717a18cfe38a95ae06`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyApi}&units=metric`;
  axios.get(url).then(showCityData);
}

function askCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let currentBtn = document.querySelector("#current-btn");
currentBtn.addEventListener("click", askCurrentPosition);

