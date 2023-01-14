/*
Given a binary tree, return the in-order traversal of its nodes' values.
 You must use iterative approach.

InOrder-Traversal{
    Traverse the left subtree.
    Visit the root.
    Traverse the right subtree.
}
             1
           /   \
         2      3
        /      
      4    

// returns [4,2,1,3]

*/

class TreeNode {
	constructor(value = 0, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));

let result = [];
function inOrderTraversalRecursive(root) {
	if (!root) return;
	inOrderTraversal(root.left);
	result.push(root.value);
	inOrderTraversal(root.right);
	return result;
}

function DFSInOrder(root) {
	let stack = [];
	let result = [];
	let curr = root; // 4

	while (curr || stack.length > 0) {
		while (curr) {
			stack.push(curr);
			curr = curr.left;
		}
		curr = stack.pop(); // 3
		result.push(curr.value);
		curr = curr.right; // null
	}
	return result;
}
/*
 Given a binary tree, return the pre-order traversal of its nodes' values.
 You must use iterative approach.

Algorithm Preorder{
  Visit the root.
  Traverse the left subtree
  Traverse the right subtree,
}
            1
        2      3
    4   
    returns [1 , 2 , 4, 3]

*/
function DFSPreOrder(tree) {
	let stack = [];
	let result = [];
	let curr = tree; // null

	while (curr || stack.length > 0) {
		while (curr) {
			stack.push(curr);
			result.push(curr.value);
			curr = curr.left;
		}
		curr = stack.pop().right; //
	}
	return result;
}

// console.log(inOrderTraversalIterative(root))
// console.log(DFSPreOrder(tree))

let output = [];
function PreOrderRecursevly(root) {
	if (!root) return;
	result.push(root.value);
	inOrderTraversal(root.left);
	inOrderTraversal(root.right);
	return output;
}

// console.log(DFSPreOrder(tree))

/*

Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.


Example  for findMaxIndex:
input  [1] => return 0
input  [1,2,-1,10,3] => return 3
input [-1,-10, 0 ,-3] => return 2 
input [0,-10, 0 ,-3] => return 0



Example  for findMinIndex:
input  [1] => return 0
input  [1,2,-1,10,3] => return 2
input  [-1,-10, 0 ,-3] => return 1
input  [-10,-10, 0 ,-3] => return 0
Time: O(n) where n is the length of the array
Space: O(n) to store a call stack frame for each array index
[]
*/

function findMaxIndex(nums) {
	if (nums.length === 1) return 0;
	let max_index = 0;
	let max_num = -Infinity;

	function backtrack(i, nums) {
		if (i === nums.length) return max_index;
		if (nums[i] > max_num) {
			max_index = i;
			max_num = nums[i];
		}
		backtrack(i + 1, nums);
	}

	backtrack(0, nums);
	return max_index;
}

// console.log(findMaxIndex([1]), 0)
// console.log(findMaxIndex([1,2,-1,10,3]),3)
// console.log(findMaxIndex([-1,-10, 0 ,-3]),2)
// console.log(findMaxIndex([0,-10, 0 ,-3]),0)
// console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
// console.log(findMaxIndex([10, 20, 30]) == 2)
// console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)

function findMinIndex(nums) {
	if (nums.length === 1) return 0;
	let min_index = 0;
	let min_number = +Infinity;

	function backtrack(index, nums) {
		if (index === nums.length) return min_index;
		if (nums[index] < min_number) {
			min_index = index;
			min_number = nums[index];
		}
		backtrack(index + 1, nums);
	}
	backtrack(0, nums);
	return min_index;
}

// console.log(findMinIndex([1]), 0)
// console.log(findMinIndex([1,2,-1,10,3]),2)
// console.log(findMinIndex([-1,-10, 0 ,-3]),1)
// console.log(findMinIndex([0,-10, 0 ,-3]),1)
// console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4)
// console.log(findMinIndex([10, 20, 30]) == 0)
// console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)

function findMi(arr) {
	if (arr.length == 1) return 0;
	console.log(arr);
	let minIndex = findMi(arr.slice(1)) + 1;
	if (arr[0] <= arr[minIndex]) return 0;

	return minIndex;
}

// console.log(findMi([1,2,3,4]))
// console.log(findMi([0,-10, 0 ,-3]),1)
// console.log(findMi([12, 1234, 45, 67, 1]) == 4)
// console.log(findMi([10, 20, 30]) == 0)
// console.log(findMi([8, 6, 7, 5, 3, 7]) == 4)

/*
You have n tiles, where each tile has one letter tiles[i] printed on it.
Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

Example 1:
Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:
Input: tiles = "AAABBC"
Output: 188

Example 3:
Input: tiles = "V"
Output: 1

 AAB
 i
 if(path.length) add to the set 
 for loop
 path["A"]
 call a helper with a copy of the  path ["A"] and increase i 
*/

function numTilePossibilities(tiles) {
	let sequences = new Set();
	// let seq = "";

	function dfs(temp = '', tiles) {
		if (!sequences.has(temp)) {
			if (temp.length > 0) {
				sequences.add(temp);
			}
		}
		for (let i = 0; i < tiles.length; i++) {
			dfs(
				temp + tiles[i],
				tiles.substring(0, i) + tiles.substring(i + 1)
			);
		}
	}
	dfs('', tiles);
	return sequences;
}

console.log(numTilePossibilities('AAB'));
