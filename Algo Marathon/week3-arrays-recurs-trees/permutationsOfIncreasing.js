
/*
Given two positive integers seqLen and upperBound, print all increasing sequences of length seqLen such that the elements in every sequence are from the first upperBound natural numbers.
You can assume seqLen will be positive and <= upperBound. You may want to write a helper method to recurse easier.

printSeq(seqLen=2, upperBound=3)
1 2
1 3
2 3

printSeq(seqLen=3, upperBound=4)
[
  [1 2 3 ]
  [1 2 4 ]
  [1 3 4 ]
  [2 3 4 ]
]
printSeq(seqLen=1, upperBound=5)
1
2
3
4
5

 [1,2] [3]
 [1] [3] // pop
 [1,3] => [] 
 [3] => // shift
 [2, 3]
[2,3]
[1, 2]
[1, 3]

*/

function upperBoundByLength(len, upper) {
  if (len === 0) return []
  let result = []
  let array = []

  for (let i = 1; i <= upper; i++) { 
    array.push(i)
  } 
  /*
  Building the perma
    Checking If it's Sorted O(n)
      stack frames O (n)
      O(p * s * n^2)
      O(p * n^2)
  */
  function helper(perma = []) {
    if (perma.length === len) {
      if (isSorted(perma)) {
        result.push([...perma])
      }
      return
    }
    for (let elem of array) {
      if (!perma.includes(elem)) {
        // Check if elem is greater than perma[perma.length] 
        perma.push(elem)
        helper(perma)
        perma.pop()
      }
    }
  }
  function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false
      }
    }
    return true
  }
  helper()
  return result
}

console.log(upperBoundByLength(2, 3), 'end', 'should return', [[1, 2], [1, 3], [2, 3]])
console.log(upperBoundByLength(3, 4), 'end', 'should return', [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]])
console.log(upperBoundByLength(1, 5), 'end', 'should return', [[1], [2], [3], [4], [5]])
console.log(upperBoundByLength(0, 1000000), 'end', 'should return', [])









