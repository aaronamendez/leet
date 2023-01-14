class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
                1    <--- 1
              /  \
            2     4  <--- 4
           / \
          4   5      <--- 5
  return [1, 4, 5]

*/
// first in first out
// [3, 1, 2]
function getRightMostValues(tree) {
	let queue = [tree];
	let result = [];
	while (queue.length > 0) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			// this creates the level
			let pop = queue.shift(); // 1
			if (i === size - 1) result.push(pop.value);
			if (pop.left) queue.push(pop.left);
			if (pop.right) queue.push(pop.right);
		}
	}
	return result;
}

/* TEST CASES */
let tree = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4),
		new TreeNode(5)
	),
	new TreeNode(4)
); // first right
/*
                1    <--- 1
              /  \
            2     4  <--- 4
           / \    / \
          4   5   1   6   <--- 6
  return [1, 4, 6]

*/
let tree2 = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4),
		new TreeNode(5)
	),
	new TreeNode(4, new TreeNode(1), new TreeNode(6))
); // first right

console.log(getRightMostValues(tree), [1, 4, 5]);
console.log(getRightMostValues(tree2), [1, 4, 6]);
