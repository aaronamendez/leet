class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*
Flipping a tree is essentially to rotate it 180 degrees around it's vertical axis. For example:
           1
        /     \
      2         3
    /   \     /   \
   4     5   6     7
   becomes 
           1
        /     \
      3         2
    /   \     /   \
   7     6   5     4
*/

function flipTree() {}

const tree = new TreeNode(1);

console.table(flipTree(tree));

/*
Q. Given an binary tree and a target subtree, determine if the original tree contains a target subtree. A subtree of a tree is a tree consisting of a node in the original tree and all of its descendants while maintaining the same structure.

Examples:

Given a tree:
            1
          /  \
        2      3
      /  \
    4     5
          /
        6

and a subtree:
        5 
      / 
    6

returns true
Given a tree:
            1
          /  \
        2      3
      /  \
    4     5
          /
        6
and a subtree:
        2 
      /  \
    4     5

returns false (6 is missing in a subtree)
*/

/* ATTEMPT 1
function solution(root, subRoot) {
    if (!tree) return false
    if (tree) {
        if (tree.value === subRoot.value) {
            if (tree.left.value === subRoot.left.value) {
                if (tree.right.value === subRoot.right.value) {
                    return true
                }
            }
        }
        return solution(root.left, subRoot) || solution(root.right, subRoot)
    }
}
*/

/*
Q. Given a binary tree, return the values of the nodes when facing the tree from the right side (from top to bottom).

Example:
Input:
   1              <---
 /   \
2     5         <---
 \  
  7               <---
Output: [1, 5, 7]

*/
