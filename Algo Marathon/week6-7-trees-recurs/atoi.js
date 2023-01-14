/*
Given a base-10 integer as a string, parse the integer and return it as an int. This problem can be done iteratively and recursively and it's worth doing both!

    atoi("123") == 123
    atoi("4") == 4
    atoi("007") == 7
    atoi("-1") == -1
*/

function atoiIterative(string) {
	if (!string.length) return 0;
	return parseInt(string);
}

function atoi(string) {
	if (!string.length) return 0;
}

console.log(atoi('123'));
console.log(atoi('4'));
console.log(atoi('007'));
console.log(atoi('-1'));
