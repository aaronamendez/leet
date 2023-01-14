/*
CodeSignal Recursion 
Given a set of units and a target value, return all of the ways that these units may be combined to achieve the target value. For example, for units [1, 2] and a target of 4, the output should be:

[
  [1, 1, 1, 1],
  [1, 1, 2],
  [2, 2]
]
Notice that [1, 2, 1] and [2, 1, 1] are also possibilities but we only return the one where the values are sorted from smallest to largest.

The units will always be a non-empty array of positive integers and sorted from small to large. The output should be ordered by those using the small units first before moving to larger and larger units.


CodeSignal
InorderTraversal Iterative and dfs
Binary tree right side view
Binary tree left side view
*/


/*
This problem was asked by Bloomberg. - sophie novati

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

*/

/*

given a list of datapoints each describing an event in a delivery schedule

each datapoint contains an id, a timestamp, and a "type" (pickup/dropoff)

[
    {
        "id": 1,
        "t": 10,
        "type": "p"
    },
    {
        "id": 1,
        "t": 20,
        "type": "d"
    },
    {
        "id": 2,
        "t": 50,
        "type": "p"
    },
    {
        "id": 2,
        "t": 60,
        "type": "d"
    },
    {
        "id": 3,
        "t": 50,
        "type": "p"
    },
    {
        "id": 3,
        "t": 60,
        "type": "d"
    }
]

[{id, time, type}]
[{1, 10, p}, {1, 20, d}, {2, 30, p}, {3, 30, p}, {3, 50, d}, {2, 60, d}]

0     10      20      30      40      50      60      70
1       ------         
2                       -----------------------
3                              ---------

total time = 10 + 30 = 40

calculate the total "active" time of this schedule! (active = at least 1 package is in the process of being delivered)     

*/

function solution(array) {
  // sort by time
  let sorted = array.sort((a, b) => a["time"] - b["time"])
  
  let total = 0;
  let pickups = new Map()
  let within = false

  // Build Pickup Times
  for (let elem of sorted) {
    if (elem.type === "p") {
      within = true
      pickups.set(elem.id, elem.time)
    }
  }

  console.log(pickups)
  
  // Match Delivery Times
  for (let elem of sorted) {
    if (elem.type === "d") {
      let pickup = pickups.get(elem.id)
      let sum = elem.time - pickup
      total += sum
    }
  }

  return total
}

console.log(solution([
  {id: 1, time: 20, type: "d"}, 
  {id: 1, time: 10, type: "p"}, 
  {id: 2, time: 30, type: "p"}, 
  {id: 3, time: 40, type: "p"}, 
  {id: 3, time: 50, type: "d"}, 
  {id: 2, time: 60, type: "d"}
]), 40)