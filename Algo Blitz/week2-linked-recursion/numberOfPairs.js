class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

let values = [1, 2, 2, 3, 3, 3];

let head = null,
	tail = null;

for (let value of values) {
	let currNode = new Node(value);
	if (head === null) {
		head = tail = currNode;
	} else {
		tail.next = currNode;
		tail = currNode;
	}
}

let map = new Map();
let counter = 0;

while (head.next !== null) {
	if (map.has(head.value)) {
		map.set(head.value, map.get(head.value) + 1);
		if (map.get(head.value) === 2 + 1) {
			counter--;
		} else if (map.get(head.value) === 2) {
			counter++;
		}
	} else {
		map.set(head.value, 1);
	}
	if (head.next.next === null) {
		if (map.has(head.next.value)) {
			map.set(head.next.value, map.get(head.next.value) + 1);
			if (map.get(head.value) === 2 + 1) {
				counter--;
			} else if (map.get(head.value) === 2) {
				counter++;
			}
		} else {
			map.set(head.next.value, 1);
		}
	}

	head = head.next;
}

console.log(map);
console.log(counter);
