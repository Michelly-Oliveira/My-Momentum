/* Display time and date */
'use strict';

// Get the HTML elements
const showTime = document.querySelector('.time');
const showDate = document.querySelector('.date');
const showGreeting = document.querySelector('.greeting');

function setDate() {
	// Create a Date object and declare the variables for the time.
	const date = new Date();

	getAndDisplayTime(date);
	getAndDisplayDate(date);
}

function getAndDisplayTime(date) {
	// Get the current time
	let hour = date.getHours();
	let minutes = date.getMinutes();

	// Check if time needs to be formatted
	hour = formatData(hour);
	minutes = formatData(minutes);

	displayOnScreen(showTime, `${hour}:${minutes}`);

	selectAndDisplayGreeting(hour);
}

function selectAndDisplayGreeting(hour) {
	let welcomeTheUser;

	if (hour > 5 && hour <= 12) {
		welcomeTheUser = 'Good Morning';
	} else if (hour > 12 && hour <= 18) {
		welcomeTheUser = 'Good Afternoon';
	} else {
		welcomeTheUser = 'Good Evening';
	}

	displayOnScreen(showGreeting, welcomeTheUser);
}

function getAndDisplayDate(date) {
	// Get the day
	let dayOfWeek;
	let numberOfDay = date.getDay();
	let dayOfMonth = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();

	switch (numberOfDay) {
		case 0:
			dayOfWeek = 'Sunday';
			break;
		case 1:
			dayOfWeek = 'Monday';
			break;
		case 2:
			dayOfWeek = 'Tuesday';
			break;
		case 3:
			dayOfWeek = 'Wednesday';
			break;
		case 4:
			dayOfWeek = 'Thursday';
			break;
		case 5:
			dayOfWeek = 'Friday';
			break;
		case 6:
			dayOfWeek = 'Saturday';
			break;
	}

	month = formatData(month + 1);
	dayOfMonth = formatData(dayOfMonth);
	displayOnScreen(
		showDate,
		`Today is ${dayOfWeek}, ${month}/${dayOfMonth}/${year}`
	);
}

function formatData(numberToFormat) {
	// If the hour/date is less than 10, add a zero to it before the number
	if (numberToFormat < 10) {
		numberToFormat = '0' + numberToFormat;
	}

	return numberToFormat;
}

function displayOnScreen(element, msgToDisplay) {
	// Display data on screen
	element.innerHTML = msgToDisplay;
}

// Run every second
setInterval(setDate, 1000);
