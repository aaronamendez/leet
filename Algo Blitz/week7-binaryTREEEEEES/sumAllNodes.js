class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
Given a binary tree, return the sum of all the nodes values.
  Example:
    input:
                1   
              /  \
            1     1 
           / \
          1   2   
    f = 2
    output: true
    explanation: because the value 2 exists in the tree
*/

// Iterative
function DFS(tree) {
	let stack = tree ? [tree] : [];
	let total = 0;
	while (stack.length > 0) {
		let pop = stack.pop();
		total += pop.value;
		if (pop.left) stack.push(pop.left);
		if (pop.right) stack.push(pop.right);
	}
	return total;
}

/* TEST CASES */
let tree = new TreeNode(
	1, // root
	new TreeNode(
		1, // first left
		new TreeNode(1),
		new TreeNode(2)
	),
	new TreeNode(1)
); // first right
/* TREE2
                1  
              /  \
            2     4.    
           / \    / \
          4   2      3  
         / \
        9   2
      f = 10
  return false
*/
let tree2 = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4, new TreeNode(1), new TreeNode(2)),
		new TreeNode(2)
	),
	new TreeNode(4, new TreeNode(9), new TreeNode(2))
); // first right

console.log(DFS(tree), 6);
console.log(DFS(tree2), 27);
