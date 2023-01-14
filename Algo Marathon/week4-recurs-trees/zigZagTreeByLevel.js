
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example:
Input: 
         3
      9     20
          15   7

Output: [[3],[20,9],[15,7]]
      1
    2   3
  4       5

*/

function zigZagTreeByLevel (root) {
  let queue = root ? [root] : [];
  let result = [];
  let subArray = [];
  let counter = 2;

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let pop = queue.shift();
      subArray.push(pop.val)
      if (counter % 2 === 0) {
        if (pop.right) queue.push(pop.right)
        if (pop.left) queue.push(pop.left) // last node one comes last
      } else {
        if (pop.left) queue.push(pop.left)
        if (pop.right) queue.push(pop.right) // else zag
      }
    }
    counter++
    result.push(subArray)
    subArray = []
  }

  return result;
}
let tree = new TreeNode(3, 
  new TreeNode(9), 
  new TreeNode(20, 
    new TreeNode(15), 
    new TreeNode(7)))
// [[3],[20,9],[15,7]]

/*
    Hi nika!!!
    I'm running into an issue on Leetcode
    I'll post link, try pasting the solution
    ok
    https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/

    melissa came home, gonna have dinner! I'll be back but if anything we can go over tomorrow!
    Oki doks! enjoy the dinner and say Hi to Melissa
    hey Aaron I wrote another soltion down on line 86
    its same kind of process just the logic of when checking to zig or zag 
    it changed.
    by the way cant figure why  its not working with the solution you wrote seems pretty solid , lets go over it tomorrow going to eat dinner as well

*/

/*
      1
    2   3
  4       5

  [1] [3,2] [4,5]
*/

function zigZagTreeByLevel1 (root) {
  let queue = root ? [root] : [];
  let result = [];
  let counter = 2;

  while (queue.length > 0) {
    let size = queue.length;
    let subArray = []
    for (let i = 0; i < size; i++) {
      let pop = queue.shift();
      subArray.push(pop.val)
        if (pop.right) queue.push(pop.right)
        if (pop.left) queue.push(pop.left)
      
    }
    if (counter % 2 === 1) {
      result.push(subArray)
    } else {
      result.push(subArray.reverse())
    }
    counter++
  }

  return result;
}
console.log(zigZagTreeByLevel1(tree))