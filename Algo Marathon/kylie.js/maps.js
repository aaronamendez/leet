let map = new Map()
map.set("Kylie", 10)

function clubEntries(names) {
  let map = new Map()
  let highestCount = 0;
  let person = ''

  for (let name of names) {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1)
    } else {
      // do not exist
      map.set(name, 1)
    }
  }
  
  for (let [key, value] of map) {
    if (value > highestCount) {
      highestCount = value
      person = key
    }
  }

  return person ? person : 'No one went!'
}

console.log(clubEntries(["kylie", "aaron", "allan", "kylie"]))
console.log(clubEntries([])) 