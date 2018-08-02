var age = prompt("How old are you?");

if (age < 0 ) {
	alert ("your age is a negative number");
	console.log ("your age is negative");
}

else if (age == 21) {
	alert ("Happy 21st birthday");
	console.log ("Happy 21st birthday");
}
else if((age % 2) === 1) {
	alert ("your age is odd");
	console.log ("your age is odd");
}

else if (age % Math.sqrt(age) === 0) {
	alert ("your age is a perfect square");
	console.log ("your age is a perfect square");
}
