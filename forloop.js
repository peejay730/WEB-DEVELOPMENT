console.log("Print all the numbers between -10 and 19");

/*var num = -10;

while(num<=19) {
	console.log(num);
	num += 1;
}*/

for (var num = -10; num <=19; num+=1) {
	console.log(num);
}

console.log("Print all even numbers between 10 and 40");

/*var even = 10;

while(even<=40) {
	console.log(even);
	even += 2;
}*/

for (var even = 10; even <=40; even+=2) {
	console.log(even);
}

console.log("Print all odd numbers between 300 and 333");

/*var odd = 300;

while(odd<=333) {
	if(odd % 2 !== 0) {
		console.log(odd);
	}
	odd += 1;
}*/

for (var odd = 300; odd <= 333; odd +=1) {
	if (odd % 2 !==0) {
		console.log(odd);
	}
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

/*var divide = 5;

while(divide <= 50){
	if(divide % 5 === 0 && divide % 3 === 0){
		console.log(divide);
	}
	divide+=1;
}*/

for (var divide = 5; divide <=50; divide+=1) {
	if (divide % 5 === 0 && divide % 3 ===0) {
		console.log(divide);
	}
}
	
