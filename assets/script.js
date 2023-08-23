var generateBtn = document.querySelector("#generate");
let passwordCharacters;

function generatePassword() {
  let passwordCriteria = {
    min: 8,
    max: 128
  };
 
  let passwordLength = prompt("How long would you like your password to be?");
  console.log(passwordLength);

  if (passwordLength < passwordCriteria.min) {
    alert("Password must be minimum of 8 characters")
    return
  };
  if (passwordLength > passwordCriteria.max) {
    alert("Password must be maximum of 128 characters")
    return
  };

  let passwordNumbers = "0123456789";
  let passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
  let passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~:";

  let numbersTag = confirm("Would you like to include numbers in your password?");
  if (numbersTag === true) {
    passwordCharacters += passwordNumbers;
  };

  let lowercaseTag = confirm("Would you like to include lowercase letters in your password?");
  if (lowercaseTag === true) {
    passwordCharacters += passwordLowercase;
  };

  let uppercaseTag = confirm("Would you like to include uppercase letters in your password?");
  if (uppercaseTag === true) {
    passwordCharacters += passwordUppercase;
  };

  let specialTag = confirm("Would you like to include special characters in your password?");
  if (specialTag === true) {
    passwordCharacters += passwordSpecial;
  };

  if(numbersTag !== true && lowercaseTag !== true && uppercaseTag !== true && specialTag !== true) {
    alert("You must choose to include at least one criteria to create a valid password");
    return
  };

  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordLength));
  };
  
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

