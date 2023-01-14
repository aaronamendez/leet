
/*

Q. Given a binary tree, update each node's value with its sum of child nodes. You must update the nodes by one level at a time starting from the top (root).
          1
         / \
        2   3
       /
      4
  returns
          5                    // 2+3
         / \
        4   3                  // 4
       /
      4               
*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
          1     <- + 5
         / \
        2   3   <-
       /
      4
*/
function sumByLevel (root) {
  let queue = root ? [root] : [];
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let sum = 0;
      let pop = queue.shift();
      if (!pop.left && !pop.right) continue
      if (pop.left) {
        sum += pop.left.value
        queue.push(pop.left)
      }
      if (pop.right) {
        sum += pop.right.value
        queue.push(pop.right)
      }
      pop.value = sum;
    }
  }
  return root
}
let tree = new TreeNode(1, 
  new TreeNode(2, 
    new TreeNode(4)), 
  new TreeNode(3))

console.log(sumByLevel(tree))