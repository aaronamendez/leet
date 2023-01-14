// Nika was here :)

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

// console.table(zigzag([1,2,3,4,5]).right)

// Q. Given a binary tree, return the values of the nodes when facing the tree from the right side (from top to bottom).

// Example:
// Input:
//    1              <---
//  /   \
// 2     5         <---
//  \
//   7               <---
// Output: [1, 5, 7]

function rightSideNodes(tree) {
	let queue = tree ? [tree] : [];
  let result = [];

  while (queue.length > 0) {
    let size = queue.length 
    while(size){
      let curr = queue.shift() 
      if (size === 1) result.push(curr.value)
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
      size--
    }
  }

  return result;
}

let tree = new TreeNode(
	1,
	new TreeNode(2, null, new TreeNode(7)),
	new TreeNode(5)
);

// console.log(rightSideNodes(tree))

/**
 * There are Two big ways to traverse through a TreeNode :
 * 
 1. Depth First Traversals: 

(a) Inorder (Left, Root, Right) : 4 2 5 1 3 
(b) Preorder (Root, Left, Right) : 1 2 4 5 3 
(c) Postorder (Left, Right, Root) : 4 5 2 3 1

 2.Breadth-First or Level Order Traversal: 1 2 3 4 5 
 */

function DFS(tree) {
	let stack = [];
	let result = [];
	let curr = tree;

	while (curr || stack.length > 0) {
		while (curr !== null) {
			stack.push(curr);
			curr = curr.left;
		}
		curr = stack.pop();
		result.push(node);
		curr = curr.right;
	}
	return result;
}

let tree2 = new TreeNode(
	1,
	new TreeNode(2, null, new TreeNode(7)),
	new TreeNode(5)
);
