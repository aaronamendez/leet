/*
Password Generator
Examples
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]
generatePasswords(["a", "b", "c"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
  "aaab",
  "aaac",
  "aab",
  "aaba",
  "aabb",
  "aabc",
  "aac",
  "aaca",
  "aacb",
  "aacc",
  "ab",
  etc
]
*/

// COME BACK TO THIS ONE
function generatePassword (array, min, max) { // min = 2
  let result = []
  let currMin = min
  // elem = 'a'
  for (let elem of array) {
    while (currMin <= max) { // 4 <= 4
      // let string = ''
      let newString = new Array(currMin).fill(elem).join('')
      // for (let i = 0; i < currMin; i++) { // i= 0, 1, 2, 3 < 4
      //   string += elem // 'creates the string via length of currMin = 4 a's, 'aaaa'
      // } 
      result.push(newString) // push 'aaa'
      // string = ''
      currMin++ // 4 + 1 = 5
    }
    currMin = min
  }
  return result
}

console.log(generatePassword(['a', 'b', 'c'], 2, 4))

console.log(new Array(10).fill('a').join(''))


/**
 * aa
 * aaa
 * aaaa
 * aaab
 * aabb
 * abbb
 * bbbb
 * bbb
 * bb
 * bc
 * 
 */