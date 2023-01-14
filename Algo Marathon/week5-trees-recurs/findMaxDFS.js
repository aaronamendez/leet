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

let tree = new TreeNode(
	3,
	new TreeNode(29, new TreeNode(2)),
	new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
);

function findMaxDFS(root, targ) {
	if (!root) return false;
	if (root.val === targ) return true;
	return findMaxDFS(root.left, targ) || findMaxDFS(root.right, targ);
}

// console.log(findMaxDFS(tree, 1)) // false
// console.log(findMaxDFS(tree, 2)) // true
