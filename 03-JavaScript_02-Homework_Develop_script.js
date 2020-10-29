// Assignment Code
var generateBtn = document.querySelector("#generate");
// assinging varibles 
var numbers = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength;
var checkUppercase;
var checkLowercase;
var checkSpecial;


//first I want to make sure I ask for the length of the password
function chooseLenght(){
  passwordLength = prompt("How many characters would you like your password to be? (between 8-128 characters)  ");

  //if statement to check length is between 8-128 
  //first I must check it should not be less than 8
  if (passwordLength<8){
    alert("Password needs to be 8-128 characters!"); //this alerts if it's below 8 chars
    chooseLenght();

//makd sure password is less than 128 chars
  }else if(passwordLength>128){
      alert("Password needs to be 8-128 characters!");
      chooseLenght();
      //if they do not choose any leght this will display aka not a number
    }else if (isNaN(passwordLength)){
      alert("Password needs to be 8-128 characters!");
      determineLength();
    }else{
    alert("The next screens will ask you what types of characters you want in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
  }

  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
