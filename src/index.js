function showTemperature(response) {  
let h1=document.querySelector("h1");
h1.innerHTML=response.data.name;  
temperature.innerHTML= `${Math.round(response.data.main.temp)}°`;
let tempMax=document.querySelector("#tempMax");
tempMax.innerHTML=`H:${Math.round(response.data.main.temp_max)}°`;
let tempMin=document.querySelector("#tempMin");
tempMin.innerHTML=`L:${Math.round(response.data.main.temp_min)}°`;
let description=document.querySelector("#description");
description.innerHTML=`${response.data.weather[0].description}`;
}
function search(city){
let apiKey = "78077238f4ea41548bb4d14fbbe9813d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}
function submitSearch(event){
event.preventDefault();
let city=document.querySelector("#search-text-input").value;
search(city);  

function getFahrenheit() {
let apiKey = "78077238f4ea41548bb4d14fbbe9813d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(showTemperature);  
let temperature=document.querySelector("#temperature");
temperature.innerHTML=`${Math.round(response.data.main.temp)}°`;  
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", getFahrenheit);
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
search("Los Angeles");