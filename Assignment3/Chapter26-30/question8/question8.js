userInput = prompt("Enter a number between 1 to 10");
document.write("User enters the number " + userInput);
secretNumber = Math.floor(Math.random() * 10) +1;
if (userInput == secretNumber) {
    document.write("Congratulations! You guessed the secret number!");
} else {
    document.write("Sorry, the secret number was " + secretNumber + " Try Again!");
}