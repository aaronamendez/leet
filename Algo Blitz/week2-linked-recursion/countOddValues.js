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

let arr = [1, 2, 3, 4]; // try [1, 1, 1, 1]

for (let elem of arr) {
	let node = new Node(elem);
	if (!head) head = tail = node;
	if (head) {
		tail.next = node;
		tail = node;
	}
}

function countOddValues(head) {
	if (!head || head.value === 2) return 0;
	let counter = 0;
	while (head) {
		if (head.value === 1 || head.value % 3 === 0) {
			counter++;
		}
		head = head.next;
	}
	return counter;
}

console.log(countOddValues(head));
