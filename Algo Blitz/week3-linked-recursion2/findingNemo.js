/*
Find the index where "Nemo" exists
Example
    "I am finding Nemo" => 4
    "Nemo is me" => 1
    "I Nemo am" => 2
*/

function findNemo(str) {
	let split = str.split(' ');
	for (let elem in split) {
		if (split[elem] === 'Nemo') return +elem + 1;
	}
	return "I can't find Nemo :(";
}
// console.log(findNemo("I am finding Nemo")) // 4
// console.log(findNemo("I am finding")) // "I can't find Nemo :("
