// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var charCount = prompt("How many characters does your password need?");
  console.log("You password will contain " + charCount + " characters.");
  var charset = "abcdefghijklmnopqrstuvwxyz"; 
  
  //uppercase check
  var charuc = confirm("Would you like your password to contain uppercase letters? (Press okay for yes and cancel for no)");
  if (charuc = true) {
    console.log("You password will contain uppercase characters.");
    var charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    console.log("You password will not contain uppercase characters.");
  }
  //numeric check
  var charnum = confirm("Would you like your password to contain numbers? (Press okay for yes and cancel for no)");
  if (charnum = true) {
    console.log("You password will contain numbers.");
    charset = charset + "1234567890";
  }
  else {
    console.log("You password will not contain numbers.");
  }
  //special character check
  var charlc = confirm("Would you like your password to contain special characters? (Press okay for yes and cancel for no)");
  if (charlc = true) {
    console.log("You password will contain special characters.");
    charset = charset + "!@#$%^&*?";
  }
  else {
    console.log("You password will not contain special characters.");
  }

  for (var i= 0; i < charCount; i++){
    console.log(i);
    var passwordgen = charset.charAt(Math.floor(Math.random()*charset.length));
    console.log(password);
    
    password = password + passwordgen;
    console.log(password);
  }
  console.log("Character set is "+ charset);
  console.log("Password is "+ password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
