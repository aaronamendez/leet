/*
Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, then the third is back to normal order again, each row the opposite order of the ones before and after.
*/
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function matrixZigZag(matrix) {
  let result = [];
  let traversalType = 2;
  for (let array of matrix) {
    if (traversalType % 2 === 0) {
      for (let elem of array) {
        result.push(elem)
      }
    } else {
      for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
      }
    }
    traversalType++
  }
  return result
}

console.log(matrixZigZag(matrix), [1, 2, 3, 6, 5, 4, 7, 8, 9])