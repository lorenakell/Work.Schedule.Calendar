var hourlyArray;
var currentTime = moment();

if (localStorage.getItem("localHourlyTasks")) {
    hourlyArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
    hourlyArray =[];
}

$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);