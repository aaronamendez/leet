/*
3 students, "A", "B" and "C"

[
  [ 'A', 'B', 'C' ],
  [ 'A', 'C', 'B' ],
  [ 'B', 'A', 'C' ],
  [ 'B', 'C', 'A' ],
  [ 'C', 'A', 'B' ],
  [ 'C', 'B', 'A' ],
]
*/

let arr = ["A", "B", "C"]
console.log(seatingArrangementsInefficient(arr))

function seatingArrangementsInefficient(students) {
  let filledSeats = []
  let results = []

  for (let s1 of students) {
    if (filledSeats.includes(s1)) {
      continue;
    }
    filledSeats.push(s1)
    for (let s2 of students) {
      if (filledSeats.includes(s2)) {
        continue;
      }
      filledSeats.push(s2);

      for (let s3 of students) {
        if (filledSeats.includes(s3)) {
          continue;
        }
        filledSeats.push(s3);
        // create a new array as an entry
        results.push([...filledSeats])
        filledSeats.pop()
      }
      filledSeats.pop();
    }
    filledSeats.pop();
  }

  return results
}

console.log(seatingArrangements(arr))

function seatingArrangements(students) {
  let results = []

  function fillSeats(filledSeats = []) {
    /*
      base case when len of filledSeats reaches len students push to results
    */
    if (filledSeats.length === students.length) {
      results.push([...filledSeats])
    }
    for (let s of students) {
      if (filledSeats.includes(s)){
        continue;
      }
      filledSeats.push(s);
      fillSeats(filledSeats)
      filledSeats.pop()
    }
  }

  fillSeats()

  return results
}