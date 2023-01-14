class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
Given a binary tree, find the height of the tree.

  Example:
    input:
                1   height 0
              /  \
            2     4 height 1
           / \
          7   5.   height 2
    output: 2
    explanation: because it is 2 levels down from the root
*/

// Recursive
function maxDepth(tree) {
	if (!tree) return -1;
	return 1 + Math.max(maxDepth(tree.left), maxDepth(tree.right));
}

// Thoughts before doing
// It would be easy to do this with Breadth First Search I think
// Just increment by level by 1 for each level in existence.
// Then Return that counter.

/* TEST CASES */
let tree = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(7),
		new TreeNode(5)
	),
	new TreeNode(4)
); // first right
/* TREE2
                1  height 0
              /  \
            2     4.  height 1  
           / \    / \
          4   2   1   3  height 2
         / \
        1   2.  height 3
  return 3
*/
let tree2 = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4, new TreeNode(1), new TreeNode(2)),
		new TreeNode(2)
	),
	new TreeNode(4, new TreeNode(1), new TreeNode(3))
); // first right

console.log(maxDepth(tree), 2); // prev 2
console.log(maxDepth(tree2), 3); // prev 3
