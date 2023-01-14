/*

Stacks & Queues
Hashtables

*/

/*
Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in that array.

The first number in the output array should be the first number in the range, while the second number should be the last number in the range. 

A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers don't need to be sorted or adjacent in the input array in order to form a range. 

You can assume that there will only be one largest range 

Sample Input: 
array = [1, 11, 3, [0=b], 15, 5, 2, 4, 10, [7=e], 12, 6] 
Sample Output:
[0, 7] 

input: array
output: [beginning, end]

<-->

*/

// PY

// def largestRange(array):
//   bestRange = []
//   longestLength = 0
//   nums = {}
//   // 1. This one adds all elements to num
//   for num in array:
//     nums[num] = True
//    2.
//   for num in array:
//     if not nums[num]:
//       continue
//     nums[num] = False
//     currentLength = 1
//     left = num - 1
//     right = num + 1

//     while left in nums:
//       nums[left] = False
//       currentLength += 1
//       left -= 1
//     while right in nums:
//       nums[right] = False
//       currentLength += 1
//       right += 1

//     if currentLength > longestLength:
//       longestLength = currentLength
//       bestRange = [left + 1, right - 1]
//   return bestRange

function largestRangeTwo(arr) {
	let bestRange = []; // [0, 7]
	let longestLength = 0; // 7
	let nums = new Map(); // {...arr, true} --> from line 70

	for (let elem of arr) {
		nums.set(elem, true); // 0..length
	}
	//[1=f, 11=t, 3=t, 0=f, 15=t, 5=t, 2=f, 4=t, 10=t, 7=t, 12=t, 6=t]
	for (let num of arr) {
		if (nums.get(num) === false) {
			// 1 === true, so skip
			continue;
		}
		//looks at both "sides" of arr element to do flag logic
		nums.set(num, false); // 1t => 1f. -> update value from true to false;
		let currentLength = 1; // 1 => 2 => 3 (line 90)
		let left = num - 1; // 0
		let right = num + 1; // 2

		while (nums.get(left)) {
			// true **value
			nums.set(left, false); // 0t => 0f
			currentLength += 1; // 1 => 2
			left -= 1; // 0 => -1
		}
		while (nums.get(right)) {
			// true -- do we have right? yes, it's true.
			nums.set(right, false); // 2t => 2f
			currentLength += 1; // 2 => 3
			right += 1; // 2 => 3
		}
		if (currentLength > longestLength) {
			longestLength = currentLength;
			bestRange = [left + 1, right - 1];
		}
	}
	return bestRange;
}

// console.log(largestRangeTwo([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));

class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*
binary tree
         1 <-- 
      2     3 <--
    4   5  6  7 <--

    1 <--
  2 <-- 
  [1, 2]

  output :[1, 3, 7]
*/

// BFS
function rightMostNodes(root) {
	let queue = root ? [root] : []; // 1
	let result = [];

	while (queue.length) {
		let size = queue.length; // 2
		for (let i = 0; i < size; i++) {
			// i = 1
			let curr = queue.shift(); // 3
			if (i === size - 1) result.push(curr.value); // 3
			if (curr.right) queue.push(curr.right);
			if (curr.left) queue.push(curr.left);
		}
	}
	return result;
}

let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let tree2 = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
let tree3 = null;
// console.log(sumBT(tree))

console.log(rightMostNodes(tree), [1, 3]);
console.log(rightMostNodes(tree2), [1, 3, 7]);
console.log(rightMostNodes(tree3), []);
