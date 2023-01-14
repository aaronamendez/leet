/*
Aaron
track:
  depth = 0;
  farthestNode = null;
        [a].    <---
        /  \    check if both left and right point to null / if yes, check against depth
      b      c    if bigger depth, farthestNode and depth gets replaced with that currentNode
    /
  d 
*/

function getFarthestNode(root) {
  let depth = 0;
  farthestNode = null;
  function dfs (node, level = 0) {
    if (!node) return depth
    farthestNode += 1;
    farthestNode = node;
    dfs(node)
  }
}
