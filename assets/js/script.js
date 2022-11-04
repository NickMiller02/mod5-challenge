//Creating time variable and Setting Date on display
var currentDay = moment().format("ddd MMM Do, YYYY");
var currentTime = moment().format("HH");
$("#currentDay").text(currentDay);

//console.log(currentDay);
//console.log(currentTime);



$(document).ready(function() {


    // Function to handle Time for the schedule
    function scheduleTimer() {
        
        //Looping over each hour block
        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("id").split("hour")[1]);

            //Background color if statement for each scenerio
            if (hour == currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
                
            } else if (hour > currentTime) {
            $(this).removeClass("present");
            $(this).addClass("future");
        
            } else if (hour < currentTime) {
            $(this).removeClass("future");
            $(this).addClass("past");
            }
        });
            
    }

    scheduleTimer();

// Save button Function
$('saveBtn').on("click", function() {
    var desc = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, desc);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

})