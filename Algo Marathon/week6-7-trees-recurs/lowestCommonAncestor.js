class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
/*
Q. Given a binary tree, find the lowest common ancestor of two given nodes in the tree and return its value. A node can be its own ancestor.

Examples:

• Given a binary tree: 

                     10

                    /  \

                  5     12

                 / \    /    

                3   6  11

• For node1: 3, node2: 6 // returns 5

• For node1: 11, node2: 6 // returns 10
*/

function lowestCommonAncestor(root) {}

let tree = new TreeNode(
	10,
	new TreeNode(5, new TreeNode(3), new TreeNode(6)),
	new TreeNode(12, new TreeNode(11))
);

console.log(lowestCommonAncestor(tree));
