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

function maxSumPath(root) {
	if (!root) return 0;
	let left = Math.max(maxSumPath(root.left), 0);
	let right = Math.max(maxSumPath(root.right), 0);
	return Math.max(root.val, left + root.val + right);
}

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(-1)), new TreeNode(3));
let tree2 = new TreeNode(-3, null, new TreeNode(-1));
let tree3 = new TreeNode(-1);

console.log(maxSumPath(tree), 6);
console.log(maxSumPath(tree2), -1);
console.log(maxSumPath(tree3), -1);

// let maxSum = -Infinity;
//   function dfs(node) {
//       if (!node) return 0;
//       const left = Math.max(dfs(node.left), 0);
//       const right = Math.max(dfs(node.right), 0);
//       maxSum = Math.max(maxSum, node.val + left + right);
//       return node.val + Math.max(left, right);
//   }
// dfs(root);
// return maxSum === -Infinity ? 0 : maxSum;
