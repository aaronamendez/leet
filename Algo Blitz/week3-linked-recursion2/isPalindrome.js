/*
Is The String a Palindrome? Recursively
Examples:
    isPalindrome("madam") ➞ true
    isPalindrome("adieu") ➞ false
    isPalindrome("rotor") ➞ true
*/

function isPalindrome(str) {
	if (!str) return null;
	if (str.length === 1) {
		return true;
	} else if (str[str.length - 1] !== str[0]) {
		return false;
	} else {
		let removeEnding = str.slice(0, -1);
		let removeBeginning = removeEnding.substring(1);
		return isPalindrome(removeBeginning);
	}
}

console.log(isPalindrome('madam')); // => true
console.log(isPalindrome('adieu')); // => false
console.log(isPalindrome('rotor')); // => true
console.log(isPalindrome('wow')); // => true
