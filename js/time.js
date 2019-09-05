/* Display time and date */

// Get the HTML elements
let showTime = document.querySelector('.time');
let showDate = document.querySelector('.date');
let showGreeting = document.querySelector('.greeting');

function setDate() {
    // Create a Date object and declare the variables for the time. Call other routines to set the time and date

    let date = new Date();
    let hour, minutes;

    getAndDisplayTime(date);

    getAndDisplayDate(date);

    selectAndDisplayGreeting();
}

function getAndDisplayTime(date) {
    // Get the current time
    hour = date.getHours();
    minutes = date.getMinutes();

    // Check if time needs to be formatted
    hour = formatData(hour);
    minutes = formatData(minutes);

    displayOnScreen(showTime, `${hour}:${minutes}`);
}

function formatData(data) {
    // If the hour/date is less than 10, add a zero to it before the number so it doesn't look too weird

    if(data < 10) {
        data = '0' + data;
    }

    return data;
}

function getAndDisplayDate(date) {
    // Get the day
    let dayOfWeek;
    let numberOfDay = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    switch(numberOfDay) {
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

    month = formatData(month);
    dayOfMonth = formatData(dayOfMonth);
    displayOnScreen(showDate, `Today is ${dayOfWeek}, ${month}/${dayOfMonth}/${year}`);
}

function selectAndDisplayGreeting() {
    let welcomeTheUser;

    if(hour > 5 && hour <= 12) {
        welcomeTheUser = 'Good Morning';
    } else if(hour > 12 && hour <= 18) {
        welcomeTheUser = 'Good Afternoon';
    } else {
        welcomeTheUser = 'Good Evening';
    }

    displayOnScreen(showGreeting, welcomeTheUser);
}

function displayOnScreen(element, msgToDisplay) {
    // Display data on screen
    element.innerHTML = msgToDisplay;
}

// Run every second
setInterval(setDate, 1000);