class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
// /*
// Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.
// • Given an array: [-10,-3,0,5,9]

// returns:
//                 0
//                / \
//              -10   5
//                \    \
//                -3    9
// */

// function convertToTree(array) {

// }

// console.log(convertToTree([-10, -3, 0, 5, 9]))
/*
'''
Problem Statement

Given the root of a binary tree, collect a tree's nodes as if you were doing this:

Collect all the leaf nodes.
Remove all the leaf nodes.
Repeat until the tree is empty.

Return an array of arrays representing the values of the leaves at each iteration. See examples below.
Examples
Input:
          1
         / \
        2   3
       / \     
      4   5   

Output:
[[4, 5, 3], [2], [1]]

'''
*/

function dfs(root) {
	if (!root) return;
	let result = [];
	let subArr = [];
	function helper(node) {
		if (!node) return;
		let left = helper(node.left);
		let right = helper(node.right);
		if (!node.left && !node.right) {
			subArr.push(node.val);
			node = null;
		}
	}
	helper(root);
	result.push(subArr);
	return result;
}

let tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3)
);

console.log(dfs(tree));
