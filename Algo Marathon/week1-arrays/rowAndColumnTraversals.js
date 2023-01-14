/*
Given a matrice, perform a ROW major traversal and print out an array with values in the correct order

Example:
  input: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

function columnMajorTraversal(matrix) {
  let result = []
  for (let array of matrix) {
    for (let elem of array) {
      result.push(elem)
    }
  }
  return result
} 

console.log(columnMajorTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]), [1, 2, 3, 4, 5, 6, 7, 8, 9])

/*
Given a matrice, perform a COLUMN major traversal and print out an array with values in the correct order

Example:
  input: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  output: [1, 4, 7, 2, 5, 8, 3, 6, 9]
*/

/*
  arrayIdx = 0
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9]

      while (outer < matrix.length)
      result.push(currArray[arrayIdx][arrayIdx])
*/

function rowMajorTraversal(matrix) {
  let result = []
  let index = 0;
  while (index < matrix[0].length) {
    for (let array of matrix) {
      result.push(array[index])
    }
    index++
  }
  return result
}

console.log(rowMajorTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]), [1, 4, 7, 2, 5, 8, 3, 6, 9])



