var input = prompt("Enter some text:");
var titleInput = input.split(" ").map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");
document.write("The input in title case is: " + titleInput + "<br><br>");