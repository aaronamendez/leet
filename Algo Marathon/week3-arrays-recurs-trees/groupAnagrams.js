
function groupSubStrings(arr) {
  let newArr = [];
  for (let elem of arr) {
    let newString = elem.split('').sort().join('')
    newArr.push(newString)
  }
  let newSortedArr = newArr.sort() // dont do this!
  let arryOfIdices = []
  return newSortedArr
}

// console.log(groupSubStrings(["yo", "act", "flop", "tac", "cat", "oy", "olfp"]))
/*---------Brainstorming Up Top----------*/

// my solution
function groupAnagrams(words) {
  // Write your code here.
  let map = new Map()

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");
    if (map.has(sortedWord)) {
      map.get(sortedWord).push(word)
    } else {
      map.set(sortedWord, [word])
    }
  }
  let values = map.values((value) => {
    return value
  })
  return [...values]
}

// AlgoExpert solution
// function groupAnagrams(words) {
//   // Write your code here.
//   const anagrams = {}
//   for (const word of words) {
//     const sortedWord = word.split("").sort().join("");
//     if (sortedWord in anagrams) {
//       anagrams[sortedWord].push(word);
//     } else {
//       anagrams[sortedWord] = [word];
//     }
//   }
//   return Object.values(anagrams)
// }


console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]), 'theirs')
// should be sorted like so 
// maybe not exact same apparently. passes algoExpert
// [
//   ["foo"],
//   ["flop", "olfp"],
//   ["oy", "yo"],
//   ["act", "cat", "tac"]
// ]
