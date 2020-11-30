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
  alert("Let us make you a password!");
  do {
    var characterInput = prompt("Password can be between 8-120 characters. How many characters would you like?");
    var characterNumber = parseInt(characterInput);
    console.log(characterInput)
    console.log(characterNumber);
    console.log(Number.isInteger(characterNumber));
    if (characterInput == null) {
      alert("Password create canceled.");
      return;   
    }  else if  ((characterNumber < 8 || characterNumber > 120 || Number.isInteger(characterNumber) === false) && characterInput != null) {
      alert("Your response is not appropriate. Choose a value between 8-120 for password length.")
    }
  }
  while ((characterNumber < 8 || characterNumber > 120 || Number.isInteger(characterNumber) === false) && characterInput != null);
  additionalConditions()
  characterGenerator()
}
    function characterGenerator() {//" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      var characterLengths = {
      specialCharacters : [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "\/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~", "]"],length: specialCharacters[0].length, 
      numericCharacters : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], length: numericCharacters[0].length},
      lowercaseCharacters : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], length: lowercaseCharacters[0].length,
      uppercaseCharacters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],  length: uppercaseCharacters[0].length
      }
      for (var j = 0; j < characterLengths.length; j++) {
        if (characterTypes[j].varName === false) {
          characterLengths[j][0] = "";
          console.log(characterLengths[j][0])
        }
        var totalCharacters = specialCharacters[0].concat(numericCharacters[0], lowercaseCharacters[0], uppercaseCharacters[0]);
        for (var k = 0; k < characterNumber; k++) {
        var randomValue = Math.floor(Math.random() * totalCharacters.length);
        console.log(totalCharacters);
        var values = totalCharacters[randomValue[i]];
        console.log(values[i]);
        }

      }
    }      
    function additionalConditions() {
      var characterTypes = [
        {q: "special characters", varName: true},
        {q: "numeric characters", varName: true},
        {q: "lowercase characters", varName: true},
        {q: "uppercase characters", varName: true}]
        console.log(characterTypes.length)
        
      for (var i = 0; i < characterTypes.length; i++) {
        console.log(characterTypes.length)
        characterTypes[i].varName = confirm("Do you want to use " + characterTypes[i].q + "?");
        console.log(characterTypes[i]);
      }
    }

//additionalConditions: function() {}
  //var specialCharacters = confirm("Do you want to use special characters?");
  //var numericCharacters = confirm("Do you want to use numeric characters?");
  //var lowercaseCharacters = confirm("Do you want to use lowercase alphabetic characters?");
 // var uppercaseCharacters = confirm("Do you want to use uppercase alphabetic characters?");



//var CharacterTypes = [
 // { specialCharacters, "special characters"},
 // { numericCharacters, "numeric characters"},
 // { lowercaseCharacters, "lowercase characters"},
 // { uppercaseCharacters, "uppercase characters}"}
//];
  // conditionsPassword();
//}

//function conditionsPassword() {
  //var characterNumber = parseInt(characterInput);



 // } else { alert("Your response is not appropriate. Choose a value between 8-120 for password length.");

 //// }
//}
//}
  //console.log(characterInput);
//  console.log(characterNumber);
 // while (characterNumber > 7 || characterNumber < 121 || (Number.isInteger(characterNumber)) == true) {
    
    
 //// }

  
 

 // for (var i = 0; i < this.characterNumber; i++) {
   // var value = Math.random();
    //console.log(value);

  

//do{
 //   var selection = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
//}while(isNaN(selection) || selection > 100 || selection < 1);





//" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"