class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

function branchSums(root) {
	let result = [];

	function helper(root, counter = 0) {
		if (!root) return;
		counter += root.value;
		if (!root.left && !root.right) {
			result.push(counter);
		} else {
			if (root.left) helper(root.left, counter);
			if (root.right) helper(root.right, counter);
		}
	}
	helper(root);
	return result;
}

let tree = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(4, new TreeNode(8), new TreeNode(9)),
		new TreeNode(5, new TreeNode(10))
	),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(branchSums(tree), [15, 16, 18, 10, 11]);
