/*
Given a square matrix mat, return the sum of the matrix diagonals.
Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

[
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
odd
Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

output = 25

[ 
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
]
even
output = 8

[
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
*/

function matrixDiagSum(matrix) {
  let total = 0;
  let first = 0;
  let last = matrix[0].length - 1; // index - 1
  let mid = false;
  if (matrix[0].length % 2 !== 0) mid = true

  for (let array of matrix) {
    total += array[first]
    first++
  }

  for (let i = 0; i < matrix.length; i++) {
    total += matrix[i][last]
    last--
  }

  let midArray = matrix[Math.round(matrix[0].length / 2) - 1]
  if (mid === true) {
    total -= midArray[Math.round(midArray.length - 1) - 1]
  }
  return total
}

console.log(matrixDiagSum([
  [1,2,3],
  [4,5,6],
  [7,8,9],
]), 25)
console.log(matrixDiagSum([ 
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
]), 8)

// [10, 15, 20, 5] => [1, 2, 3, 1]
// function solution(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
    
//   }
// }

// console.log(solution([10, 15, 20, 5]), 'should be', [1, 2, 3, 1])

/*
function matrixDiagSum(matrix) {
  let total = 0;
  // firstX
  let firstX = 0;
  let lastX = matrix[0].length - 1
  for (let array of matrix) {
    if (firstX === Math.abs(matrix[0].length)) {
      middle = false
      total += array[firstX]
    } else {
      total += array[firstX]
    }
    firstX++
  }
  for (let i = 0; i < matrix.length; i++) {
    if (lastX !== Math.abs(matrix[0].length / 2)) {
      total += matrix[i][lastX]
    }
    lastX--
  }
  return total
}
*/