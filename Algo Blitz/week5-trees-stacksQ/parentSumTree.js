class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*
Given a binary tree, modify each node value to be the sum of itself and its parent node.
Return the root node of the modified tree.
*/
let tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(4, new TreeNode(6), new TreeNode(7))
);

/* EXAMPLE 1
          1
      2       4
     should turn into
          1
      3       5
*/

/*  EXAMPLE 2
          1
      2       4 
    1   3   6   7
     should turn into
          1
      3       5
    4   6   11   12
*/

function parentSumTree(tree) {
	if (!tree) return;
	let parentVal = tree.value;
	if (tree.left) {
		tree.left.value += parentVal;
		// console.log(tree.left.value)
		parentSumTree(tree.left);
	}
	if (tree.right) {
		tree.right.value += parentVal;
		// console.log(tree.right.value)
		parentSumTree(tree.right);
	}
	return tree;
}

console.table(parentSumTree(tree));
