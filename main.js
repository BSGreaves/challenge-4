//What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

// var oneThruTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < oneThruTen.length; i++) {
// }

var oneThruTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var success = 0;
var currentNum = 1;

while (success < 10) {
	for (let i = 0; i < oneThruTen.length; i++) {
		var remainder = currentNum % oneThruTen[i];
		if (remainder === 0) {
			success++;
			remainder = 0;
		}
	}
	if (success === 10) {
		console.log("The smallest number you can divide by the numbers 1 through 10 without a remainder is", currentNum);
	} else {
		currentNum++;
		success = 0;
	}
}

