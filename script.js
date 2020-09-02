var hourlyArray;
var currentTime = moment();
var textBlock = $(".col-8");
var plannerTask = $("textarea");

if (localStorage.getItem("localHourlyTasks")) {
}

$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);

function updateCurrentScheduleTime() {
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

function updateLocalStorage() {
    event.preventDefault();
    let btnIndex = Number($(this).attr('id'));
    hourlyArray[btnIndex] = plannerTask[btnIndex].value;
    localStorage.setItem("localHourlyTasks", JSON.stringify(hourlyArray));
}

function writeCurrentTasks() {
    $.each(hourlyArray, function(i) {
        plannerTask[i].value = hourlyArray[i];
    })
}

updateCurrentScheduleTime();
writeCurrentTasks();
$("button").click(updateLocalStorage);