/*
Given an array of N integers, generate all permutations of the given array.

Ideal complexity: O(N!) time, O(N) space; N = length of input

ALGO HERE:

[1, 2, 3] => 
[
  [1, 2, 3], 
  [1, 3, 2], 
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2], 
  [3, 2, 1],
]

function (array = [1, 2, 3])
  result = []
  declare recursive (permutation = []) =>
    if (permuation.length === array.length) {
      result.push(permuation)
    }
    for (let number of array) =>
      if (permutation.includes(str)) {
        continue
      }
      permutation.push(number)
      recursive(permutation)
      permutation.pop()
  return result
  


f (array = [1, 2, 3]) =>  
  result = [
    [1, 2, 3]
  ]
    recursive (perma = []) => 
      basecase = p.length === a.length // [1, 2, 3] result.push([...perma])
      for (let elem of array) => 1, 2, 3
        if (perma does not include elem) {
          push perma = [1] // [1,2,3]
          recurse [1]
                    [1, 2]
                      [1, 2, 3] < -- base case. Result = [1,2,3]
          pop [2]
        }
       2nd iterator of THIS for loop
      [2]
        [2, 1]
          [2, 1, 3]

*/  

function get_permutations(array) {
  let result = []
  function helper(perma = []) {
    if (perma.length === array.length) {
      result.push([...perma])
      return;
    } 
    for (let elem of array) {
      if (!perma.includes(elem)) {
        perma.push(elem)
        helper(perma)
        perma.pop()
      }
    }
  }
  helper()
  return result
}

console.log(get_permutations([1])); // [1]
console.log(get_permutations([1,2])) // [[1, 2], [2, 1]]
console.log(get_permutations([1,2,3])); 
/*
[1, 2, 3], 
[1, 3, 2], 
[2, 1, 3],
[2, 3, 1],
[3, 1, 2], 
[3, 2, 1],
*/ 