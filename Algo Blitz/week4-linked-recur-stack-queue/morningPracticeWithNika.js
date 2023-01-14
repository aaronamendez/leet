/*
Q. Given a sorted linked list of unique integers, check if the list contains an element with a target value.

Examples:
• Given a linked list: 2 ➞ 3 ➞ 5, target: 2 // returns True
• Given a linked list: 2 ➞ 3 ➞ 5, target: 4  // returns False
*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value + ' -> ' + this.next;
	}
}

// let list = new Node(2, new Node(3, new Node(5)))

function search(head, target) {
	if (!head) return false;
	while (head) {
		if (head.value === target) return true;
		else if (head.value > target) return false;
		head = head.next;
	}
	return false;
}

// console.log(search(list, 2)) // => true
// console.log(search(list, 4)) // => false

/*
Q. Given an unsorted linked list, find the element with the largest value.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
• Given a linked list: 1  // returns 1
*/

// let list = new Node(2, new Node(3, new Node(5)))

function findMaxRecursive(head) {
	function helper(head, largest = 0) {
		if (!head) return largest;

		if (head.value > largest) helper(head.next, (largest = head.value));
		else return helper(head.next, largest);
	}
	return helper(head);
}

// console.log(findMaxRecursive(list)) // => 5

/*
Given a linked list, return an array with all the elements in reverse.
Examples: 
    1 -> 3 -> 5 -> 2 => [2, 5, 3, 1]
*/

let list = new Node(1, new Node(3, new Node(5, new Node(2))));
/*
  iterative approach:
    create the output array
    traverse the linked list
      while a node exists
        shift the nodes value into the output array
    return the output array
  recursive approach:
    create the output array
    base if no head, return array
    if head 
      shift the heads value into the output array
    recursive(head.next, array)
*/
function reverseRecursive(head) {
	function helper(head, outputArray = []) {
		if (!head) return outputArray;
		outputArray.unshift(head.value);
		return helper(head.next, outputArray);
	}
	return helper(head);
}

console.log(reverseRecursive(list)); // => [2, 5, 3, 1]
