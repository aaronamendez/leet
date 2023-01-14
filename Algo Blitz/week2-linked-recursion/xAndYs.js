/*
 Given integers X and Y, return the head of a linked list with x nodes with value y.
 
 Examples
     x = 3, y = 4 => 4 -> 4 -> 4 -> null
*/

let x = 3;
let y = 4;

function create_list(x, y) {
	const root = new Node(y);
	let tail;

	for (let i = 1; i <= x; i += 1) {
		if (!tail) {
			tail = root;
		} else {
			tail.next = new Node(y);
			tail = tail.next;
		}
	}
	return root.toString();
}

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
//   toString() {
//     return `${this.value} -> ${this.next}`
//   }
// }

// let head = null, tail = null;

// let node = new Node(y)
// for (let i = 1; i <= x; i++) {
//   if (!head) {
//     head  = node;
//     tail = node;
//   } else {
//     tail.next = node;
//     tail = node;
//   }
// }

console.log(create_list(3, 4)); // 4 -> 4 -> 4 -> null
console.log(create_list(x, y));
