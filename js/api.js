let city = document.querySelector('#city');
city.addEventListener('keyup', handleCityInput);

// Every 30 minutes query the API
setInterval(queryAPI, 1800000);

function handleCityInput(e) {
    let enter = 13;

    if(e.keyCode === enter) {
        queryAPI();
        displayTemperature();
    }
}

function queryAPI() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=6c52c35ce54b1456e5e939d87c3ad29d`;

    fetch(url)
        .then(promise => promise.json())
        .then(data => {
            let temperature = document.querySelector('.temperature');
            temperature.innerHTML = `${data.main.temp} °C`;

            let weatherIcon = document.querySelector('.weather-icon');
            let iconCode = data.weather[0].icon;
            let iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
            weatherIcon.src = iconURL;
            weatherIcon.innerHTML = data.weather[0].description;
        });
}

function displayTemperature() {
    let displayTemp = document.querySelector('.display-temp');
    displayTemp.classList.remove('invisible');
}