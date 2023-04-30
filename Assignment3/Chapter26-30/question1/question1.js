function calculate() {
	let num = parseInt(document.getElementById("numberInput").value);
	let outputDiv = document.getElementById("output");
	
	if (isNaN(num) || num <= 0) {
		outputDiv.innerHTML = "<p>Please enter a positive integer.</p>";
		return;
	}
	
	outputDiv.innerHTML = "<h2>Number: " + num + "</h2>";
	outputDiv.innerHTML += "<h2>Round off value: " + Math.round(num) + "</h2>";
	outputDiv.innerHTML += "<h2>Floor value: " + Math.floor(num) + "</h2>";
	outputDiv.innerHTML += "<h2>Ceil value: " + Math.ceil(num) + "</h2>";
}
