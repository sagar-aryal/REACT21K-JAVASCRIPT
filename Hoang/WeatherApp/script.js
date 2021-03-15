let today = document.querySelector(".today");
let search = document.querySelector(".search");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let city = document.querySelector(".city");
let info = document.querySelector(".info");
let temp = document.querySelector(".temp");
let range = document.querySelector(".temp-range");
//require("dotenv").config();

//Api  key generated from openweathermap.org.
let apiKey = "00d4e46ff4781b50fd62972851d5d8a5";

//Generating todays date.
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

today.textContent = `${days[date.getUTCDay()]} ${date.getUTCDate()} ${
  months[date.getUTCMonth()]
}`;

//const apiKey = process.env.API_KEY;

// Fetching all data from https://openweathermap.org
function getData() {
  const cityName = search.value;
  //console.log(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(data);
}

//Fetching all required data from Json file.
function data(res) {
  console.log(res);
  //if user input wrong city name then display error message.
  if (res.cod === "404") {
    error.textContent = "Please enter a valid city name";
  } else {
    city.textContent = `${res.name}, ${res.sys.country}`;
    info.textContent = res.weather[0].description;
    temp.textContent = `${Math.round(res.main.temp)}°C`;
    range.textContent = `H: ${Math.round(res.main.temp_max)}°C L: ${Math.round(
      res.main.temp_min
    )}°C`;

    // Input value(city name) empty after result is displayed.
    search.value = " ";
  }
}

btn.addEventListener("click", getData);
