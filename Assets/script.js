// Declaring needed variables
let container = document.querySelector('.container');
let search = document.querySelector('.search-box');
let weather = document.querySelector('.weatherDetails');
let currentTemp = document.querySelector('.current');
let currentHumidity = document.querySelector('.humidity');
let currentMPH = document.querySelector('.mph')
let history = document.querySelector('previousSearches');

// Day One Forecast variables
let forecast = document.getElementById('.fiveDay');
let dayOne = document.getElementById('.dayOne');
let iconOne = document.getElementById('.icon1');
let tempOne = document.getElementById('.forecastTemp1');
let humidityOne = document.getElementById('.forecastHumidity1');
let mphOne = document.getElementById('.forecastMPH1');

// Day Two Forecast variables
let dayTwo = document.getElementById('.dayTwo');
let iconTwo = document.getElementById('.icon2');
let tempTwo = document.getElementById('.forecastTemp2');
let humidityTwo = document.getElementById('.forecastHumidity2');
let mphTwo = document.getElementById('.forecastMPH2');

// Day Three Forecast variables
let dayThree = document.getElementById('.dayThree');
let iconThree = document.getElementById('.icon3');
let tempThree = document.getElementById('.forecastTemp3');
let humidityThree = document.getElementById('.forecastHumidity3');
let mphThree = document.getElementById('.forecastMPH3');

// Day Four Forecast variables
let dayFour = document.getElementById('.dayFour');
let iconFour = document.getElementById('.icon4');
let tempFour = document.getElementById('.forecastTemp4');
let humidityFour = document.getElementById('.forecastHumidity4');
let mphFour = document.getElementById('.forecastMPH4');

// Day Five Forecast variables
let dayFive = document.getElementById('.dayFive');
let iconFive = document.getElementById('.icon5');
let tempFive = document.getElementById('.forecastTemp5');
let humidityFive = document.getElementById('.forecastHumidity5');
let mphFive = document.getElementById('.forecastMPH5');

// Event listener for search
search.addEventListener('click', () =>{

    let APIKey = "ec8a7804cc7486028a41ad88b4846484";
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    let city = document.querySelector('.search-box input');

if (city === '')
    return;

fetch(queryURL)
.then(function (response){
    return response.json();
})
.then (function(data){
    let lat = data[0].lat
    let lon = data[0].lon;
    getweatherDetails(lat, lon);
    getforecast(lat, lon);
})

let temperature = document.querySelector('.weatherDetails .current');
let humidity = document.querySelector('.weatherDetails .humidity');
let wind = document.querySelector('.weatherDetails .mph');


switch (json.weather[0].main) {
    case 'sun':
        image.src = 'images/sun.png';
        break;

    case 'rain':
        image.src = 'images/rain.png';
        break;
    case 'snow':
        image.src = 'images/snow.png';
        break;
    case 'thunderstorm':
        image.src='thunderstorm.png';
        break;

    defualt:
    image.src= '';
}





})

