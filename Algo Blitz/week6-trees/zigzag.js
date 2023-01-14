// Q. Construct a zigzag tree from an array (alternating right and left child), starting with right.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output:
//           1
//             \
//               2
//              /
//           3
//             \
//               4
//              /
//           5

function zigzag(array) {
	let tree = new TreeNode(array.shift());
	let pointer = tree;
	let counter = 2;
	// even = right
	// odd = left

	while (array.length > 0) {
		if (counter % 2 === 0) {
			pointer.right = new TreeNode(array.shift());
			pointer = pointer.right;
		} else {
			pointer.left = new TreeNode(array.shift());
			pointer = pointer.left;
		}
		counter++;
	}
	return tree;
}

console.table(zigzag([1, 2, 3, 4, 5]).right);
