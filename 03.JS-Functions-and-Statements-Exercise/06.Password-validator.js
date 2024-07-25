function passwordValidator(password) {
    function hasCorrectLength(pass) {
      // The length should be 6 - 10 characters (inclusive)
      const minLength = 6;
      const maxLength = 10;
      return pass.length >= minLength && pass.length <= maxLength;
    }
  
    function hasValidCharacters(pass) {
      // It should consist only of letters and digits
      const regex = /^[A-Za-z0-9]+$/g;
      return regex.test(pass);
    }
  
    function hasAtLeastTwoDigits(pass) {
      const minLength = 2;
      const regex = /[0-9]/g;
      return pass.match(regex)?.length >= minLength;
    }
  
    function getMessages(password) {
      const messages = [];
  
      if (!hasCorrectLength(password)) {
        messages.push("Password must be between 6 and 10 characters");
      }
  
      if (!hasValidCharacters(password)) {
        messages.push("Password must consist only of letters and digits");
      }
  
      if (!hasAtLeastTwoDigits(password)) {
        messages.push("Password must have at least 2 digits");
      }
  
      if (!messages) {
        messages.push("Password is valid");
      }
  
      return messages;
    }
  
    getMessages(password).forEach((msg) => console.log(msg));
  }
  
  passwordValidator("Pa$s$s"); // invalid
  console.log("---");
  passwordValidator("MyPass123"); // valid

  function validatePassword(password){

    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) { // Checks if password consist only of letters and digits
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    let digitCount = password.split('').filter(char => /\d/.test(char)).length;

    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }    
}

validatePassword('Pa$s$s')