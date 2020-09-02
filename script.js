var hourlyArray;
var currentTime = moment();
var textBlock = $(".col-8");

if (localStorage.getItem("localHourlyTasks")) {
    hourlyArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
    hourlyArray =[];
}

$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);

function updateCurrentScheduleTime( ) {
    textBlock.removeClass('past present future');
    $.each(textBlock, function(scheduleBlockHour) {
        if)scheduleBlockHour < (currentTime.hour()-9)) {
            $(this).addClass('past');
        } else if (scheduleBlockHour == (currentTime.hour()-9)) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}