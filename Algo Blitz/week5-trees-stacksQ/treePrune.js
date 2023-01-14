/*
Given a binary tree and a value, remove the subtrees who's root have this target value. For a tree like this:
*/

/* EXAMPLE 1
         1
      /     \
    2         3
  /   \     /   \
 4     5   6     7

 removing subtree 3 would look like this
          1
       /    
      2        
    /   \   
   4     5
*/
let tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

function treePrune(tree, value) {
	if (!tree) return;
	if (tree.right) {
		if (tree.right.value === value) tree.right = null;
		else {
			treePrune(tree.right, value);
		}
	}
	if (tree.left) {
		if (tree.left.value === value) tree.left = null;
		else {
			treePrune(tree.left, value);
		}
	}
	return tree;
}

console.table(treePrune(tree, 3));
