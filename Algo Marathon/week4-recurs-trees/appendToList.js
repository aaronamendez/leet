/*
 Q. Given a linked list, append an element with a target value to the list iteratively.
*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString() {
    return this.value + ' -> ' + this.next
  }
}

function appendToListRecursive (head, targ) {
  if (head.next === null) {
    head.next = new ListNode(targ)
  } else {
    appendToListRecursive(head.next, targ)
    return head
  }
}

function appendToListIterative (head, targ) {
  if (!head) return null;
  let prev = head;
  while (prev) {
    if (prev.next === null) {
      prev.next = new ListNode(targ)
      break;
    } else {
      prev = prev.next;
    }
  }
  return head;
}

/*
input:
  1 -> 2 -> 3 -> 4 -> null,
  and target 5
output:
  1 -> 2 -> 3 -> 4 -> 5 -> null
*/

let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
let list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

console.log(appendToListRecursive(list, 5).toString())
console.log(appendToListIterative(list2, 5).toString())



