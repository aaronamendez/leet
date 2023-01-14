const alphabet = "abcdefghijklmnopqrstuvwxyz"
const password = "milk"

function guessPassword(array, size) {
  let result = []

  function helper(perma = []) {
    if (perma.length === size) {
      console.log(perma)
      result.push(perma.join(""))
      return
    } 
    for (let elem of array) {
      if (!perma.includes(elem)) {
        perma.push(elem)
        helper(perma)
        perma.pop()
      }
    }
  }
  helper()
  return result.includes(password) ? "Found: " + password : "Couldn't find the password :("
}

console.log(guessPassword(alphabet.split(""), 4))



