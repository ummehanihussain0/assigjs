function calculate() {
	let num = parseFloat(document.getElementById("numberInput").value);
	let outputDiv = document.getElementById("output");
	
	if (isNaN(num)) {
		outputDiv.innerHTML = "<p>Please enter a valid number.</p>";
		return;
	}
	
	outputDiv.innerHTML = "<h2>Absolute value of " + num + " is " + Math.abs(num) + "</h2>";
}
