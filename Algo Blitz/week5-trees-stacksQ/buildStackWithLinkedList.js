class LLNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LLStack {
	constructor() {
		// initialize the stack to be empty
		this.stack = new LLNode('top');
		this.size = 0;
	}
	push(newValue) {
		// Adds a new value to the stack
		let node = new LLNode(newValue);
		node.next = this.stack.next;
		this.stack.next = node;
		this.size += 1;
	}
	pop() {
		// Removes the top value from the stack and returns it
		if (this.size === 0) return -1;
		let save = this.stack.next;
		let value = save.value;
		this.stack.next = save.next;
		save = null;
		this.size -= 1;
		return value;
	}
	sizeOfStack() {
		// returns the current size of the stack
		return this.size;
	}
}

// class LLStack {
// 	constructor() {
// 		// initialize the stack to be empty
// 		this.head = new LLNode();
// 		this.size = 0;
// 	}
// 	push(newValue) {
// 		// Adds a new value to the stack
// 		if (!stack.value) {
// 			this.head = new LLNode(newValue);
// 			return;
// 		}
// 		let node = new LLNode(newValue);
// 		node.next = this.head;
// 		this.head = node;
// 		this.size += 1;
// 	}
// 	pop() {
// 		// Removes the top value from the stack and returns it
// 		if (this.size === 0) return -1;
// 		let save = this.stack.next;
// 		let value = save.value;
// 		this.stack.next = save.next;
// 		save = null;
// 		this.size -= 1;
// 		return value;
// 	}
// 	sizeOfStack() {
// 		// returns the current size of the stack
// 		return this.size;
// 	}
// }

const stack = new LLStack();
console.log(stack.sizeOfStack() === 0);
stack.push(2);
stack.push(3);
console.log(stack.sizeOfStack() === 2);
console.log(stack.pop() === 3);
console.log(stack.sizeOfStack() === 1);
console.log(stack.pop() === 2);
console.log(stack.pop() === -1);
