var username = prompt("Enter a username:");
var specialChars = ["@", ".", ",", "!"];
var isValid = true;
for (var i = 0; i < specialChars.length; i++) {
  if (username.indexOf(specialChars[i]) !== -1) {
    isValid = false;
    break;
  }
}
if (!isValid) {
  alert("Please enter a valid username");
  username = prompt("Enter a username:");
}
document.write("Your username is: " + username + "<br><br>");