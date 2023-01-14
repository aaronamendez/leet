/*
Count Instances of a Letter in a String
Examples:   
    charCount("a", "edabit") ➞ 1

    charCount("c", "Chamber of secrets") ➞ 1

    charCount("b", "big fat bubble") ➞ 4
*/

function countLetters(letter, word) {
	let arr = word.split('');
	let count = 0;
	for (let char of arr) {
		if (char === letter) count++;
	}
	return count;
}

console.log(countLetters('a', 'edabit')); // 1
console.log(countLetters('c', 'Chamber of secrets')); // 1
console.log(countLetters('b', 'big fat bubble')); // 4
