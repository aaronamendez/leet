/*
Given an array and a target value X, return an array of all indices containing value X.

Example:
    [30,30,30], 30 == [0,1,2])
    [3, 2, 5, 5, 1], 5 == [2,3])
*/

function indicesOfTarget(array, x) {
  let result = [];
  let idx = 0;
  for (let elem of array) {
    if (elem === x) result.push(idx)
    idx++
  }
  return result
}

console.log(indicesOfTarget([30, 30, 30], 30), 'should return', [0, 1, 2])
console.log(indicesOfTarget([3, 2, 5, 5, 1], 5), 'should return', [2, 3])