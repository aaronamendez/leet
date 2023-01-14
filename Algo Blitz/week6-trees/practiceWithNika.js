class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*
Given a binary search tree, and a value X, find an element with the closest value to X in that binary tree
Example

    tree =   10
            /  \
           5     15
          / \   / \
        2   5  13  22
       /         \
      1          14
    target = 12

    output: 13
*/
/**
 * build lowest = 1
 * build value = 13
 * check current value
 */
function closestValueInBST(tree, target) {
	let queue = tree ? [tree] : []; //15
	let closestValue = null; // 13
	let minDiff = +Infinity; // 1

	while (queue.length > 0) {
		let curr = queue.shift(); // 13
		let currDiff = Math.abs(target - curr.value); //
		if (curr.value === target) return curr.value;
		if (currDiff < minDiff) {
			(minDiff = currDiff), (closestValue = curr.value);
		}
		if (curr.value < target) {
			if (curr.right) queue.push(curr.right);
		} else {
			if (curr.left) queue.push(curr.left);
		}
	}
	return closestValue;
}

// const tree = new TreeNode(10,
// new TreeNode(5,
//   new TreeNode(2, new TreeNode(1)),
//   new TreeNode(5)),
//   new TreeNode(15,
//   new TreeNode(13, null, new TreeNode(14)),
//   new TreeNode(22)))

// const tree1 = new TreeNode(10,
//   new TreeNode(5,
//     new TreeNode(2, new TreeNode(1)),
//     new TreeNode(5)),
//     new TreeNode(15,
//     new TreeNode(12, null, new TreeNode(14)),
//     new TreeNode(22)))

// console.log(closestValueInBST(tree, 12),13)
// console.log(closestValueInBST(tree1, 12), 12)

/**
 * There are Two big ways to traverse through a TreeNode :
 * 
      1. Depth First Traversals: 

(a) Inorder (Left, Root, Right) : 4 2 5 1 3 
(b) Preorder (Root, Left, Right) : 1 2 4 5 3 
(c) Postorder (Left, Right, Root) : 4 5 2 3 1

    2.Breadth-First  Level Order Traversal: 1 2 3 4 5 
 */

/**
 *  [4 2 5 1 3]
 *          1.   stack[]
 *        /. \
 *       2.   3.
 *     /.  \
 *    4.    5.
 * [1 2 4 5 3]
 *
 */

//(b) Inorder
function DFSInOrder(tree) {
	let stack = [];
	let result = [];
	let curr = tree;

	while (curr || stack.length > 0) {
		while (curr) {
			stack.push(curr);
			curr = curr.left;
		}
		curr = stack.pop();
		result.push(curr.value);
		curr = curr.right;
	}
	return result;
}

/**
 *       1
 *    2     5 []
 *      7
 */

const tree = new TreeNode(
	1,
	new TreeNode(2, null, new TreeNode(7)),
	new TreeNode(5)
);

// console.log(DFSInOrder(tree2))

//(b) Preorder (Root, Left, Right)
/**
 *       1
 *    2     5  result[1,2,7,5]
 *     7
 */
function DFSPreOrder(tree) {
	let stack = [];
	let result = [];
	let curr = null;
	while (curr || stack.length > 0) {
		while (curr) {
			stack.push(curr);
			result.push(curr.value);
			curr = curr.left;
		}
		curr = stack.pop().right;
	}
	return result;
}

// console.log(DFSPreOrder(tree))

var preorderTraversal = function (root) {
	let result = [];
	let stack = root ? [root] : [];

	while (stack.length) {
		let curr = stack.pop(); // 1
		result.push(curr.val);
		if (curr.right) stack.push(curr.right);
		if (curr.left) stack.push(curr.left);
	}

	return result;
};

// PostOrder (Left, Right, Root)
/**
 *       1.  [1]
 *    2     5  result[2, 7, 5, 1]
 *     7
 */

var postOrderTraversal = function (root) {
	let result = [];
	let stack = root ? [root] : [];

	while (stack.length > 0) {
		if (root) {
			stack.push(root);
			root = root.left;
		}

		result.push(stack.pop().value);
		root = stack.pop().right;
	}
	return result;
};
