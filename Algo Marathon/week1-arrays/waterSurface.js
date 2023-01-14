
/*
Water Surface Area

  |               
  |     |         
  |     |   |     |
  |     |   |     |
  4 0 0 3 0 2 0 0 2 
    3 3   2   2 2 = 12

  |               |
  |     |         |
  |     |   |     |
  |     |   |     |
  4 0 0 3 0 2 0 0 4
    4 4 1 4 2 4 4 = 23

                  |
        |         |
  |     |   |     |
  |     |   |     |
  2 0 0 3 0 2 0 0 4
    2 2   2   2 2 = 10
*/

function waterSurface(array) {
  let total = 0;
  let firstPillar = 0;

  

  return total // returns surface area
}

function findPillars(array) {
  let first = 0;
  let last = 0;

  // find first pillar
  for (let elem of array) {
    if (elem > first) {
      first = elem;
    }
    
  }

  return [first, last]
}

// console.log(waterSurface([4, 0, 0, 3, 0, 2, 0, 0, 2]), 12)
// console.log(waterSurface([4, 0, 0, 3, 0, 2, 0, 0, 4]), 23)
// console.log(waterSurface([2, 0, 0, 3, 0, 2, 0, 0, 4]), 10)



