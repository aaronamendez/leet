/*
Convert array of percentage as strings to decimals equivalents.
Example:
  ["1%", "2%", "3%"] ➞ [0.01, 0.02, 0.03]
  ["45%", "32%", "97%", "33%"] ➞ [0.45, 0.32, 0.97, 0.33]
  ["33%", "98.1%", "56.44%", "100%"] ➞ [0.33, 0.981, 0.5644, 1]
*/

function percentToDecimal(arr) {
	let newArr = [];

	for (let elem of arr) {
		let without = elem.slice(0, -1);
		newArr.push(`${without / 100}`);
	}

	return newArr;
}

console.log(percentToDecimal(['1%', '2%'])); // => ["0.01", "0.02"]
console.log(percentToDecimal(['45%', '32%'])); // => ["0.45", "0.32"]
console.log(percentToDecimal(['98.1%', '56.44%'])); // => ["0.981", "0.5644"]
