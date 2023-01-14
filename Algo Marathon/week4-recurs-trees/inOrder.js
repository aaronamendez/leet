// /*
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).


// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000

// Explanation: 2**-2 = 1/2**2 = 1/4 = 0.25
// 1/x to power abs(n)
// */

// /* Intuation Brute Force approach 
// Just simulate the process, multiply x for n times.

// Algorithm

// We can use a straightforward loop to compute the result.
// */

// // 2 to the power of three
// var myPow2 = function(x, n) {
//     let N = n
//     if(N < 0){
//       x = 1/x
//       N--
//     }
//     let answer = 1
//     for(let i = 0 ; i < N ; i++){
//       answer = answer * x
//     }
//       return answer
//   };

//   var myPow3 = function(x,n){
//     if(n < 0){
//       x = 1/x;
//       n = -n;
//   }

//   let result = 1;
//   while(n !== 0){
//       if(n % 2 !== 0){
//           result = result * x;
//       }
//       x = x * x;
//       n = Math.floor(n / 2);
//   }
//   return result;
//   }


// /* Fast power Algorithm recursion */
//   var myPow = function(x, n) {
//     function helper(x,n){
//       if(n === 0) return 1
//       if(x === 0) return 0
//       const half = helper(x, Math.floor(n/2))
//       if(n % 2 === 1){
//         return half * half * x
//       }else{
//         return half * half
//       }
//     }
  
//     let result = helper(x,Math.abs(n))
  
//     return result = n >= 0 ? result : 1/result
//   };



/*
Given a binary tree, return the in-order traversal of its nodes' values.
 You must use iterative approach.

InOrder-Traversal{
    Traverse the left subtree.
    Visit the root.
    Traverse the right subtree.
}
          [1]
          / \
         2   3
      [4]   5  

// returns [4,2,5,1,3]

*/



class TreeNode{
  constructor(value = 0 , left = null , right= null){
    this.value = value
    this.left = left
    this.right = right
  }

}

let tree = new TreeNode(1,new TreeNode(2, new TreeNode(4)), new TreeNode(3))

// console.table(tree)
/*
    1                
  2   3
4

[]
  left = f(inOrderTraversal(2))
  result.push()
*/
let result = [];
function inOrderTraversalRecursive(root){
  if(!root) return 
  inOrderTraversal(root.left)
  result.push(root.value)
  inOrderTraversal(root.right)
  return result
}

/*
    1      <-
  2   3
[4]     

[1,2]
*/



function DFSInOrder(root) {
  let stack = [];
  let result = [4, 2, 1, 3];
  let curr = root; // 4

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop(); // 3
    result.push(curr.value);
    curr = curr.right; // null
  }
  return result;
}

// console.log(inOrderTraversalIterative(root))
console.log(DFSInOrder(tree))



