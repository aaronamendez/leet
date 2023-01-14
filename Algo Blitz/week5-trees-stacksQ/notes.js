/* 
 Q. Given two linked lists of different length, sum elements' value at the same position.

- Example:
  Input: LL1: 1->2->5, LL2: 3->4  
  Output: 4->6->5
- **[execution time limit] 4 seconds (js)**
- **[input] linkedlist.integer head1**
    
    head of the list1
    
- **[input] linkedlist.integer head2**
    
    head of the list2
    
- **[output] linkedlist.integer** 
*/

class ListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value + ' -> ' + this.next;
	}
}

// sumList .next = () -> 1
// sumList = sumList.next

// function solution(list1, list2) {
//   let sumList = new ListNode();
//   let pt = sumList;
//   let sum = 0;
//   while (list1 || list2) {
//     if (list1 && list2) {
//       sum = list1.value + list2.value;
//       pt.next = new ListNode(sum);
//       list1 = list1.next;
//       list2 = list2.next;
//       pt = pt.next;
//     } else if (!list1) {
//       sum = list2.value;
//       pt.next = new ListNode(sum);
//       list2 = list2.next;
//       pt = pt.next;
//     } else {
//       sum = list1.value;
//       pt.next = new ListNode(sum);
//       list1 = list1.next;
//       pt = pt.next;
//     }
//   }
//   return sumList.next;
// }

let head1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let head2 = new ListNode(3, new ListNode(2, new ListNode(4, new ListNode(6))));

// console.log(solution(list1, list2).toString()) // => 4 -> 5 -> 9 -> 6 -> null

/* RECURSIVE */

function solution(head1, head2) {
	/**
	 * listNode = new listNode()
	 * pointer = listNode
	 *
	 * def helper(head1, head2, pointer):
	 *    if head1 AND head2: # we have both values
	 *        sum = head1.value + head2.value
	 *        pointer.value = sum
	 *        pointer.next = new listNode()
	 *        return helper(head1.next, head2.next, pointer.next)
	 *    else:
	 *
	 * sum + sumFunction(arg1)
	 *
	 * helper()
	 *
	 * return listNode
	 *
	 * solution(head1.next, head2.next)
	 *
	 */
}

console.log(solution(head1, head2).toString()); // => 4 -> 5 -> 9 -> 6 -> null

/*
base case
   
recursive call

merge results
*/

/*

/*


*/

/*

. Given a linked list, make a copy of the list from the kth position (from the head) to the end of the list.

- You may assume all elements have positive integer value, and k is positive.
- k position/index follows the one-based numbering rule (i.e. the position/index of the first element of an array is 1, not 0).
- If k exceeds the length of the list, return a linked list node with a value -1 instead.
- **[input] integer k**
- **[output] linkedlist.integer**

*/

/**function solution(list1,list2) {
 *  if (list1.value && list2.value) {
 *    let resultList = new ListNode(list1.value + list2.value);
 *    let pt = resultList;
 *    helper(list1.next,list2.next)
 *  }
 *  
      * function helper(list1,list2) {
      *  if (!list1) {
      *   pt.next =  new ListNode(list1.value)
      *   pt = pt.next;
      *   helper(list1.next,list2.next)
      * } 
      * if (!list2) {
      *   pt.next =  new ListNode (list2.value)
      *   pt = pt.next
      *   helper(list1.next,list2.next)
      * } 
      * 
      * if (list1 && list2) {
 *      pt.next =  newListNode(list1.value + list2.value)
 *      pt = pt.next; 
 *      helper(list1.next,list2.next)
 * 
      * if (!list1 && !list2) {   //end of recursion 
      *  return 
      * }  
      * 
 *    }
 * }
 * 
 
*/

// Figure out where to post this

class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value + ' -> ' + this.next;
	}
}

/*
Q. Given an unsorted linked list, count the number of elements (recursively).
Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1
*/

function count(head) {
	// Write your code here.
	if (!head) return 0;
	let counter = 0;
	if (head) counter += 1;
	return counter + count(head.next);
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(count(null).toString()); // 0
console.log(count(LL1).toString()); // 3
console.log(count(new ListNode()).toString()); // 1
console.log(count(new ListNode(0, new ListNode())).toString()); // 2
