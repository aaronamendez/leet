class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
/*

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

*/

function countGoodNodes(root) {
	if (!root) return 0;
	let counter = 0;
	function helper(node, values) {
		if (!node) return;
		let count = 0;
		for (let i = 0; i < values.length; i++) {
			if (values[i] > node.val) {
				break;
			}
			if (i === values.length - 1) {
				count++;
			}
		}
		if (count > 0) counter++;
		if (node.left) helper(node.left, [...values, node.val]);
		if (node.right) helper(node.right, [...values, node.val]);
	}

	helper(root, [root.val]);

	return counter;
}

/*
          3
      1      4
    3      1    5

*/

let tree = new TreeNode(
	3,
	new TreeNode(1, new TreeNode(3)),
	new TreeNode(4, new TreeNode(1), new TreeNode(5))
);

console.log(countGoodNodes(tree), 4);
