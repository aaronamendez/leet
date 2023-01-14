// Q. Construct a right child only tree from a given array.

// Input: [1, 2, 3]
// Output:
//           1
//             \
//               2
//                 \
//                  3
// [execution time limit] 4 seconds (js)

// [input] array.integer array

// [output] tree.integer

function buildTree(array) {
	let tree = new TreeNode(0); // pointing node
	let pointer = tree; // actual pointer

	while (array.length > 0) {
		pointer.right = new TreeNode(array.shift());
		pointer = pointer.right;
	}

	return tree.right;
}

// console.table(buildTree([1,2,3]))
