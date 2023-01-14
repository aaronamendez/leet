/*
Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
In the case of an even-length array with not a clear "middle", pick the smaller number between the two to create the next child node. See the examples below.
Examples:

Given an array: [6,9,11,15,19,25]
Returns:

                11
               /  \    
              6    19 
               \   / \
                9 15  25

1. According to the rule, you choose the smaller value, 11, between 11 and 15.
2. For left child node of 11, you have to select between 6 and 9. According to the rule, select 6. There is only 1 node remaining which is greater than 6 so 9 becomes the right child of 6.
3. For the right child node of 11, you must choose 19. Subsequently 15 is the left child and 25 is the right child of 19.
Given an array: [-10,-3,0,5,9]
Returns:

                0
               / \    
             -10  5 
               \   \
               -3   9

1. Choose 0 as a root node.
2. For left child node of 0, you have -10 and -3. According to the rule, you choose the smaller value -10.
3. Similar for choosing the right child node of 0, you are left with 5 and 9. Since 5 is smaller than 9, 5 becomes the right child node.
[execution time limit] 4 seconds (js)

[input] array.integer array

sorted array

[output] tree.integer

[JavaScript] Syntax Tips
*/

/*
Q. Given a string, find the longest palindromic substring. You may assume there is only one longest substring. Although you can solve this question using dynamic programming, you're only expected to solve it using backtracking.

Examples:

Given a string: "babe" // returns"bab"
Given a string: "aefez" // returns "efe"
*/

/*
Q. Given k sorted arrays, merge all the arrays into a single array.

Each array is sorted in ascending order.
Examples:

Given one empty array: returns []
Given 3 arrays:
[
  [1, 4, 5],
  [1, 3, 4]
  [2, 6]
]
returns: [1, 1, 2, 3, 4, 4, 5, 6]
*/

/*
Q. Given a binary tree, find the lowest common ancestor of two given nodes in the tree and return its value.

A node can be its own ancestor.
Examples:

Given a binary tree:
                     10
                    /  \
                  5     12
                 / \    /    
                3   6  11
For node1: 3, node2: 6 // returns 5
For node1: 11, node2: 6 // returns 10
*/

/*

Q. Given two sorted arrays of integers with possibly different sizes, return the median of the two sorted arrays.

You may assume there are no duplicate elements.
Examples:
Given array1: [1, 3], array2: [2] // returns 2
Given array1: [1, 3], array2: [2, 4] // returns 2.5
Given array1: [], array2: [0] // returns 0

*/
