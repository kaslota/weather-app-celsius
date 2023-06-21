// Show automatic weather

function showAutoData(response) {
  console.log(response.data);
  // Auto Location city name
  let AutoLocationCityName = response.data.city;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${AutoLocationCityName}`;
  // Auto Current temperature
  let AutoTemperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${AutoTemperature}`;
  // Auto Current max-min temperature
  // let AutoMinTemp = Math.floor(response.data.main.temp_min);
  // let AutoMaxTemp = Math.ceil(response.data.main.temp_max);
  // let currentMaxMinTemp = document.querySelector("#current-max-min-tem");
  // currentMaxMinTemp.innerHTML = `${AutoMinTemp} / ${AutoMaxTemp}`;
  // Auto Weather description
  let AutoDescription = response.data.condition.description;
  let nameIcon = document.querySelector("#description");
  nameIcon.innerHTML = `${AutoDescription}`;
  // Auto Weather icon
  let icon = response.data.condition.icon;
  let autoIcon = document.querySelector("#icon");
  autoIcon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
  // Auto Current humidity
  let AutoHumidity = response.data.temperature.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = ` ${AutoHumidity}`;
  // Auto Current wind
  let AutoWind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = ` ${AutoWind}`;
}

let keyApi = `46d2dc4o007a9319bat387c5f5cb028f`;
let unitCelsius = `metric`;
let url = `https://api.shecodes.io/weather/v1/current?query=kyiv&key=${keyApi}&units=${unitCelsius}`;
axios.get(url).then(showAutoData);

// Show temperature in celsius
function showCelsius() {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `15`;
  let currentMaxMinTem = document.querySelector(`#current-max-min-tem`);
  let celsiusMaxMinTem = `10 / 17`;
  currentMaxMinTem.innerHTML = `${celsiusMaxMinTem}`;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

// Show temperature in fahrenheit
function showFahrenheit() {
  let temp = document.querySelector("#temperature");
  let currentFahrenheit = 40;
  temp.innerHTML = `${currentFahrenheit}`;
  let currentMaxMinTem = document.querySelector(`#current-max-min-tem`);
  let fahrenheitMaxMinTem = `38 / 41`;
  currentMaxMinTem.innerHTML = `${fahrenheitMaxMinTem}`;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheit);

// Show input name city
function inputCity(event) {
  event.preventDefault();
  let inputForm = document.querySelector("#input-form");
  let cityName = document.querySelector("#city-name");
  if (inputForm.value) {
    cityName.innerHTML = `${inputForm.value}`;
  } else {
    // alert(`Please enter a city!😅`);
  }
}
let form = document.querySelector("form");
form.addEventListener("submit", inputCity);

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
// let currentTime = document.querySelector(".current-time");
// currentTime.innerHTML = ``;

// Show current input data(temperature, description, humidity, wind)

function showCityData(response) {
  // Current temperature
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${temperature}`;
  // Current max-min temperature
  let minTemp = Math.floor(response.data.main.temp_min);
  let maxTemp = Math.ceil(response.data.main.temp_max);
  let currentMaxMinTemp = document.querySelector("#current-max-min-tem");
  currentMaxMinTemp.innerHTML = `${minTemp} / ${maxTemp}`;
  // Weather description
  let description = response.data.weather[0].description;
  let nameIcon = document.querySelector("#description");
  nameIcon.innerHTML = `${description}`;
  // Current humidity
  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = ` ${humidity}`;
  // Current wind
  let wind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = ` ${wind}`;
}

function urlData() {
  let inputForm = document.querySelector("#input-form");
  let city = inputForm.value;
  let keyApi = `0f8bc384a7c31b717a18cfe38a95ae06`;
  let unitCelsius = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=${unitCelsius}`;
  axios.get(url).then(showCityData);
}

let data = document.querySelector(`form`);
data.addEventListener("submit", urlData);

// Location Current weather by coordinates(latitude and longitude)

function showCurrentLocationData(response) {
  // Location Current city name
  let locationCityName = response.data.name;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${locationCityName}`;
  // Location Current temperature
  let locationTemperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${locationTemperature}`;
  // Location Current max-min temperature
  let locationMinTemp = Math.floor(response.data.main.temp_min);
  let locationMaxTemp = Math.ceil(response.data.main.temp_max);
  let currentMaxMinTemp = document.querySelector("#current-max-min-tem");
  currentMaxMinTemp.innerHTML = `${locationMinTemp} / ${locationMaxTemp}`;
  // Location Weather description
  let locationDescription = response.data.weather[0].description;
  let nameIcon = document.querySelector("#description");
  nameIcon.innerHTML = `${locationDescription}`;
  // Location Current humidity
  let locationHumidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = ` ${locationHumidity}`;
  // Location Current wind
  let locationWind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = ` ${locationWind}`;
}

function currentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let keyApi = `0f8bc384a7c31b717a18cfe38a95ae06`;
  let unitCelsius = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyApi}&units=${unitCelsius}`;
  axios.get(url).then(showCurrentLocationData);
}

function askCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let currentBtn = document.querySelector("#current-btn");
currentBtn.addEventListener("click", askCurrentPosition);
