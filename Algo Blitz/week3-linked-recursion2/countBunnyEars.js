/*
Count how many Bunny ears their are given the number of Bunnies (Recursively)
Examples:
    bunnyEars(3) = 6
    bunnyEars(5) = 10
*/

function countBunnyEars(num) {
	if (!num) return 0;
	let ears = 2;
	return ears + countBunnyEars(num - 1);
}

console.log(countBunnyEars(3)); // => 6
console.log(countBunnyEars(6)); // => 12
console.log(countBunnyEars(9)); // => 18
