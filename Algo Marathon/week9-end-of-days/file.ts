/*
In this task, we will practice working through a recursion problem.
Prompt
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.
Function Signature
def findMinIndex(arr: list[int]) -> int:
def findMaxIndex(arr: list[int]) -> int:

*/

function findMinIndex(arr: number[]): number {
	let min: number = Infinity;
	let index: number = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
			index = i;
		}
	}

	return min === Infinity ? -1 : index;
}

// console.log(findMinIndex([10, 91298, 398, 1]), 'should return', 3)
// console.log(findMinIndex([1]), 'should return', 0)
// console.log(findMinIndex([10, 91298, -398, 1]), 'should return', 2)
// console.log(findMinIndex([]), 'should return', -1)

function findMaxIndex(arr: number[]): number {
	let max: number = -Infinity;
	let index: number = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
			index = i;
		}
	}

	return max === -Infinity ? -1 : index;
}

// console.log(findMaxIndex([10, 91298, 398, 1]), 'should return', 1)
// console.log(findMaxIndex([1]), 'should return', 0)
// console.log(findMaxIndex([-10, -91298, -398, -1]), 'should return', 3)
// console.log(findMaxIndex([]), 'should return', -1)

/*
Q. Given a string, return the index of the first occurrence of a target string. Return -1 if the input string does not contain the target string.

Examples:
• Given a string: "hello", target: "ll" // returns 2
• Given a string: "formation", target: "afor" // returns -1
*/

function strstr(string: string, target: string): number {
	if (string.length < target.length) return -1;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === target[0]) {
			for (let j = 0; j < target.length; j++) {
				if (string[i + j] !== target[j]) break;
				if (j === target.length - 1) {
					return i;
				}
			}
		}
	}

	return -1;
}

// console.log(strstr("hello", "ll"), 'should return', 2)
// console.log(strstr("formation", "afor"), 'should return', -1)
// console.log(strstr("aaron", "on"), 'should return', 3)
// console.log(strstr("somethingrandom", "ran"), 'should return', 9)

/*
Details
In this task, we will practice working through a linked list problem.
Prompt
Given a linked list and a positive number, k, reverse k items in the list at a time as well as reverse the remaining fragment, if any.

1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 3")

1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 3)) == "3 -> 2 -> 1 -> 6 -> 5 -> 4")
*/
class ListNode {
	value: number;
	next: ListNode | null;
	constructor(value: number, next = null) {
		this.value = value;
		this.next = next;
	}
	toString(): string {
		return this.value + ' -> ' + this.next;
	}
}

function reverseKItems(head: ListNode, k: number): ListNode | null {
	return head;
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
	)
);

console.log(reverseKItems(list1, 2), 'should return', '2 -> 1 -> 3');
console.log(
	reverseKItems(list2, 3),
	'should return',
	'3 -> 2 -> 1 -> 6 -> 5 -> 4'
);
