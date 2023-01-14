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
function findValueInNodeBFS(tree, f) {
	let queue = tree ? [tree] : [];
	while (queue.length > 0) {
		let pop = queue.shift();
		if (pop.value === f) return true;
		if (pop.left) queue.push(pop.left);
		if (pop.right) queue.push(pop.right);
	}
	return false;
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

console.log(findValueInNodeBFS(tree, 2), true);
console.log(findValueInNodeBFS(tree2, 10), false);
