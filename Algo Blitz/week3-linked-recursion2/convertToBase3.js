/*
Ternary is a base-3 number system that uses the digits 0, 1, and 2, similar to how decimal uses 0-9 and binary uses 0 and 1.
Given an integer, write a function that converts the number into its base 3 representation. Return the result as a string.
Examples:
    convertToBase3(0) == "0"
    convertToBase3(1) == "1"
    convertToBase3(2) == "2"
    convertToBase3(3) == "10"
    convertToBase3(4) == "11"
    convertToBase3(92) == "10102"
    convertToBase3(-5) == "-12"
*/

function convertToBase3(int) {
	if (int < 0) {
		return '-' + helper(int * -1);
	}
	function helper(num) {
		if (!num) return '0';
		let string = '';
		let base = Math.floor(num % 3);
		string += base;
		return String(Number(parseInt(convertToBase3(num / 3)) + string));
	}
	return helper(int);
}

// number starts at 3
// function convertToBase3(number) {

//   function helper(number) {
//     const currNum = number % 3;
//     const restToProcess = (number - currNum) / 3;
//     return (restToProcess !== 0 ? helper(restToProcess) : '') + currNum.toString();
//   }

//   if (number < 0) {
//     return "-" + helper(number * -1);
//   }
//   return helper(number);
// }

// console.log(convertToBase3(0)) // => "0"
// console.log(convertToBase3(1)) // => "1"
// console.log(convertToBase3(2)) // => "2"
// console.log(convertToBase3(3)) // => "10"
// console.log(convertToBase3(4)) // => "11"
// console.log(convertToBase3(92)) // => "10102"
// console.log(convertToBase3(-5)) // => "-12"
