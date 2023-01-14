

/*

(Math Law === collatz):
  if you do this, youll always get to 1
Given a positive integer, what is the total amount of times it takes to get to 1.

this:
if even divide by 2
if odd multiply by 3 and add 1

return total amount of times

*/
let map = new Map()

function solu (int) {
  let counter = 0;
  let currentNumber = int;
  while (currentNumber !== 1) {
    console.log(counter)
    if (check(currentNumber)) return map.get(currentNumber) + counter
    if (currentNumber % 2 === 0) {
      currentNumber /= 2
    } else {
      currentNumber = currentNumber * 3 + 1
    }
    counter++
  }
  map.set(int, counter)
  return counter
}

function check(int) {
  if (map.has(int)) {
    return true
  } else {
    return false
  }
}

// console.log(solu(3)) // 7 [3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1]
// console.log(solu(10)) // 6 [10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1]



/*
Recursive solution
Recursion Backtracking

[10, 5, 16, 8, 4, 2, 1]
() => 
10 => counter 6 (map.set(10, 6))
  5 counter 5 (map.set(5, 5))
    16 counter 4 (map.set(16, 4))
      8 counter 3 (map.set(8, 3))
        4 counter 2 (map.set(4, 2))
          2 counter 1 (map.set(2, 1))
            1 counter = 0; ^ map.set(1, counter = 0)
*/
  


/*
Collatz conjecture

Given a positive integer, return the total amount of times it takes to reach one.

if even, divide by 2.
if odd, multiply by 3 and add 1.

Take 10 for example: 10 is even, so we cut it in half to get 5. Since 5 is odd, we triple it and add 1. Now we have 16, which is even, so we halve it to get 8, then halve that to get 4, then halve it again to get 2, and once more to get 1. Since 1 is odd, we triple it and add 1. Now we’re back at 4, and we know where this goes: 4 goes to 2 which goes to 1 which goes to 4, and so on. We’re stuck in a loop.
*/

function positiveInt(int) {
  let counter = 0 
  while (int !== 1) {
    if (int % 2 === 0) {
      int = int / 2 
    } else {
      int = int * 3 + 1
    }
    counter++
  }
  return counter 
}


console.log(positiveInt(4), 2)
console.log(positiveInt(10), 6)

