var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
searchItem(userInput);
function searchItem(item) {
  var searchItem = item.toLowerCase();
  for (var i = 0; i < A.length; i++) {
    var currentItem = A[i].toLowerCase();
    if (searchItem === currentItem) {
        alert(item + " is available at index " + i + " in our bakery.");
      return;
    }
  }

  alert(item + " is not found in our bakery.");
}