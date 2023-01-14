/*
  Find Only Children
We're given a tree, and we want to find all nodes that have only one child.
Return an array of nodes representing each single-child parent in any order.

  Example 1:
            1
        2       3
      _   4   _   _
      
    should return [2]

  Example 2:
           12
       3       4
    1    _   6   _
    
    should return [3, 4]
*/

function findOnlyChildren(tree) {
	let result = [];
	helper(tree, result);
	return result;
}

function helper(tree, array) {
	if (!tree) return;
	if ((tree.left && !tree.right) || (tree.right && !tree.left)) {
		array.push(tree.value);
	}
	helper(tree.left, array);
	helper(tree.right, array);
}

let tree = new TreeNode(
	12,
	new TreeNode(3, new TreeNode(1)),
	new TreeNode(4, new TreeNode(4))
);

console.log(findOnlyChildren(tree)); // [3, 4]
