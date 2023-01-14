/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/
 var minDepth = function(root) {
  if (!root) return 0
  if(!root.left && !root.right) return 1
  
  let min = Infinity;
  if (root.left) {
      min = Math.min(min, minDepth(root.left))
  }
  if (root.right) {
      min = Math.min(min, minDepth(root.right))
  }
  return 1 + min
};