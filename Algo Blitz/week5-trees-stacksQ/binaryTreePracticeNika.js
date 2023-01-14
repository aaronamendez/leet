/*
In this task, we will practice working through a binary tree problem.
Prompt
Given an org chart of a company, employee A, and employee B: figure out if employee B is a direct report to employee A.
Employee B must report directly to employee A - this occurs if Employee A is the parent node of Employee B.
Employees in our tree are represented as integer values (eg: 1).
Return true if employee A manages employee B, false if not.
Expected Runtime
O(n), where n = # of nodes in tree, worst case

Define a DFS helper to traverse your tree.
Traverse through the tree until you find employee A.
Once you find employee A, check it's children for employee B.
If employee B is present, return true. Otherwise, return false

*/
class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
let tree1 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
let tree2 = new TreeNode(
	1,
	new TreeNode(1),
	new TreeNode(2, new TreeNode(3), new TreeNode(4))
);
let tree3 = new TreeNode(
	1,
	new TreeNode(1),
	new TreeNode(2, new TreeNode(5), new TreeNode(9))
);

function findDirectReport(root, a, b) {
	if (!root) {
		return false;
	}
	let stack = [root];
	while (stack.length > 0) {
		let currNode = stack.pop();
		if (currNode.left) stack.push(currNode.left);
		if (currNode.right) stack.push(currNode.right);
		if (currNode.value === a) {
			if (currNode.left && currNode.left.value === b) {
				return true;
			}
			if (currNode.right && currNode.right.value === b) {
				return true;
			}
		}
	}
	return false;
}

function findDirectReport2(root, a, b) {
	if (!root) {
		return false;
	}
	if (root.value === a) {
		if (root.left && root.left.value === b) {
			return true;
		}
		if (root.right && root.right.value === b) {
			return true;
		}
	}
	return (
		findDirectReport(root.left, a, b) || findDirectReport(root.right, a, b)
	);
}

/**
 *    1
 * 3    2
 */

// Examples
// [1, 3, 2], A = 1, B = 2 => true
// [1, 1, 2, null, null, 3, 4], A = 3, B = 4 => false
// [1, 1, 2, null, null, 5, 9], A = 1, B = 9 => false

// console.log(findDirectReport(tree1, 1, 2 ), true)
// console.log(findDirectReport(tree2,3,4), false)
// console.log(findDirectReport(tree3,1,9), false)
console.log(findDirectReport2(tree1, 1, 2), true);
console.log(findDirectReport2(tree2, 3, 4), false);
console.log(findDirectReport2(tree3, 1, 9), false);
