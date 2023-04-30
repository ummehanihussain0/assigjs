function rollDice() {
	let diceValue = Math.floor(Math.random() * 6) + 1;
	let outputDiv = document.getElementById("output");
	
	outputDiv.innerHTML = "<h2>You rolled a " + diceValue + "!</h2>";
}
