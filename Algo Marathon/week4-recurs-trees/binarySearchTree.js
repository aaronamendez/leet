// Given a binary search tree, return true if it is valid, and false otherwise.
// Function Signature: 

/*
  input: tree 
         15 <--- left < root && right > root
      10     20
    3   13     21
      11  14
    return left(true) || right
    
  output: true

  empty tree -> True
*/
/*


          15
  -10.           17.   MIN >=15   MAX <= 16
-100           16
            15.5

# as we go down left, min doesn't change, max does change.
# as we go down right, max doesn't change. min does change.



  15 root
  left = 10, left < root

   15
-10 
*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}



// Return Boolean
function validateBST(root, min= -Infinity, max= Infinity){
  if (!root) return true;
  if (root.value >= max || root.value <= min) return false;
  return (validateBST(root.left, min, root.value) && validateBST(root.right, root.value, max) )
  
}

// Target runtime and space complexity:
// Runtime: O(n)

   

/*
          15
  -10.           17.   MIN >=15   MAX <= 16
-100           16.   
            15.5
*/


let binaryTree = new TreeNode(15, 
  new TreeNode(-10, 
    new TreeNode(-100)), 
  new TreeNode(17, 
    new TreeNode(16, 
      new TreeNode(15.5))))

console.log(validateBST(binaryTree))

