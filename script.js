//Creating time variable and Setting Date on display
var currentDay = moment().format("ddd MMM Do, YYYY");
var currentTime = moment().format("HH");
$("#currentDay").text(currentDay);

//console.log(currentDay);
//console.log(currentTime);

$(".hour")

$(document).ready(function() {


    // Function to handle Time for the schedule
    function scheduleTimer() {
        
        var hour = parseInt($("hour").attr("id").split("hour")[1]);

        //Background color if statement for each scenerio
        if ( hour == currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
                
        } else if (hour > currentTime) {
            $(this).removeClass("present");
            $(this).addClass("future");
        
        } else if (hour < currentTime) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
            
    }
        
        scheduleTimer();
        
        // Save button Function
        $('saveBtn').on("click", function() {
            var desc = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
        
            localStorage.setItem(time, desc);
        })

        
})