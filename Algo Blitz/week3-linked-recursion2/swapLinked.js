// Singly-linked lists are already defined with this interface:
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value + ' -> ' + this.next;
	}
}

let list = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(list.toString());

function solution(head) {
	if (!head) return null;
	let newHead = head;
	while (!newHead && !newHead.next) {
		let save = newHead.value;
		newHead.value = newHead.next.value;
		newHead.next.value = save;
		newHead = newHead.next.next;
	}
	return newHead;
}

console.log(solution(list).toString());

function sum(arr, idx) {
	if (arr.length === idx) {
		return 0;
	} else {
		return arr[idx] + sum(arr, (idx += 1));
	}
}

console.log(sum([1, 2, 3, 4]));
