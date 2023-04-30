function checkPassword(password) {
    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      return false;
    }
    var firstCharacter = password.charAt(0);
    if (!isNaN(parseInt(firstCharacter))) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }
  
    return true;
  }
  
  var validPassword = false;
  while (!validPassword) {
    var password = prompt("Enter a password:");
    validPassword = checkPassword(password);
    if (!validPassword) {
      alert("Please enter a valid password.");
    }
  }
  alert("Password is valid.");