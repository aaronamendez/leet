class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
A binary tree is immediately distinct if no parent node in the tree has a child node with the same value as itself.
For example, if the parent node = 1 and it has a child node of the same value 1, this would not be an immediately distinct tree.
Thinking about the opposite: if no nodes have a child node with the same value as themselves, this is an immediately distinct tree.
Given the root of a binary tree, return true if the given tree is immediately distinct, or false otherwise.

  Example:
    input:
                1   
              /  \
            2     4 
           / \
          7   5
    output: true
    explanation: because there isn't a node with a child node of the parent nodes same value
*/

// Iterative
function isImmediatelyDistinct(tree) {
	let queue = tree ? [tree] : [];
	while (queue.length > 0) {
		let pop = queue.shift();
		if (pop.left) {
			if (pop.left.value === pop.value) {
				return false;
			}
			queue.push(pop.left);
		}
		if (pop.right) {
			if (pop.right.value === pop.value) {
				return false;
			}
			queue.push(pop.right);
		}
	}
	return true;
}

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
                1  
              /  \
            2     4  
           / \    / \
          4   2   1   3  
  return false
*/
let tree2 = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4),
		new TreeNode(2)
	),
	new TreeNode(4, new TreeNode(1), new TreeNode(3))
); // first right

console.log(isImmediatelyDistinct(tree), true);
console.log(isImmediatelyDistinct(tree2), false);
