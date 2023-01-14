function isSorted (array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}

function findCombs(input){
  let result = []
  let allPermutations = [];
  
  function helper(path = []){
    if(path.length > input.length) {
      return
    }
    allPermutations.push(path.slice())
    for (let elem of input) {
      if (!path.includes(elem)) {
        path.push(elem)
        helper(path)
        path.pop()
      }
    }
  }
  
  helper()

  for(let i = 0 ; i < allPermutations.length ; i++){
    let el = allPermutations[i]
    if(isSorted(el)) result.push()
  }
  
  return result

}

console.log(findCombs([1,2,3]))