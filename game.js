var secretNumber = 9;
var guess = prompt("Guess a number");

if (Number(guess) === secretNumber) {
	alert ("YOU GOT IT RIGHT!");
}
else if(Number(guess) > secretNumber) {
	alert ("TOO HIGH! Guess again");
}
else if(Number(guess) < secretNumber) {
	alert ("TOO LOW! Guess again");
}