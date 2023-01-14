
/*
First, write a function that returns the average of the smallest values in each column.

Write a new version of this function that returns the average of the smallest value in each row.

*/

/*
  [32, 23, 3]
   $
  [23,  7, 5]
*/

function averageColumnMinimum(matrix) {
  let total = 0;
  let index = 0;
  while (index < matrix[0].length) {
    let smallest = Infinity;
    for (let array of matrix) {
      if (array[index] < smallest) smallest = array[index]
    }
    total += smallest
    index++
  }
  return total / matrix[0].length
}


function averageRowMinimum(matrix) {
  let total = 0;
  for (let array of matrix) {
    let smallest = Infinity;
    for (let elem of array) {
      if (elem < smallest) smallest = elem
    }
    total += smallest
  }
  return total / matrix.length
}


let test = [
  [32, 23, 3],
  [23,  7, 5]
];
console.log(averageColumnMinimum(test), 11) // average(23, 7, 3) = 11
console.log(averageRowMinimum(test), 4) // average(5, 3) = 4