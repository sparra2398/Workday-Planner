//Ready sets up our function to run only after document page has loaded first
$(document).ready(function (){

    //Creates the date at the top of the page
    document.getElementById("currentDay").textContent = moment().format('dddd, MMMM Do YYYY');
    //Allows the color of the rows to change based on hour of the day
    var currentHour = moment().hours()
    for (var i = 8; i < 19; i++){
        var colorKey = ""
        if (i < currentHour){
            colorKey = "past"
        }
        else if (i === currentHour){
            colorKey = "present"
        }
        else {
            colorKey = "future"
        }

        //Changes the hour display in left column from 24-hour clock to 12-hour clock with AMs and PMs
        var hourDisplay = "";
        if (i < 12){
            hourDisplay = i + "am"
        }
        else if (i === 12){
            hourDisplay = i + "pm"
        }
        else {
            hourDisplay = i - 12 + "pm"
        }

        //Creates grid system with hour, text column and save button in html using jQuery
        var rowDiv = $("<div>").addClass("row").attr("id", i);
        var hourDiv = $("<div>").addClass("col-1").text(hourDisplay);
        var textArea = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i))
        var button = $("<button>").addClass("col-2 saveBtn").attr("id", i).text("Save").click(function (){
            var hourKey = $(this).attr("id")
            var activity = $(this).siblings(".description").val()
            localStorage.setItem(hourKey, activity)
        })

        $(".container").append(rowDiv.append(hourDiv, textArea, button))
    }






})