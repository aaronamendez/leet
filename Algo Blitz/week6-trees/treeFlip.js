class TreeNode {
	constructor(value, left = null, right = null) {
		this.left = left;
		this.right = right;
		this.value = value;
	}
}

let tree = new TreeNode(
	1, // root
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

/*
Flipping a tree is essentially to rotate it 180 degrees around it's vertical axis. For example:
           1
        /     \
      2         3
    /   \     /   \
   4     5   6     7
Becomes:
           1
        /     \
      3         2
    /   \     /   \
   7     6   5     4

*/

function flip(root) {
	if (!root) return;

	if (root.left && root.right) {
		let save = root.left; // 2
		root.left = root.right; // sets left to 3
		root.right = save; // sets right to 2
	}

	flip(root.left);
	flip(root.right);

	return root;
}

console.table(flip(tree));
