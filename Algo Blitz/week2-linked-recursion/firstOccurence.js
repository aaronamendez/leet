let arr = [1, 2, 3, 4, 5];
let input = 3;

// build linked list
// Step 1- build the node
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
// Step 2- build the head/tail
let head = null,
	tail = null;

// Step 3- append the values to the linked list.
for (let value of arr) {
	let currNode = new Node(value);
	if (head === null) {
		head = tail = currNode;
	} else {
		tail.next = currNode;
		tail = currNode;
	}
}

function firstIndexOccurence(list) {
	let index = 0;
	for (let i = list; i.next !== null; i = i.next) {
		if (i.value === input) return index;
		index++;
		if (i.next.value === input) return index;
	}
	return -1;
}

console.log(firstIndexOccurence(head));
