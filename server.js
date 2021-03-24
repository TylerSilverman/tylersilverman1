//heroku login 
//npm init
//npm install express
//npm install chalk
//npm i stopwatch
//npm i nes

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4579;

//npm install chalk - this allows writing in the terminal 
const chalk = require('chalk');
console.log(chalk.green('This is My Most Up to Date Portfolio!, click below to view'));

// var Stopwatch = require('stopwatch').Stopwatch;
 
// var stopwatch = new Stopwatch(1, { seconds: 60 });
// stopwatch.on('tick', function(secondsLeft) {
//   //when one second pass.
// });
// stopwatch.on('end', function() {
//   //when the time ends
// });

//shows a timer in the console terminal 
// const Timer = require('tiny-timer')
 
// const timer = new Timer()
 
// timer.on('tick', (ms) => console.log('Going Down', ms))
// timer.on('done', () => console.log('Complete!'))
// timer.on('statusChanged', (status) => console.log('status:', status))
 
// timer.start(15000) // run for 5 seconds


//ALL APP.USE (3)

//the app.use is setting up the function for express to handle the data parsing. 
app.use(express.json()); //function to call the inforamtion to the body req. 

app.use(express.static(path.join(__dirname, "public"))); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(express.urlencoded({extended: true})); //using the app to express acess to the body requirements (req) function 

//ALL APP.GET (4)

//app.get for the notes.html from the public folder
app.get("/dashboard", function (req, res){
  res.sendFile(path.join(__dirname, "public/dashboard.html"))
}); 

//app.get for the notes.html from the public folder
app.get("/achievements", function (req, res){
  res.sendFile(path.join(__dirname, "public/achievements.html"))
}); 

//app.get for the notes.html from the public folder
app.get("/connections", function (req, res){
  res.sendFile(path.join(__dirname, "public/connections.html"))
}); 

 //APP CALLING THE LISTENING FUNCTION TO THE LOCAL HOST

app.listen(PORT, function () {
  console.log("Click To Check Out: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 