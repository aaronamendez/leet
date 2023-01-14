
/*
Given an array, reverse every sub-array formed by consecutive k elements.

Input: 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3 


Output: 
[3, 2, 1, 6, 5, 4, 9, 8, 7]

*/

function reverse(array, k) {
  let result = [];
  let stack = [];
  // builds the stack but also checks if stack is of length k
  for (let i = 0; i < array.length; i++) {
    if (stack.length === k) {
      while (stack.length > 0) {
        result.push(stack.pop())
      }
    }
    stack.push(array[i])
  }
  // clears the stack if theres leftovers
  while (stack.length > 0) {
    result.push(stack.pop())
  }
  return result
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), 'to', [3, 2, 1, 6, 5, 4, 9, 8, 7])