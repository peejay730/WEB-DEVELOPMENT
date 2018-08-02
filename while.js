console.log("Print all the numbers between -10 and 19");

var num = -10;

while(num<=19) {
	console.log(num);
	num += 1;
}

console.log("Print all even numbers between 10 and 40");

var even = 10;

while(even<=40) {
	console.log(even);
	even += 2;
}

console.log("Print all odd numbers between 300 and 333");

var odd = 300;

while(odd<=333) {
	if(odd % 2 !== 0) {
		console.log(odd);
	}
	odd += 1;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

var divide = 5;

while(divide <= 50){
	if(divide % 5 === 0 && divide % 3 === 0){
		console.log(divide);
	}
	divide+=1;
}
	
