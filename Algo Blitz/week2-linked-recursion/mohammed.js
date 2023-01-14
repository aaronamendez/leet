/*
Q. Given a linked list, sum all elements in the list.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
• Given a linked list: 1 // returns 1
*/

class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

// function sum(node, total = 0) {
//   // Write your code here.
//   if (!node) {
//     return total;
//   }
//   total = total + node.value

//   return sum(node.next, total)
// }

// O(N) time
function sum(node) {
	console.log(node);
	if (!node) {
		return 0;
	} else {
		return node.value + sum(node.next);
		// 1          // 4 + 5 + 0 = 9
	}
}
/*
  (function)
      [value, (function)]. // 1
              [value, (function)] // 4
                    [value, (function)] // 5
                           [value, (function)] // 0 
                           4 + 5 + 0 = 9
*/

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(sum(null)); // 0
console.log(sum(LL1)); // 10
console.log(sum(new ListNode(1))); // 1
