// Coding Drills Recursion on Linked Lists

// Use recursion to write code for the following problems:

// Given a linked list and an integer, find whether the integer exists in the list. Return a boolean.
// Given a linked list and an integer, return how many times the integer exists in the list.
// Find mean of a list of integers***
// Replace all negative values with a 0***
// Reverse the list***

/*


4->6->7
7->6->4



*/

class ListNode {
	value;
	next;

	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

function arrayToLinkedList(array) {
	let head = null;
	let currentNode = null;

	array.forEach((item) => {
		let nextNode = new ListNode(item);

		if (head === null) {
			head = nextNode;
			currentNode = nextNode;
		} else {
			currentNode.next = nextNode;
			currentNode = nextNode;
		}
	});

	return head;
}

function linkedListToArray(head) {
	let currentNode = head;
	let nodeValues = [];

	while (currentNode !== null) {
		nodeValues.push(currentNode.value);
		currentNode = currentNode.next;
	}

	return nodeValues;
}

function reverse(head) {
	if (!head) return null;
	let newHead = head;

	if (head.next) {
		newHead = reverse(head.next);
		head.next.next = head;
	}
	head.next = null;
	return newHead;
}

// function reverse(head, prev) {
//   // reverse(head.next, head)

//   prev.next = head
// }

// let myNode = new ListNode(3, new ListNode(4, new ListNode(5)));
// let listOne = [8];
// let emptyList = [];

// console.log(linkedListToArray(reverse(myNode)));
// console.log(reverse(arrayToLinkedList(listOne)));
// console.log(reverse(arrayToLinkedList(emptyList)));

// function findMean(head, sum, length)
// {
//   if(head==null){return (sum/length)}

//   return findMean(head.next,sum+head.value,length+1);

// }

// let test1 = arrayToLinkedList([1, 1, 1, 1])
// let test2 = arrayToLinkedList([1])
// let test3 = arrayToLinkedList([5, 5, 1, 2])
// console.log(findMean(test1,0,0));
// console.log(findMean(test2,0,0));
// console.log(findMean(test3,0,0));

/*
1 -> 2 -> 3 -> 0 -> null
$
                      return head
                       1 -> 2 -> 3 -> 0 -> null
*/

function convertNegatives(head) {
	if (!head) return;
	head.value = Math.max(head.value, 0);
	convertNegatives(head.next); // undefined
	return head;
}

console.log(
	linkedListToArray(
		convertNegatives(arrayToLinkedList([1, 2, -3, 4, -5, 6, -7]))
	)
);

// function

// work to do before pushing onto the stack
// var nextArrayValue = array.pop()
// var iterator = currentNum + 1

// recursive call

// work to do after popping off the stack

// any potential return value

// var stack = []
// stack.push(something)
// stack.pop()

/*

-
head.next // if value < 0 update to 0
-
head.next // if value < 0 update to 0
-
head.next // if value < 0 update to 0
-
head.next // if value < 0 update to 0
-
head.next // if value < 0 update to 0
-

*/
