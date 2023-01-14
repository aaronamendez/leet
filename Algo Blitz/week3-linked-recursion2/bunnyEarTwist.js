/*
Return number of bunny ears where every even bunny (2..4..) has 3 ears and every odd bunny (1..3..) has the usual 2 (Recursively)
Examples:
    bunnyEarsTwist(2) = 5
    bunnyEarsTwist(3) = 7
    bunnyEarsTwist(5) = 12 -> 2 + 3 + 2 + 3 + 2 + 0
*/

function bunnyEarsTwist(int) {
	if (!int) return 0;
	let total = 0;
	if (int % 2 === 0) {
		total += 3;
	} else {
		total += 2;
	}
	return total + bunnyEarsTwist(int - 1);
}

console.log(bunnyEarsTwist(2)); // => 5
console.log(bunnyEarsTwist(3)); // => 7
console.log(bunnyEarsTwist(5)); // => 12
