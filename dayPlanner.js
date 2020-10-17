// variable for hoursPerDay
var hoursPerDay = [
    {
       id: "hour9am",
       militaryT: "09",
       textInformation: "",
       time:"9am",
    },
    {
       id: "hour10am",
       militaryT: "10",
       textInformation: "",
       time: "10am",
    },
    {
       id: "hour11am",
       militaryT: "11",
       textInformation: "",
       time: "11am",
    },
    {
       id: "hour12pm",
       militaryT: "12",
       textInformation: "",
       time: "12pm",
    },
    {
       id: "hour1pm",
       militaryT: "13",
       textInformation: "",
       time: "1pm",
    },
    {
       id: "hour2pm",
       militaryT: "14",
       textInformation: "",
       time: "2pm",
    },
    {
       id: "hour3pm",
       militaryT: "15",
       textInformation: "",
       time: "3pm",
    },
    {
       id: "hour4pm",
       militaryT: "16",
       textInformation: "",
       time: "4pm",
    },
    {
       id: "hour5pm",
       militaryT: "17",
       textInformation: "",
       time: "5pm",
    },
 ]

 //function to set up the time 

 $(document).ready(function(){
    
    var timeNow = moment().format('LLLL');
    $("#date").text(timeNow);
    
    
    var timeNow = moment().hour();
    
});

// function to set up save button 
$(document).ready(function(){
    $(".saveBtn").click(function(){
        console.log("save button cliked");
    });
});

//added function to keep the information after reloading the page 

var textContent = localStorage.getItem ("#textInformation9am");
$("#textInformation9am").val(textContent);

var textContent = localStorage.getItem ("#textInformation10am");
$("#textInformation10am").val(textContent); 

var textContent = localStorage.getItem ("#textInformation11am");
$("#textInformation11am").val(textContent); 

var textContent = localStorage.getItem ("#textInformation12pm");
$("#textInformation12pm").val(textContent); 

var textContent = localStorage.getItem ("#textInformation1pm");
$("#textInformation1pm").val(textContent); 

var textContent = localStorage.getItem ("#textInformation2pm");
$("#textInformation2pm").val(textContent); 

var textContent = localStorage.getItem ("#textInformation3pm");
$("#textInformation3pm").val(textContent); 

var textContent = localStorage.getItem ("#textInformation4pm");
$("#textInformation4pm").val(textContent); 

var textContent = localStorage.getItem ("#textInformation5pm");
$("#textInformation5pm").val(textContent); 


// adding the function to save for the local stoarge
//save to local storage and then get it from local storage // function for textbox info for each time to save when clicking save button and also the function to remove the text and console.log the information
$(document).ready(function(){
    $('#hour9am').click(function(){
        var textInformation9am = $("#textInformation9am").val();
        console.log(textInformation9am + " " + "Events are saved!");
        localStorage.setItem("#textInformation9am", textInformation9am);
    });
    $('#hour10am').click(function(){
        var textInformation10am = $("#textInformation10am").val();
        console.log(textInformation10am + " " + "events are saved!");
        localStorage.setItem("#textInformation10am", textInformation10am);
    });
    $('#hour11am').click(function(){
        var textInformation11am = $("#textInformation11am").val();
        console.log(textInformation11am + " " + "Events are saved!");
        localStorage.setItem("#textInformation11am", textInformation11am);
    });
    $('#hour12pm').click(function(){
        var textInformation12pm = $("#textInformation12pm").val();
        console.log(textInformation12pm + " " + "events are saved!");
        localStorage.setItem("#textInformation12pm", textInformation12pm);
    });
    $('#hour1pm').click(function(){
        var textInformation1pm = $("#textInformation1pm").val();
        console.log(textInformation1pm + " " + "Events are saved!");
        localStorage.setItem("#textInformation1pm", textInformation1pm);
    });
    $('#hour2pm').click(function(){
        var textInformation2pm = $("#textInformation2pm").val();
        console.log(textInformation2pm + " " + "events are saved!");
        localStorage.setItem("#textInformation2pm", textInformation2pm);
    });
    $('#hour3pm').click(function(){
        var textInformation3pm = $("#textInformation3pm").val();
        console.log(textInformation3pm + " " + "Events are saved!");
        localStorage.setItem("#textInformation3pm", textInformation3pm);
    });
    $('#hour4pm').click(function(){
        var textInformation4pm = $("#textInformation4pm").val();
        console.log(textInformation4pm + " " + "events are saved!");
        localStorage.setItem("#textInformation4pm", textInformation4pm);
    });
    $('#hour5pm').click(function(){
        var textInformation5pm = $("#textInformation5pm").val();
        console.log(textInformation5pm + " " + "events are saved!");
        localStorage.setItem("#textInformation5pm", textInformation5pm);
    });
});
//function for setting up background color in the textbox, also changed the time to militaryT:
$(document).ready(function(){
    
    var timeNow = moment().hour();
    $("#time-block").text(timeNow);

    var timeNow = moment().hour();  
});

//function to check the time with past, present, funture and the current time to show the correct color field 

var militaryT = [
    {militaryT:9},{militaryT:10},{militaryT:11},{militaryT:12},{militaryT:13},{militaryT:14},{militaryT:15},{militaryT:16},{militaryT:17},
];



function setColor () {
    var currentTime = moment().hour();
    $(".time-block").each(function () {

        console.log($(this).attr("id"))

        var blockLabelTime = $(this).attr("id").split(":")[1];

        console.log(blockLabelTime)

        if (parseInt(blockLabelTime) < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (parseInt(blockLabelTime) === currentTime) {
            $(this).removeClass("past");
            // $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass("future");
        }      
    })  
}
    setColor ()

    setInterval(setColor, 60000);

//1000 = 1 second 





