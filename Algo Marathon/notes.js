class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
Given a binary tree, modify each node value to be the sum of itself and its parent node. Return the root node of the modified tree.

Example 1:
           1
       2       4

     should turn into

          1
      3       5

Example 2:
           1
       3       4
    3   _    _   _

     should turn into

          1
      4       5
    6    _   _   _
*/

// Post Order Solution 
//////////////////////////////////////////////////////////////

// const createParentSumTree = (root) => {
//   helper(root);
//   return root;
// }

// const helper = (node, parentValue) => {
//   if (!node) return;

//   helper(node.left, node.value);
//   helper(node.right, node.value);

//   if (parentValue) {
//       node.value = node.value + parentValue;
//   }
// }

const createParentSumTree = (root) => {
  function parentSumTree(root, parentValue = root.value){
    if(!root)return;
    let sum;
    
    if (root.left) {
      let original = root.left.value; // 3
      sum = root.left.value + parentValue; // 3 + 1 
      root.left.value = sum;
      parentSumTree(root.left, original);
    }

    if(root.right){
      let original = root.right.value; // 4
      sum = root.right.value + parentValue; // 4 + 1 
      root.right.value = sum;
      parentSumTree(root.right, original);
    }
  }

  parentSumTree(root);
  return root;
}


/*


          9
     3      11
   1   5   10  _
root, left, right

          9
     12       20 
   4    8   21   _


*/
/* Example tree */
// const testTree = new TreeNode(9, 
//   new TreeNode(3, 
//     new TreeNode(1),
//     new TreeNode(5)), 
//   new TreeNode(11, 
//     new TreeNode(10)))

    /* 
         1
      3       4
  3    null

      turn to
            1
        4       5
    6
    */

const testTree2 = 
  new TreeNode(1,
    new TreeNode(3,
      null,
      new TreeNode(3)),
    new TreeNode(4))


class List {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
  toString() {
    return this.value + ' -> ' + this.next
  }
}
    

/* Returns edited tree */
// console.table(createParentSumTree(testTree2).left.right)



let ll1 = new List(1, new List(5, new List(4 , new List(6))))


// console.log(ll1.toString())


function recursive(root) {
  if(!root) return null
  
  const left = recursive(root.left);
  const right = recursive(root.right);

  if (left) {
    left.value = left.value + root.value; 
  }
  if (right) {
    right.value = right.value + root.value;
  }

  // root.left.value = root.left.value + root.value;
  // if (root.right) root.right.value = root.right.value + root.value;

  return root;
 
}

console.log(recursive(testTree2))

/* 
         1
      3     4
    3
      turn into
          1
      4       5
    6
*/




