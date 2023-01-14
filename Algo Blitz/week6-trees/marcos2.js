

// function solution(numbers, left, right) {
//   let result = []
//   for (let i = 0; i < numbers.length; i++) {
//       let num = (i + 1)
//       let x = left <= num >= right
//       console.log(x)
//       if (left <= x && right >= x) {
//           result.push(true)
//       } else result.push(false)
//   }
//   return result
// }

/* 
  gca practice:
  You are given array of integers 'numbers' and two intergers 'left' and 'right'. Your task is to calculate a boolean array 'result'
  , where 'result[i]' = true if there exists an [integer] 'x', such that 'numbers[i] = (i + 1) * x' and 'left <= x <= right. Otherwise, 'result[i] should be set to false.

    input: numbers = array, left = interger, right = interger
    output: result = boolean array

    number = 8 = (i + 1) * x
             _ = _ * _
             5 = 2 * _ 
             8 / 1 = _ === (2.5), && x is between left and right

    example: numbers[8, 5, 6, 16, 5], left = 1, right = 3
                               ^
    result = [false, false]
    

    for (let i) {
      _ = _ * _
      let num = numbers[i];
      let sumOfI = (i + 1);
      let x = num / sumOfI;
      if ((Number.isInteger(x)) && (x > left && x < right))
        then do result.push(true)
      else 
        then do result.push(false)
    }
*/

/* 
Given an array, what is the highest frequency of numbers that appear. 
    For Example:
    input: [1, 2, 3, 3]
    output: 3
    Explanation: 3 appeared more times than the others
*/
const array = [1, 2, 3, 3]
let map = new Map()

function mapofarray(value , index , array) {
  let map = new Map()
  map.set(1,1)
  map.set(2,2)
  map.set(3,3)
  for(let elem of array){
    if ()
  }
}