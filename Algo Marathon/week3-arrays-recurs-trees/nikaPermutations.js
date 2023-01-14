
/*
Given an array of unique numbers (nums), find all possible unique combinations of those numbers
Be aware of the sort order of the output.
 The sets should be in effectivley l

input : [1,2,3]
output: [
  [], 
  [1], 
  [1,2], 
  [1,2,3], 
  [1,3], 
  [2], 
  [2,3], 
  [3]
]    

*/
function isSorted(array){
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}

function findCombs(input){
  let result = []
  let allPermutations = [];
  
  function helper(path = []){
    if (path.length > input.length) {
      return
    }
    allPermutations.push(path.slice())
    for (let elem of input) {
      if (!path.includes(elem)) {
        path.push(elem)
        helper(path)
        path.pop()
      }
    }
  }
  
  helper()
  for (let i = 0 ; i < allPermutations.length ; i++){
    let el = allPermutations[i]
    if (isSorted(el)) result.push(el)
  }
  
  return result

}

console.log(findCombs([1,2,3]))


  // S*P + I*P
    /*
  Building the perma
    Checking If it's Sorted O(n)
      stack frames O (n)
      O((p * s) + n^2=i*i=p)
      O(2N^2)
      O(N^2)
      O(p * n^2)
  */

/*                    1           2.          3
                  1     2
                       3
                         

*/



// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations

function sum(arr , target){

 let total =  arr.reduce((sum, curr) =>{
    return sum + curr
  }, 0)
  return total === target

}

function solution(k,n){
  let combinations = []
  let nums = []
  for(let i = 1 ; i <= 9 ; i++) nums.push(i)

  function backtrack(path = []){
    if(path.length > k) return 
    if(path.length === k && sum(path,n) ){
      
      combinations.push([...path])
      path.pop
    }
    for(let i = 0 ; i < nums.length ;i++ ){
      if(!path.includes(nums[i])){ 
          path.push(nums[i])
      backtrack(path)
      path.pop()
      }
    }

  }
  backtrack()
  return combinations

}



console.log(solution(3,7))