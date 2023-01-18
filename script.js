// Assignment code here
const specialChars = [' ', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', '/', ':', ';', '"', '\'', '<', '>', ',', '.', '?'];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


//pass in the length of desired password, then a list of the desired characters for the password
function writePassword(passLength, charIncluded) {

  var passwordText = document.getElementById("password");
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * charIncluded.length);
    password += charIncluded[index];
  }
  passwordText.setAttribute("placeholder", password);
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
    if (charIncluded != "") {
      writePassword(passLength, charIncluded);
    } else {
      alert("Please select at least one of the options.");
    }
  } else {
    alert("Please type a number between 8 and 124");
  }
}
