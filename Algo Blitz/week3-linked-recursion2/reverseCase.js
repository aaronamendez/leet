/*
Reverse the case

Examples:

    reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
    reverseCase("MANY THANKS") ➞ "many thanks"
    reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
*/

function reverseCase(str) {
	let arr = str.split('');
	let newArr = [];
	for (let elem of arr) {
		if (elem === elem.toUpperCase()) {
			newArr.push(elem.toLowerCase());
		} else {
			newArr.push(elem.toUpperCase());
		}
	}
	return newArr.join('');
}

console.log(reverseCase('Happy Birthday'));
console.log(reverseCase('MANY THANKS'));
console.log(reverseCase('sPoNtAnEoUs'));
