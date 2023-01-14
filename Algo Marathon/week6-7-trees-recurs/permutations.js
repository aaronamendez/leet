class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

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

// console.log(canPlantFlowers([1,0,0,0,1], 1)) // true
// console.log(canPlantFlowers([1,0,0,0,1], 2)) // false
// console.log(canPlantFlowers([0,0,1], 1)) // true
// console.log(canPlantFlowers([0,0,1], 1)) // true

// Given an array of unique numbers (nums), find all possible unique combinations of those numbers.

// Input: [1, 2, 3]
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

// Be aware of the sort order of the output. The sets should be in effectively lexicographic order: [1] before [1, 2], [2] before [3]. Each array should itself be sorted: [1, 2, 3], not [3, 1, 2].

function solution(nums) {
	let result = [];
	function helper(perm = [], index = 0) {
		if (perm.length > nums.length) {
			return;
		} else if (perm.length <= nums.length) {
			if (isSorted(perm)) result.push([...perm]);
			// result.push([...perm])
		}
		for (let i = index; i < nums.length; i++) {
			if (!perm.includes(nums[i])) {
				perm.push(nums[i]);
				helper(perm, index + 1);
				perm.pop();
			} else {
				continue;
			}
		}
	}
	helper();
	return result;
}

function isSorted(array) {
	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) return false;
	}
	return true;
}

console.log(solution([1, 2, 3]));
