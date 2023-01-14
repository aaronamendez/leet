/*
Given a linked list and a target k, return a linked list containing every kth element in the list.
Examples:
1 -> 3 -> 6 -> 2 -> 8 -> 9, 3 => 6 -> 9
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

let list = new Node(
	1,
	new Node(3, new Node(6, new Node(2, new Node(8, new Node(9)))))
);

function everyKthElement(head, target) {
	let newHead = null;
	let pointer = newHead;
	while (head) {
		if (head.value % target === 0) {
			// we insert it into newHead
			if (!newHead) {
				newHead = new Node(head.value);
				pointer = newHead;
			} else {
				newHead.next = new Node(head.value);
				newHead = newHead.next;
			}
		}
		head = head.next; // we continue traversing
	}
	return pointer;
}

// console.log(everyKthElement(list, 3).toString()) // => 3 -> 6 -> 9 -> null

// build the new linked list if the node is equal to null

/*
Given an array containing numbers, convert this to a singly linked list and return the head of the list.
Examples:
    [1, 2] => 1 -> 2
*/

function arrayToLinkedList(array) {
	if (array.length < 1) return null;
	let head = null;
	let pointer = head; // null
	for (let elem of array) {
		if (!head) {
			head = new Node(elem);
			pointer = head; // node
		} else {
			head.next = new Node(elem);
			head = head.next;
		}
	}
	return pointer;
}

console.log(arrayToLinkedList([])); // => null
console.log(arrayToLinkedList([1]).toString()); // => 1
console.log(arrayToLinkedList([1, 2, 3, 4, 5]).toString()); // => 1 -> 2 -> 3 -> 4 -> 5
