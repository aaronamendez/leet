function backspaceCompare (s, t) {
  let firstStack = [];
  let secondStack = [];
  for (let letter of s) {
    if (letter !== "#") {
      firstStack.push(letter)
    } else {
      firstStack.pop()
    }
  }
  for (let letter of t) {
    if (letter !== "#") {
      secondStack.push(letter)
    } else {
      secondStack.pop()
    }
  }
  return firstStack.join("") === secondStack.join("")
}

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))