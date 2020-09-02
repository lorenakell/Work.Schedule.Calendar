var hourlyArray;
var currentTime = moment();
var currentHour = currentTime.hour();
var textBlock = $(".col-8");
var plannerTask = $("textarea");
$.each(plannerTask, function () {
    this.value = "";
});

if (localStorage.getItem("localHourlyTasks")) {
    hourlyArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
    hourlyArray = [];
};

$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);

function updateCurrentScheduleTime() {
    textBlock.removeClass('past present future');
    $.each(textBlock, function(scheduleBlockHour) {
        if(scheduleBlockHour < (currentTime.hour() - 9)) {
            $(this).addClass('past');
        } else if (scheduleBlockHour == (currentTime.hour() - 9)) {
                $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}

function updateLocalStorage() {
    event.preventDefault();
    let btnIndex = Number($(this).attr('id'));
    hourlyArray[btnIndex] = {
        time: $(".hour")[btnIndex].textContent.trim(),
        task: plannerTask[btnIndex].value
    }
    localStorage.setItem("localHourlyTasks", JSON.stringify(hourlyArray));
}

function writeCurrentTasks() {
   $.each(hourlyArray, function (i) {
       if (hourlyArray [i]) {
           plannerTask[i].value = hourlyArray[i].task;
       }
    })
}

setInterval(function() {
    currentTime = moment();
    if (currentHour < currentTime.hour()) {
        updateCurrentScheduleTime();
    }
}, 60000)

updateCurrentScheduleTime();
writeCurrentTasks();
$("button").click(updateLocalStorage);