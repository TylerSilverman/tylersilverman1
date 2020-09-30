var generateBtn = document.querySelector("#generate");

function generatePassword () {
var generatePassword;

var characters = confirm("Do you want to include special characters?");
var upperCase = confirm("Do you want to include upper case letters?");
var lowerCase = confirm("Do you want to inclue lower case letters?");
var numbers = confirm("Do you want to include numbers?");
var length = prompt ("How long is the password?");



if (length < 8) {
  alert("Password must be at least 8 characters.");
  return generatePassword ();
}

if (length > 128) {
  alert("Password cannot be more then 128 characters.");
  return generatePassword ();
}

// Array to generate password-------
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "+"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomPassword = [randomPassword];

for (var i=0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * upperCase.length);
  console.log(randomIndex);
  randomPassword.push(upperCase[randomIndex]);
  var randomIndex = Math.floor(Math.random() * characters.length);
  console.log(randomIndex);
  randomPassword.push(characters[randomIndex]);
  var randomIndex = Math.floor(Math.random() * lowerCase.length);
  console.log(randomIndex);
  randomPassword.push(lowerCase[randomIndex]);
  var randomIndex = Math.floor(Math.random() * numbers.length);
  console.log(randomIndex);
  randomPassword.push(numbers[randomIndex]);
}

generatePassword = randomPassword;
return generatePassword.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
