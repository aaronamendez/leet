/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer newFlowers, return true if all newFlowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Input: flowerbed = [0,0,1], n = 1
Output: true

*/

function canPlantFlowers(flowers, n) {
	let p = 0;
	let b = 3;
	if (flowers.length <= 3) b = 2;
	for (let elem of flowers) {
		if (elem === 1) p += 1;
	}
	return (flowers.length - p) / b >= n;
}

console.log(canPlantFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlantFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlantFlowers([0, 0, 1], 1)); // true
console.log(canPlantFlowers([0, 0, 1], 1)); // true
