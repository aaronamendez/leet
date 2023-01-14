

/*
() => through the dictionary
  as we do that, 

*/

function findLongestWord (s, dictionary) {
  let longestLength = 0;
  let longestWord = "";

  let string = new Map();

  // builds the string into the map
  for (let letter of s) {
    if (string.has(letter)) {
      string.set(letter, string.get(letter) + 1)
    } else {
      string.set(letter, 1)
    }
  }

  for (let elem of dictionary) {
    let i = 0;
    let copy = string
    console.log(copy)
    while (i < elem.length) {
      let letter = elem[i]
      if (copy.has(letter)) {
        copy.set(letter, copy.get(letter) - 1)
        if (copy.get(letter) < 0) break;
      } else {
        break;
      }
      i++
    }
    console.log(copy)
    console.log(longestWord)
    if (i === elem.length - 1) {
      if (longestLength < elem.length) {
        longestLength = elem.length
        longestWord = elem
      }
    }
  }
  return longestWord;
};

console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"]))