class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
Given a binary tree with node values represented as integers, find and return the most frequent node value.
You can assume there will always be a most frequent node.

                1   
              /  \
            2     4 
           / \
          2   5    
  return 2

*/

// Iterative
function findMostFrequentNode(tree) {
	let queue = tree ? [tree] : [];
	let map = new Map();
	let mostFrequentKey = null;
	let mostFrequentValue = 0;

	while (queue.length > 0) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let pop = queue.shift();
			if (map.has(pop.value)) {
				map.set(pop.value, map.get(pop.value) + 1);
			} else {
				map.set(pop.value, 1);
			}
			if (map.get(pop.value) > mostFrequentValue) {
				mostFrequentValue = map.get(pop.value);
				mostFrequentKey = pop.value;
			}
			if (pop.left) queue.push(pop.left);
			if (pop.right) queue.push(pop.right);
		}
	}
	return mostFrequentKey;
}

/* TEST CASES */
let tree = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(2),
		new TreeNode(5)
	),
	new TreeNode(4)
); // first right
/* TREE2
                1  
              /  \
            2     4  
           / \    / \
          4   2   1   4  
  return 4

*/
let tree2 = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4),
		new TreeNode(2)
	),
	new TreeNode(4, new TreeNode(1), new TreeNode(4))
); // first right

console.log(findMostFrequentNode(tree), 2);
console.log(findMostFrequentNode(tree2), 4);
