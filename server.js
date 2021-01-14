//heroku login 
//npm init
//npm install express
//npm install chalk

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4579;

//npm install chalk - this allows writing in the terminal 
const chalk = require('chalk');
console.log(chalk.green('Hello This is My Portfolio!'));

//ALL APP.USE (3)

//the app.use is setting up the function for express to handle the data parsing. 
app.use(express.json()); //function to call the inforamtion to the body req. 

app.use(express.static(path.join(__dirname, "public"))); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(express.urlencoded({extended: true})); //using the app to express acess to the body requirements (req) function 

//ALL APP.GET (4)

// app.get("/", function (req, res){
//   res.sendFile(path.join(__dirname, "public/assets/js/index.js"));
// }); // express reaching out to the index.js to send a file after the response 

//app.get for the notes.html from the public folder
app.get("/dashboard", function (req, res){
  res.sendFile(path.join(__dirname, "public/dashboard.html"))
}); // ROUTES interact with public notes html database:





 //APP CALLING THE LISTENING FUNCTION TO THE LOCAL HOST

app.listen(PORT, function () {
  console.log("Click To Check Out: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 