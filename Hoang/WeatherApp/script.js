let today = document.querySelector(".today");
let search = document.querySelector(".search");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let city = document.querySelector(".city");
let info = document.querySelector(".info");
let temp = document.querySelector(".temp");
let range = document.querySelector(".temp-range");

btn.addEventListener("click", getData);

//Api  key generated from openweathermap.org.
const apiKey = "00d4e46ff4781b50fd62972851d5d8a5";

function getData() {
  const cityName = search.value;
  //console.log(cityName);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(data);
}

function data(res) {
  console.log(res);
  if (res.cod === "404") {
    error.textContent = "Please enter a valid city name";
    search.value = " ";
  } else {
    city.textContent = `${res.name}, ${res.sys.country}`;
    info.textContent = res.weather[0].description;
    temp.textContent = `${Math.round(res.main.temp)}°C`;
    range.textContent = `H: ${Math.round(res.main.temp_max)}°C L: ${Math.round(
      res.main.temp_min
    )}°C`;
  }
}
