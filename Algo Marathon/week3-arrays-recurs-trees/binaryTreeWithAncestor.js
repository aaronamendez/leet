class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
/*
Problem Statement

Given a binary tree with node values of numbers, and two numbers A and B, determine if A is an ancestor of B.

     3 
   1  2

A=3 B=1, returns true
A=3 B=2, returns true
A=2 B=3, returns false

        3
    1       2
          4   5

A=3, B=5, returns true
A=2, B=5, returns true
A=5, B=2, returns false


*/
// Assume no duplicates
// guaranteed answer



/*

steps:

1- Find A in the tree (DFS, BFS)
2- Save A (node) in a queue
3- Traverse the A subtree (BFS)
4- While Traversing check if the left, right node is = B 
  4.1 Return true
5- Return false



/*

  1)
     3 
   1  2

  2)
        3
    1       2
          4   5
*/
/**
 * @Param Root Node, A ancestor, B predecesor
 * @return Boolean
 */
function findAncestor(root, a, b) {
  if (!root) return false
  if (a === root.value) return true
  let ancestor = searchDFS(root, a)
  if(searchDFS(ancestor, b)) return true
  
  return false 
}

// returns Node that has the value
function searchBFS (treeNode, value) {
  let queue = treeNode ? [treeNode] : []

  while(queue.length > 0) {
    let shiftElement = queue.shift()
    if(shiftElement.value === value) {
      return shiftElement
    }
    if(shiftElement.left) {
      queue.push(shiftElement.left)
    }

    if(shiftElement.right) {
      queue.push(shiftElement.right)
    }
  }
  return null
}



function searchDFS(treeNode, value){
  if(!treeNode || treeNode.value === value) return treeNode
  return (searchDFS(treeNode.left, value) || searchDFS(treeNode.right, value))

}

let tree1 = new TreeNode(3, 
  new TreeNode(1), 
  new TreeNode(2))
let tree2 = new TreeNode(3, 
  new TreeNode(1), 
  new TreeNode(2, 
    new TreeNode(4), 
    new TreeNode(5)))

/*
A=3 B=1, returns true
A=3 B=2, returns true
A=2 B=3, returns false

A=3, B=5, returns true
A=2, B=5, returns true
A=5, B=2, returns false
*/

console.log(findAncestor(tree1, 3, 1), 'should return', true)
console.log(findAncestor(tree1, 3, 2), 'should return', true)
console.log(findAncestor(tree1, 2, 3), 'should return', false)
console.log(findAncestor(null, 2, 3), 'should return', false)

console.log(findAncestor(tree2, 3, 5), 'should return', true)
console.log(findAncestor(tree2, 2, 5), 'should return', true)
console.log(findAncestor(tree2, 5, 2), 'should return', false)