function showTemperature(response) {  
let h1=document.querySelector("h1");
h1.innerHTML=response.data.name;  
celsiusTemperature = response.data.main.temp;
temperature.innerHTML= `${Math.round(response.data.main.temp)}°`;
celsiusTemperatureMax = response.data.main.temp_max;
celsiusTemperatureMin = response.data.main.temp_min;
let tempMax=document.querySelector("#tempMax");
tempMax.innerHTML=`H:${Math.round(response.data.main.temp_max)}°`;
let tempMin=document.querySelector("#tempMin");
tempMin.innerHTML=`L:${Math.round(response.data.main.temp_min)}°`;
let description=document.querySelector("#description");
description.innerHTML=`${response.data.weather[0].description}`;
let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city){
let apiKey = "78077238f4ea41548bb4d14fbbe9813d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}
function displayFahrenheitTemperature(event) {
event.preventDefault();
let temperature=document.querySelector("#temperature"); 
celsiusLink.classList.remove ("active");
fahrenheitLink.classList.add ("active");
let fahrenheitTemperature = (celsiusTemperature * 9)/5 + 32;
temperature.innerHTML=`${Math.round(fahrenheitTemperature)}°`;
let tempMax=document.querySelector("#tempMax");
let fahrenheitTemperatureMax = (celsiusTemperatureMax * 9)/5 + 32;
tempMax.innerHTML=`H:${Math.round(fahrenheitTemperatureMax)}°`;
let tempMin=document.querySelector("#tempMin");
let fahrenheitTemperatureMin = (celsiusTemperatureMin * 9)/5 + 32;
tempMin.innerHTML=`L:${Math.round(fahrenheitTemperatureMin)}°`;  
}
function displayCelsiusTemperature(event) {
event.preventDefault();
let temperature=document.querySelector("#temperature");
celsiusLink.classList.add ("active");
fahrenheitLink.classList.remove ("active"); 
temperature.innerHTML=`${Math.round(celsiusTemperature)}°`; 
let tempMax=document.querySelector("#tempMax");
tempMax.innerHTML=`H:${Math.round(celsiusTemperatureMax)}°`;
let tempMin=document.querySelector("#tempMin");
tempMin.innerHTML=`L:${Math.round(celsiusTemperatureMin)}°`; 
}
function submitSearch(event){
event.preventDefault();
let city=document.querySelector("#search-text-input").value;
search(city);  
}
let now = new Date();
let date = document.querySelector("#date");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day= days[now.getDay()];
let hours=[now.getHours()];
if (hours<10){
  hours=`0${hours}`;
}
let minutes =[now.getMinutes()];
if (minutes<10){
  minutes=`0${minutes}`
}
date.innerHTML=`${day} ${hours}:${minutes}`;
let form = document.querySelector("#search-form");
form.addEventListener("submit", submitSearch);

function showCurrent(event){
event.preventDefault();
function currentTemperature(response) {
let tempMax=document.querySelector("#tempMax");
tempMax.innerHTML=`H:${Math.round(response.data.main.temp_max)}°`;
let tempMin=document.querySelector("#tempMin");
tempMin.innerHTML=`L:${Math.round(response.data.main.temp_min)}°`;
let description=document.querySelector("#description");
description.innerHTML=`${response.data.weather[0].description}`;
let temperature=document.querySelector("#temperature");
let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
  temperature.innerHTML= `${Math.round(response.data.main.temp)}°`;
}
function handlePosition(position) {
  let latitude = Math.round(position.coords.latitude);
  let longitude = Math.round(position.coords.longitude);
  let apiKey = "78077238f4ea41548bb4d14fbbe9813d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemperature);
}

navigator.geolocation.getCurrentPosition(handlePosition);
}

let button = document. querySelector("#current-location-button");
button.addEventListener("click", showCurrent);
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
let celsiusTemperature = null;
let celsiusTemperatureMax = null;
let celsiusTemperatureMin = null;
 search("Los Angeles");