function generateRandomNumber() {
	let randomNumber = Math.floor(Math.random() * 100) + 1;
	let outputDiv = document.getElementById("output");
	
	outputDiv.innerHTML = "<h2>Your random number is: " + randomNumber + "</h2>";
}
