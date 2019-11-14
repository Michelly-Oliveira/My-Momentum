let city = document.querySelector('#city');

function handleCityInput(e) {
  let enter = 13;

  if (e.keyCode === enter) {
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
      temperature.innerHTML = `${data.main.temp.toFixed(1)} °C`;

      let description = document.querySelector('.description');
      description.innerHTML = data.weather[0].description;

      let weatherIcon = document.querySelector('.weather-icon');
      let iconCode = data.weather[0].icon;
      let iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
      loadImage(iconURL, weatherIcon);
    });
}

function displayTemperature() {
  let displayTemp = document.querySelector('.display-temp');
  displayTemp.classList.remove('invisible');
}

function loadImage(source, screenImg) {
  const img = new Image();

  img.onload = function() {
    screenImg.src = img.src;
  };

  img.src = source;
}

city.addEventListener('keyup', handleCityInput);
