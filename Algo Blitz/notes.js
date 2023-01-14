/* -------------- Marcos -------------- */

/*
Given a sorted array, and a target of K, return true if there are two values in the array that sum up to the target.
  input: [1, 5, 8, 10, 13], k = 15
  output: true
  explanation: because 5 and 10 = 15
*/

function targetK(array, k) {
  let first = 0 
  let last = array.length - 1
    while(first < last) {
      let sum = array[first] + array[last]
      if (sum === k) {
      return true
      } else if (sum > k) {
        last--
      } else if (sum < k) {
        first++
      }  
    } 
  return false
}


// console.log(targetK([1,5,8,17,20], 6 ), true)
// console.log(targetK([2,4,6,8,10], 1), false)
// console.log(targetK([1,5,10,15,35], 40), true)
// console.log(targetK([]), false)

/*
Given an array, reverse the array.
  input: [1, 2, 3]
  output: [3, 2, 1]
  explanation: cause its reversed
*/

function reverseArr(arr) {
  let  newArr = arr.reverse() 
  return newArr
  
}

// console.log(reverseArr([1, 2, 3]))
// console.log(reverseArr([1, 3, 5, 6]))
// console.log(reverseArr([]))


/*
Given an array of names, return which person showed up the most amount of times
  input: ["aaron", "brandon", "marcos", "melissa", "nika", "marcos"]
  output: "marcos"
  explanation: cause "marcos" showed up the most amount of times 
*/

function mostFrequent(arr) {
  let map = new Map()
  let mostFrequent = null
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  for(let [key, value] of map) {
    if(value > count) {
      mostFrequent = key
      count = value
    }
  }
  return mostFrequent
}

// console.log(mostFrequent(["aaron", "brandon", "marcos", "melissa", "nika", "marcos"]), "marcos")
// console.log(mostFrequent(["aaron", "brandon", "brandon", "brandon", "nika", "marcos"]), "brandon")
// console.log(mostFrequent([]), null)

/*
Given an array of values, return how many values are odd.
  input: [1, 3, 5, 6, 5]
  output: 4
  explanation: 1, 3, 5 and 5 again sum up to 4 total values
  
*/

function arrOfVal(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num % 2 !== 0) newArr.push(num)
  }
  return newArr.length
}


// console.log(arrOfVal([1, 3, 5, 6, 5]), 4)
// console.log(arrOfVal([]), 0)
// console.log(arrOfVal([1, 3, 5, 6]), 3)



/* -------- Level 2 --------*/

/*
Given an array and a target count X, return true if there are fewer than X distinct values in the array. For example, given [1, 2, 2, 3, 3], 4 return true because there are only 3 distinct values 1, 2 and 3.
  
Example:
  [1, 2, 2, 3, 3], 3 => false (there are exactly 3 distinct values)
*/

function distinctValues(arr, x) {
  let map = new Map()
  let count = 0
  let frequent = null
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (map.has(num)) {
      map.set(num, map.get(num) + 1 )
      } else {
        map.set(num, 1)
      }
  }
  for(let [key, value] of map) {
    let num = key[i]
    console.log(num)
    if( num > x) {
      frequent = key
      count = value
    }
  }
}

/* --------- Level 3 --------*/

/*
Before starting this question, remember you're given an object instead of an array. You'll need to know how to iterate through an object. Might do you some good to look up "Object.entries" and start using some of the newer iterating syntax like:

for (let [key, value] of map)

Given an input [dictionary] mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.
  Examples:

  {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5} => true
  {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5} => false
  {} => true
  {"oliver": 1} => false
*/


/*
In this task, we will practice working through a matrix problem
Given a target integer, let's say 5, return a matrix like this:

[[5, 4, 3, 2, 1],
 [4, 3, 2, 1],
 [3, 2, 1],
 [2, 1],
 [1]]
*/

function solution(diffs) {
  let rating = 1500
  let highest = 1500;
  for (let elem of diffs) {
    rating += elem;
    if (rating > highest) {
      highest = rating
    }
  }
  return [highest, rating]
}

// console.log(solution([100, -200, 350, 100, -600]), [1850, 1250])







const array = [1, 2, 3, 4, 5, 10, 12]
// Below, get the value 5
console.log(array[4])
// Below, add the first and last values together
console.log(array[0] + array[array.length - 1])