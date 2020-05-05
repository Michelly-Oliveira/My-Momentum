'use strict';

const city = document.querySelector('#city');

function handleCityInput(e) {
	const ENTER = 13;

	// Every time you press a key, check if it was the ENTER key, and if it was, make a request to the api
	if (e.keyCode === ENTER) {
		queryAPI();
	}
}

function queryAPI() {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=6c52c35ce54b1456e5e939d87c3ad29d`;

	fetch(url)
		.then((promise) => promise.json())
		.then((data) => {
			const temperature = document.querySelector('.temperature');
			// 1 number after the dot
			temperature.innerHTML = `${data.main.temp.toFixed(1)} °C`;

			const description = document.querySelector('.description');
			description.innerHTML = data.weather[0].description;

			const weatherIcon = document.querySelector('.weather-icon');
			const iconCode = data.weather[0].icon;
			const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
			// Add the source of the icon to the img element
			weatherIcon.src = iconURL;

			// After we assign the data to the correspondent element make the weather container show up
			displayTemperature();
		});
}

function displayTemperature() {
	const displayTemp = document.querySelector('#weather');
	displayTemp.classList.add('dropdown');
}

city.addEventListener('keyup', handleCityInput);
