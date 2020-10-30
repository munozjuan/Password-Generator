// Assignment Code
var generateBtn = document.querySelector("#generate");
// assinging varibles 
var numbers = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength;
var checkUppercase;
var numberCheck;
var checkSpecial;


//first I want to make sure I ask for the length of the password
function chooseLenght(){
  passwordLength = prompt("How many characters would you like your password to be? (between 8-128 characters)");

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
      chooseLenght();
    }else{
    alert("The next screens will ask you what types of characters you want in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
  }

  //function to see if they want uppercase
function showUppercase(){
  checkUppercase = prompt("Would you like uppercare letters?  \n(Yes or No)");
    checkUppercase = checkUppercase.toLowerCase();

    //makes sure you answer the question
    if (checkUppercase === null || checkUppercase ===""){
      alert("Would you like uppercare letters?\n(Yes or No)" ); // asks again if user tries to submit before choosing yes or no
      showUppercase();

    }else if (checkUppercase === "yes" || checkUppercase ==="y"){ // checks to see if user states yes === is a strictequality operator
      checkUppercase = true;
      return checkUppercase;

    }else if (checkUppercase === "no" || checkUppercase ==="n"){ // checks to see if user states no
      checkUppercase = false;
      return checkUppercase;
    }else {
      alert("Would you like uppercare letters?  \n(Yes or No)"); //re-asking the question if user types something other than "yes" or "no"
      showUppercase();
    }
    return checkUppercase;

}

//check to see if user wants to use numbers in the password
function addNumbers(){
  numberCheck = prompt("Numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();//this method converts a string to lowercase letters
    if (numberCheck === null || numberCheck === ""){ //null represents the intentional absence of any object value/ this is treated as falsy for boolean operations
      alert("Numbers in your password? \n(Yes or No)");
      addNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Numbers in your password? \n(Yes or No)");
      addNumbers();
    }
    return numberCheck;
}

//Function to see if user wants special char
function determineSpecial(){
  checkSpecial = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    checkSpecial = checkSpecial.toLowerCase();

    if (checkSpecial === null || checkSpecial === ""){
      alert("Do you want to include special characters in your password? \n(Yes or No)");
      determineSpecial();

    }else if (checkSpecial === "yes" || checkSpecial ==="y"){
      checkSpecial = true;
      return checkSpecial;

    }else if (checkSpecial === "no" || checkSpecial ==="n"){
      checkSpecial = false;
      return checkSpecial;
    
    }else {
      alert("Do you want to include special characters in your password? \n(Yes or No)");
      determineSpecial();
    }
    return checkSpecial;
}

// function to generate password
function generatePassword(){
  chooseLenght();
  console.log(passwordLength);
  showUppercase();
  console.log(checkUppercase);
  addNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(checkSpecial);

  //use if & else if statments to make new password

  var characters = lowercase;
  var password = "";
  if(checkUppercase && numberCheck && checkSpecial){
    characters += uppercase + numbers + specialCharacter;
  
  }else if(checkUppercase && numberCheck){
    characters += numbers + specialCharacter;

  }else if(numberCheck && checkSpecial){
    characters += numbers + specialCharacter;

  }else if(checkUppercase && checkSpecial){
    characters += uppercase + specialCharacter;

  }else if(checkUppercase){
    characters += uppercase;

  }else if(numberCheck){
    characters += numbers;

  }else if(checkSpecial){
    characters += specialCharacter;

  }else{
    characters === lowercase;
  }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

  
// Write password to the #password input

function writePassword() {
  var passwordNew = "";
  passwordNew = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordNew;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
