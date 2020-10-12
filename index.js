$(document).ready(function(){
    
    var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#date").text(timeNow);
    
    var timeNow = moment().hour();
    })