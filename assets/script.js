var generateBtn = document.querySelector("#generate");

// declaring the function to generate the password
function generatePassword() {
  let passwordCharacters = '';
  
  // sets the max and min for the length of the password
  let passwordCriteria = {
    min: 8,
    max: 128
  }
 
  // provides the user a prompt to select how long they would like their password to be and console logs it
  let passwordLength = prompt("How long would you like your password to be?");
  console.log(passwordLength);

  // sets an alert if the user chooses a password length below the minimum benchmark, and resets the application
  if (passwordLength < passwordCriteria.min) {
    alert("Password must be minimum of 8 characters")
    return null;
  }

  // sets an alert if the user chooses a password length above the maximum benchmark, and resets the application
  if (passwordLength > passwordCriteria.max) {
    alert("Password must be maximum of 128 characters")
    return null;
  }

  // sets the variables for each individua criteria the user can select from
  const passwordNumbers = "0123456789";
  const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
  const passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~:";

  // provides the prompt for the user to decide if they would like to include numbers or not
  let numbersTag = confirm("Would you like to include numbers in your password?");
  if (numbersTag === true) {
    passwordCharacters += passwordNumbers;
  }

  // provides the prompt for the user to decide if they would like to include lowercase letters or not
  let lowercaseTag = confirm("Would you like to include lowercase letters in your password?");
  if (lowercaseTag === true) {
    passwordCharacters += passwordLowercase;
  }

  // provides the prompt for the user to decide if they would like to include uppercase letters or not
  let uppercaseTag = confirm("Would you like to include uppercase letters in your password?");
  if (uppercaseTag === true) {
    passwordCharacters += passwordUppercase;
  }

  // provides the prompt for the user to decide if they would like to include special characters or not
  let specialTag = confirm("Would you like to include special characters in your password?");
  if (specialTag === true) {
    passwordCharacters += passwordSpecial;
  }

  // sets an alert to respond if the user doesn't select yes to any of the criteria, and resets the application
  if(numbersTag !== true && lowercaseTag !== true && uppercaseTag !== true && specialTag !== true) {
    alert("You must choose to include at least one criteria to create a valid password");
    return null;
  }

  // for loop set to calculate the password with all the selected criteria and selected length the user asked for
  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  
  // calculated password returned here
  return password;
}

// Write password to the #password input, calling the function to generate the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

