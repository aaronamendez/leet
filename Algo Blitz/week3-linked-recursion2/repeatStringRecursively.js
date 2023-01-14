/*
Repeat a string N times with Recursion
Example:
    "ab", 3 => "ababab"
    "kiwi", 1 => "kiwi"
*/

function repeatStringRecursively(str, n) {
	if (n === 0) return ' ';
	return str + repeatStringRecursively(str, n - 1);
}

// console.log(repeatStringRecursively("ab", 3))
