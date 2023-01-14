/*

*/

const array = [1, 2, 3, 4, 5]

const object = { name: "marcos", name: "aaron", name: "melissa" }

class Node {
  constructor(value , next = null) {
    this.value = value
    this.next = next
  }
  toString() {
    return this.value + " -> " + this.next 
  }
}

let nodeList = new Node(1, new Node(2, new Node(3, new Node(4))))

// console.log(nodeList.toString())
// [1] -> 2 -> 3 -> 4 -> null
// 1 -> 1 -> 1 -> 1 -> null
function printValuesInList(head) {
  
  let pointer = head

  while (pointer) {
    pointer.value = 1 // 1 -> 1
    pointer = pointer.next 
    
  }
  
  return head

}

console.log(printValuesInList(nodeList).toString())



