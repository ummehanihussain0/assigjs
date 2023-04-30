function tossCoin() {
	let coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
	let outputDiv = document.getElementById("output");
	
	outputDiv.innerHTML = "<h2>You flipped a " + coinValue + "!</h2>";
}
