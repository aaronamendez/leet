class TreeNode {
	constructor(value = 0, leftChild = null, rightChild = null) {
		this.value = value;
		this.left = leftChild;
		this.right = rightChild;
	}
}
/*
Given a binary tree, return the sum of all nodes with an even-valued parent node.

Example 1

           6
       7       8
    2    7   1   3
    
result = 19 (7 + 8 + 1 + 3)

Example 2

           2
       5       9
    
result = 14 (5 + 9)

Example 3

           2
    null       null
    
result = 0

Example 1

          [6]
       7       8.     15 +
    2    7   1   3.   0 + 4
    
result = 19 (7 + 8 + 1 + 3)

*/

function sumNodesWithEvenParent(tree) {
	return helper(tree);
}

function helper(tree, total = 0) {
	if (!tree) return total;
	if (tree.value % 2 === 0) {
		if (tree.right) {
			total += tree.right.value; // 8
			total += helper(tree.right);
		}
		if (tree.left) {
			total += tree.left.value; // 15
			total += helper(tree.left);
		}
	}
	return total;
}

const tree = new TreeNode(
	6,
	new TreeNode(7, new TreeNode(2), new TreeNode(7)),
	new TreeNode(8, new TreeNode(1), new TreeNode(3))
);

console.table(tree);

console.table(sumNodesWithEvenParent(tree));
