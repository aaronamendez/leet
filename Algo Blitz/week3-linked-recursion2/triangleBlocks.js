/*
Triangle of Blocks, the top row has 1 block, and every row after that as 1 + x block until its based.
Examples:
    triangle(2) = 3 => 1 + 2 = 3
    triangle(3) = 6 => 1 + 2 + 3 = 6
    triangle(5) = 15 => 1 + 2 + 3 + 4 + 5 = 15 
*/

function triangleOfBlocks(numOfRows) {
	if (!numOfRows) return 0;
	let total = 0;
	total += numOfRows;
	return total + triangleOfBlocks(numOfRows - 1);
}

console.log(triangleOfBlocks(2)); // => 3
console.log(triangleOfBlocks(3)); // => 6
console.log(triangleOfBlocks(5)); // => 15
console.log(triangleOfBlocks(12)); // => 78
console.log(triangleOfBlocks(7)); // => 28
console.log(triangleOfBlocks(6)); // => 21
console.log(triangleOfBlocks(5)); // => 15
console.log(triangleOfBlocks(4)); // => 10
console.log(triangleOfBlocks(3)); // => 6
console.log(triangleOfBlocks(2)); // => 3
console.log(triangleOfBlocks(1)); // => 1
console.log(triangleOfBlocks(0)); // => 0
