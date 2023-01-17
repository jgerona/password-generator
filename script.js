// Assignment code here
const specialChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', '/', ':', ';', '"', '\'', '<', '>', ',', '.', '?'];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passLength, charIncluded) {
  // var password = generatePassword();
  var passwordText = document.getElementById("password");

  // passwordText.value = password;
  var password = "";
  // var index = Math.floor(Math.random() * options.length);
  // var computerChoice = options[index];
  //var index = Math.floor(Math.random() * charIncluded.length);

  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * charIncluded.length);
    password += charIncluded[index];
    passwordText.setAttribute("placeholder", password);
  }
  // console.log(password[0]);
  // console.log(password[1]);
  // passwordText.placeholder = password.valueOf();
  // passwordText.placeholder = password[1];
  console.log(password);

}

function myPrompt() {
  var passLength = prompt("What is your desired password length?");
  //if answer given is valid then find which characters are desired.
  if (passLength >= 8 && passLength <= 124) {
    var charIncluded = [""]; // list of characters to be randomized
    var isLowerIncluded = confirm("Include lowercase letters?");
    if (isLowerIncluded) {
      charIncluded = charIncluded.concat(lowerLetters);
    }
    var isUpperIncluded = confirm("Include uppercase letters?");
    if (isUpperIncluded) {
      charIncluded = charIncluded.concat(upperLetters);
    }
    var isNumericIncluded = confirm("Include numerics?");
    if (isNumericIncluded) {
      charIncluded = charIncluded.concat(nums);
    }
    var isSpecialIncluded = confirm("Included special characters?");
    if (isSpecialIncluded) {
      charIncluded = charIncluded.concat(specialChars);
    }
    //if true, create a password given the desired characters.
    //if (charIncluded != "") {
    if (isLowerIncluded || isUpperIncluded || isNumericIncluded || isSpecialIncluded) {
      writePassword(passLength, charIncluded);
    } else {
      alert("Please select at least one of the options.");
    }
  } else {
    alert("Please type a number between 8 and 124");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
