class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/*
Q. Given a non-empty binary tree, find the maximum path sum.

• A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
Example:

• Given a binary tree: 
           1
          / \    
         2   3
        /     
      -1   
      
returns 6 (1 + 2 + 3)
*/
let tree = new TreeNode(1, new TreeNode(2, new TreeNode(-1)), new TreeNode(3));

let tree2 = new TreeNode(-3, null, new TreeNode(-1));

let tree3 = new TreeNode(-1);

// const maxSumPath = (root) => {
//     let maxSum = -Infinity;
//   function dfs(node) {
//       if (!node) return 0;
//       const left = Math.max(dfs(node.left), 0);
//       const right = Math.max(dfs(node.right), 0);
//       maxSum = Math.max(maxSum, node.val + left + right);
//       return node.val + Math.max(left, right);
//   }
//   dfs(root);
//   return maxSum === -Infinity ? 0 : maxSum;
// };

// let tree2 = new TreeNode(-3,
//   null, new TreeNode(-1))

function maxSumPath(root) {
	if (!root) return 0;
}

console.log(maxSumPath(tree));
console.log(maxSumPath(tree2));
console.log(maxSumPath(tree3));

/*
Q. Given a binary tree and a target element's value, determine if the tree contains the target using depth first search (DFS).
Examples:
• Given a binary tree:
                 3
                / \
              29   4
              /     \
             2       2
                    /
                   9

• For target: 1 // returns False

• For target: 2 // returns True
*/

// let tree = new TreeNode(3,
//   new TreeNode(29,
//     new TreeNode(2)),
//   new TreeNode(4,
//     null,
//     new TreeNode(2,
//       new TreeNode(9))))

function findMaxDFS(root, targ) {
	if (!root) return false;
	if (root.val === targ) return true;
	return findMaxDFS(root.left, targ) || findMaxDFS(root.right, targ);
}

// console.log(findMaxDFS(tree, 1)) // false
// console.log(findMaxDFS(tree, 2)) // true

/*
Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.
• Given an array: [-10,-3,0,5,9]

returns:
                0
               / \    
             -10   5 
               \    \
               -3    9
*/

function convertToTree(array) {
	let root = new TreeNode(array[Math.floor(array.length / 2)]);
	return root;
}

// console.log(convertToTree([-10, -3, 0, 5, 9]))
