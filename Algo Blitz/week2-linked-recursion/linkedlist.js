function Node(value) {
	this.value = value;
	this.next = null;
}
head = null;
tail = null;
let arr = [1, 2, 3, 4, 5];
for (value of arr) {
	let currNode = new Node(value);
	if (head === null) {
		head = tail = currNode;
	} else {
		tail.next = currNode;
		tail = currNode;
	}
	console.log(value);
}
console.log(head);
