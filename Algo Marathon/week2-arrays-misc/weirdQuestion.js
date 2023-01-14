/*
Given a two dimensional matrix (NxM), a size A such that A is less than both N and M, and an offset X, Y, return a new matrix that is the sub-matrix of the original. The size of the new matrix is AxA (square) and the values should be those in the original matrix starting at position indicated by the offset (X, Y). For example for an input matrix:
if size is 2 the new matix size should 2*2 = 4
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

size is 2 and offset is (0, 1), the expected output is:
i=0
j=1
[
  [2, 3],
  [5, 6]
]


Because the output is size 2x2 and is taken from a submatrix whose top left corner is at (0, 1) in the original.

Return an empty array if a square of the required size is not possible at starting at the given offset. The input matrix can be assumed to be consistent rectangle (all rows are the same length).

*/


function matrix(m, x, y, size){
  let result = []

  for( let i = x ; i < m.length ; i++){
    let level = []
    for(let j = y; j < m[i].length; j++){
      level.push(m[i][j])
    }
    result.push(level)
// console.log("result", result)
    if(result.length === size ) break
  }
 
  let currRes = result[0].length * result.length
  // console.log("currentREsult", currRes)
  if(currRes !== size*size) return [[]]
  return result
}

console.log(matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 0, 1, 2), 'should be', [ // 2*2 = 4
  [2, 3],
  [5, 6]
])

console.log(matrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30]
], 2, 2, 4), 'should be', [ // size is 4 = 4*4 = 16
  []
])
console.log(matrix([
  [1, 2, 3],
  [6, 7, 8],
  [11, 12, 13],
  [16, 17, 18],
  [21, 22, 23],
  [26, 27, 28],
  [29, 30, 21]
], 2, 1, 5), 'should be', [ // 4*4 = 16
  [22, 23]
])
// console.log(matrix([
//   [1, 2, 3],
// ], 0, 1, 4), 'should be', [
//   [[]]
// ])

/*
 m[0] = [1, 2, [3], 4].  
  size = 2   2*2 = 4
  4 - 1 = 3  - y = 2, = 1
  y = 2 === []
*/


