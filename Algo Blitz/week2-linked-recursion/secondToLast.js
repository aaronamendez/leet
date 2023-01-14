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

let arr = [1, 2, 3]; // try [1, 2];

for (let elem of arr) {
	let node = new Node(elem);
	if (!head) head = tail = node;
	if (head) {
		tail.next = node;
		tail = node;
	}
}

console.log(head.toString());

function secondToLast(head) {
	while (head) {
		if (!head.next.next) return head.value;
		head = head.next;
	}
}

console.log(secondToLast(head));
