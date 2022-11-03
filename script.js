//Creating time variable and Setting Date on display
var currentDay = moment().format("ddd MMM Do, YYYY");
var currentTime = moment().format("HH");
$("#currentDay").text(currentDay);


// Function to handle Time for the schedule
function scheduleTimer() {

}

scheduleTimer();

// Save button Function
$('saveBtn').on("click", function() {
    var desc = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, desc);
})