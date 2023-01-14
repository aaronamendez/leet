class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value + ' -> ' + this.next;
	}
}

let head = null,
	tail = null;

let arr = [1, 2, 3, 5, 6]; // try [1, 3] => 2

for (let value of arr) {
	let node = new Node(value);
	if (!head) head = tail = node;
	if (head) {
		tail.next = node;
		tail = node;
	}
}

console.log(head.toString());

function findMissing(head) {
	while (head) {
		if (head.next.value !== head.value + 1) return head.value + 1;
		if (!head.next) return head.value + 1;
		head = head.next;
	}
}

console.log(findMissing(head));
