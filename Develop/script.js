var todayDate = moment().format('dddd, MMMM DD, YYYY');
$("#currentDay").html(todayDate);

function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".eventBlock").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });

    $(document).ready(function () {
        // btn-save click listener 
        $(".btn-save").on("click", function () {
            // Get nearby values of the description in JQuery
            var text = $(this).siblings(".descript").val();
            var time = $(this).parent().attr("id");
            localStorage.setItem(time, text);
        });
})
  // Get item from local storage if any
  $("#9am .descript").val(localStorage.getItem("9am"));
  $("#10am .descript").val(localStorage.getItem("10am"));
  $("#11am .descript").val(localStorage.getItem("11am"));
  $("#12pm .descript").val(localStorage.getItem("12pm"));
  $("#1pm .descript").val(localStorage.getItem("1pm"));
  $("#2pm .descript").val(localStorage.getItem("2pm"));
  $("#3pm .descript").val(localStorage.getItem("3pm"));
  $("#4pm .descript").val(localStorage.getItem("4pm"));
  $("#5pm .descript").val(localStorage.getItem("5pm"));
 

};