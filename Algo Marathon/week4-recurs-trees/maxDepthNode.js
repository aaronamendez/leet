/*
Given a binary tree, return the deepest node (farthest distance away from root)

        [a].    <---
        /  \   
      b      c 
    /
  d 

Potential solutions:
* DFS
  -> need to do DFS on the left subtree and on the right subtree
  -> need to keep track of the deepest node seen so far
  -> if we find a "deeper" node, update ^^

(uses a stack to push/pop)
  a -> c
  temp = d


* BFS
  -> keep traversing the entire tree
  -> the last node visited is guaranteed to be the deepest

(use a queue)
c -> d


----

Aaron
track:
  depth = 0;
  farthestNode = null;
        [a].    <---
        /  \    check if both left and right point to null / if yes, check against depth
      b      c    if bigger depth, farthestNode and depth gets replaced with that currentNode
    /
  d 
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

****
---------------------------------------------
Charles


  helper(root, height)
  nonlocal maxHeight
  nonlocal maxNode
  
    if not root:
      return 
    
    # from the current node search the left subtree and righ subtree recursively 
    height += 1
    # if height > maxHeight:
        maxHeight = height
        maxNode =  root
    helper(root.left, height)
    helper(root.right, height)

test case 0:

     a
    /   \      
    b     c
/     \
d      e
track max height node and height as a global 
maxNode, maxHeight = None, 0
recursively find the max node. Pass in the root and the starting height 0
helper(root, 0)
return node
---------------------------------------------
>>>>

Lincoln
      a
     / \
    b   c
   /
  d
  
  implement bfs solution where there is a check to see 
    if queue length is zero and there are no left of right children the value is returned
  
  function deepestNode(root) {
    if (!root) return root
    
    let queue =[root];
    
    while(queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let temp = queue.shift();
        if (queue.length === 0 && !temp.left && !temp.right) {
          return temp.value
        } 
        if (temp.left) {
          queue.push(temp.left)
        }
        if (temp.right) {
          queue.push(temp.right)
        }
      }
    }
  } 
  
<<<<

Michael

  a
 b c
d e

     a 
   b.  c 
  d.e   f 
         g
         
// Breadth first search 
  // while tree is being traversed
     // add each node to an array
  // return the last value in the array

// Test cases
  // Empty tree
  // Standard balanced binary tree with all levels filled
  // Tree with one side larger than other
  // Tree with all nodes in a line

const deepestNode = (root) => {
   let queue = [root]
   let nodes = []
   
   while(queue.length) {
    const node = queue.shift()
    nodes.push(node) 
    if(node.left !== null) queue.push(node.left)
    if(node.right !== null) queue.push(node.right)
   }
   
   return nodes.length > 0 ? nodes.pop() : null

} 
*/