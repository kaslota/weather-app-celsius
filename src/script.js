// Show automatic weather

function showAutoData(response) {
  // Auto Location city name
  let autoLocationCityName = response.data.name;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${autoLocationCityName}`;
  // Auto Current temperature
  let autoTemperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${autoTemperature}`;
  // Auto Current max-min temperature
  let autoMinTemp = Math.floor(response.data.main.temp_min);
  let autoMaxTemp = Math.ceil(response.data.main.temp_max);
  let currentMaxMinTemp = document.querySelector("#current-max-min-tem");
  currentMaxMinTemp.innerHTML = `${autoMinTemp} / ${autoMaxTemp}`;

  celsiusTemperature = response.data.main.temp;
  celsiusMaxTem = response.data.main.temp_max;
  celsiusMinTem = response.data.main.temp_min;

  // Auto Current description
  let autoDescription = response.data.weather[0].description;
  let nameIcon = document.querySelector("#description");
  nameIcon.innerHTML = `${autoDescription}`;
  // Auto Current icon
  let icon = response.data.weather[0].icon;
  let autoIcon = document.querySelector("#icon");
  autoIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );
  autoIcon.setAttribute("alt", `${autoDescription}`);
  // Auto Current humidity
  let autoHumidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = ` ${autoHumidity}`;
  // Auto Current wind
  let autoWind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = ` ${autoWind}`;
}

let keyApi = `0f8bc384a7c31b717a18cfe38a95ae06`;
let unitCelsius = `metric`;
let url = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${keyApi}&units=${unitCelsius}`;
axios.get(url).then(showAutoData);

// Show input name city
function inputCity(event) {
  event.preventDefault();
  let inputForm = document.querySelector("#input-form");
  let cityName = document.querySelector("#city-name");
  if (inputForm.value) {
    cityName.innerHTML = `${inputForm.value}`;
  } else {
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

// Show current input data(temperature, description, humidity, wind)

function showCityData(response) {
  // Input Current temperature
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${temperature}`;
  // Input Current max-min temperature
  let minTemp = Math.floor(response.data.main.temp_min);
  let maxTemp = Math.ceil(response.data.main.temp_max);
  let currentMaxMinTemp = document.querySelector("#current-max-min-tem");
  currentMaxMinTemp.innerHTML = `${minTemp} / ${maxTemp}`;

  celsiusTemperature = response.data.main.temp;
  celsiusMaxTem = response.data.main.temp_max;
  celsiusMinTem = response.data.main.temp_min;

  // Input Weather description
  let inputDescription = response.data.weather[0].description;
  let nameIcon = document.querySelector("#description");
  nameIcon.innerHTML = `${inputDescription}`;
  // if ((inputDescription = `haze`)) {
  //   nameIcon.classList.add("haze");
  // } else { }
  // if ((inputDescription = `clear sky`)) {
  //   nameIcon.classList.add("clear-sky");
  // } else {}
  // Input Weather icon
  let inputIcon = response.data.weather[0].icon;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${inputIcon}@2x.png`
  );
  icon.setAttribute("alt", `${inputDescription}`);
  // Input Current humidity
  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = ` ${humidity}`;
  // Input Current wind
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

  celsiusTemperature = response.data.main.temp;
  celsiusMaxTem = response.data.main.temp_max;
  celsiusMinTem = response.data.main.temp_min;

  // Location Weather description
  let locationDescription = response.data.weather[0].description;
  let nameIcon = document.querySelector("#description");
  nameIcon.innerHTML = `${locationDescription}`;
  // Location Weather icon
  let locationIcon = response.data.weather[0].icon;
  let currentIcon = document.querySelector(`#icon`);
  currentIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${locationIcon}@2x.png`
  );
  currentIcon.setAttribute("alt", `${locationDescription}`);
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

// Show temperature in fahrenheit
function showFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let currentFahrenheit = Math.round((celsiusTemperature * 9) / 5 + 32);
  temp.innerHTML = currentFahrenheit;
  let currentMaxMinTem = document.querySelector(`#current-max-min-tem`);
  let fahrenheitMinTem = Math.floor((celsiusMinTem * 9) / 5 + 32);
  let fahrenheitMaxTem = Math.ceil((celsiusMaxTem * 9) / 5 + 32);
  currentMaxMinTem.innerHTML = `${fahrenheitMinTem} / ${fahrenheitMaxTem}`;
}
// Show temperature in celsius
function showCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  temp.innerHTML = Math.round(celsiusTemperature);
  let currentMaxMinTem = document.querySelector(`#current-max-min-tem`);
  currentMaxMinTem.innerHTML = `${Math.floor(celsiusMinTem)} / ${Math.ceil(
    celsiusMaxTem
  )}`;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheit);

let celsiusTemperature = null;
let celsiusMinTem = null;
let celsiusMaxTem = null;
