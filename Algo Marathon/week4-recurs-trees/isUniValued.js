/*
A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.
*/
Input: root = [1,1,1,1,1,null,1]

var isUnivalTree = function(root) {
  if (!root) return false
  let set = new Set()

  function helper (node) {
      if (!node) return
      set.add(node.val)
      helper(node.left)
      helper(node.right)
  }
  helper(root)
  return set.size === 1
};