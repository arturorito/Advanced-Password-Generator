// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //recognize the click with this alert//
  alert("Let us make you a password!");
  //create a loop that makes sure the user puts the correct information/values //
  do {
    //gives user parameters for their password
    var characterInput = prompt("Password can be between 8-128 characters. How many characters would you like?");
    //takes user input and converts it into integers so we can compare the value entered was a intenger later on
    var characterNumber = parseInt(characterInput);
    //if user wants to cancel
    if (characterInput == null) {
      //they'll receive cancellation notification
      alert("Password create canceled.");
      //ends the remainder of the code once pressing cancel
      return;
      //checks to make sure the user input was correct, no numbers lesss than 8 or greater than 128, no other character except numbers 
    }  else if  ((characterNumber < 8 || characterNumber > 128 || Number.isInteger(characterNumber) === false) && characterInput != null) {
      //tells user their input is wrong if it does not meet the requirements
      alert("Your response is not appropriate. Choose a value between 8-120 for password length.")
    }
    //repeats the loop until the requirements are met
  }  while ((characterNumber < 8 || characterNumber > 128 || Number.isInteger(characterNumber) === false) && characterInput != null);

  //these will be the questions that will be asked in the loop
  var characterTypes = [
    {q: "special characters", varName: true},
    {q: "numeric characters", varName: true},
    {q: "lowercase characters", varName: true},
    {q: "uppercase characters", varName: true}]
    console.log("How many conditions are there? " + characterTypes.length);
    //loop that asks if they want to confirm a specific type of character for the password
  for (var i = 0; i < characterTypes.length; i++) {
    characterTypes[i].varName = confirm("Do you want to use " + characterTypes[i].q + "?");
    console.log("Conditions for " + characterTypes[i].q + ": " + characterTypes[i].varName);
  }
  //sets up the characters for password conditions..//
  var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "\/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~", "]"];
  var numericCharacters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //takes all the vars for password generation and combines them into one array so that we can make loops with it later//
  var characters = [
    {char: specialCharacters},
    {char: numericCharacters},
    {char: uppercaseCharacters},
    {char: lowercaseCharacters}]
    //testing to see that it pulls correctly
   //function characterGenerator() 
  for (var j = 0; j < characterTypes.length; j++) {
    //if they do not want a certain type of character, this loop will remove those arrays
    if (characterTypes[j].varName === false) {
      //sets that designated array to ""
      characters[j].char = "";
    } 
      //test to confirm that it is showing the correct characters for all
      console.log("Presented characters to be included: " + characterTypes[j].q + ": " + characters[j].char);
  } //combines all active arrays that are true and not empty("")
    var totalCharacters = [].concat(
      characters[0].char || [],
      characters[1].char || [], 
      characters[2].char || [], 
      characters[3].char || []
      );
    console.log("Total characters to choose from per cycle: " + totalCharacters.length);
    console.log("Total Characters Array: " + totalCharacters);
    console.log("Number of characters needed for password: " + characterNumber);
    
    var value = [];
   //loop to create the random numbers 
  for (var k = 0; k < characterNumber; k++) {
    var randomValue = Math.floor(Math.random() * totalCharacters.length);
    //convert numbers into characters
    var values = totalCharacters[randomValue];
    //combine the characters into one array
    value.push(values);
    //combine the array into one 
  } password = value.join("");
  console.log(value);
  console.log(password);
  //send to the function
  return password
}
