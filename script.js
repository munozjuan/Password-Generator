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

  //function to see if they want uppercase
function showUppercase(){
  checkUppercase = prompt("Would you like uppercare letters?  \n(Yes or No)");
    checkUppercase = checkUppercase.toLowerCase();

    //makes sure you answer the question
    if (checkUppercase === null || checkUppercase ===""){
      alert("Yes or No");
      showUppercase();

    }else if (checkUppercase === "yes" || checkUppercase ==="y"){
      checkUppercase = true;
      return checkUppercase;

    }else if (checkUppercase === "no" || checkUppercase ==="n"){
      checkUppercase = false;
      return checkUppercase;
    }else {
      alert("Yes or No");
      showUppercase();
    }
    return checkUppercase;

}

//check to see if user wants to use numbers in the password
function addNumbers(){
  numbers = prompt("Numbers in your password? \n(Yes or No)");
    numbers = numbers.toLowerCase();

    if (numbers === null || numbers === ""){
      alert("Yes or No");
      addNumbers();

    }else if (numbers === "yes" || numbers ==="y"){
      numbers = true;
      return numbers;

    }else if (numbers === "no" || numbers ==="n"){
      numbers = false;
      return numbers;
    
    }else {
      alert("Yes or No");
      addNumbers();
    }
    return numbers;
}

//Function to see if user wants special char
function determineSpecial(){
  checkSpecial = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    checkSpecial = scheckSpecial.toLowerCase();

    if (checkSpecial === null || checkSpecial === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (checkSpecial === "yes" || checkSpecial ==="y"){
      checkSpecial = true;
      return checkSpecial;

    }else if (checkSpecial === "no" || checkSpecial ==="n"){
      checkSpecial = false;
      return checkSpecial;
    
    }else {
      alert("Please answer Yes or No");
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
  console.log(numbers);
  determineSpecial();
  console.log(checkSpecial);

  //

  var characters = lowercase;
  var password = "";
  if(checkUppercase && numbers && checkSpecial){
    characters += uppercase + numbers + specialCharacter;
  
  }else if(checkUppercase && numbers){
    characters += numbers + specialCharacter;

  }else if(checkUppercase && specialCharacter){
    characters += uppercase + specialCharacter;

  }else if(checkUppercase){
    characters += uppercase;
    
  }



}


  
// Write password to the #password input

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
