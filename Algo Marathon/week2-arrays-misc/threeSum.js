// Given an array, return True if the array contains 3 values that sum up to a target value, and False otherwise.
// function Signature: 
// func threeSum(input: [Int]) -> Bool
// Target runtime and space complexity:
// Runtime: O(n^2)
// Space: O(1)
// Examples:
// [1, 2, 3],  6 returns True
// [1, 2, 3, 4], 0 returns False

/*
sort => [1, [2], 3, 4], 8 (1 + 3 + 4)
         $. 2nd.  lst
         firstLoop () => 
            total = array[i]
            1st = array[i + 1]
            last = array[array.length - 1]
            whileLoop (1st < last) =>
              let sum = total + 1st + last
              if (sum > target) {
                last--
              } else if (sum < target) {
                1st++
              } else if (sum === target) {
                return true
              }

*/

function threeSum(array, target) {
  let sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    let total = sorted[i];
    let first = i + 1;
    let last = sorted.length - 1;
    while (first < last) {
      let sum = total + sorted[first] + sorted[last];
      if (sum > target) {
        last--
      } else if (sum < target) {
        first++
      } else if (sum === target) {
        return true
      }
    }
  }
  return false
}
 
console.log(threeSum([1, 2, 3], 6), true)
console.log(threeSum([1, 2, 3, 4], 0), false)
console.log(threeSum([[12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5]]))
