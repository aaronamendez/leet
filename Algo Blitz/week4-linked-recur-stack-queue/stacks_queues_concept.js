/*

Stacks: data struct that behaves with the "last in, first out" mechanism

Queue: data struct that behaves with the "first in, first out" mechanism

*/

// const testQueue = new Queue();
// console.log(testQueue); // should be empty
// console.log(testQueue.dequeue()); // nothing
// console.log(testQueue.enqueue('a')); // ['a']
// console.log(testQueue.enqueue('b')); // ['a', 'b']
// console.log(testQueue.dequeue()); // 'a'
// console.log(testQueue.peek()); // 'b'
// console.log(testQueue.enqueue('c')); // ['b', 'c']

/*

z <-> a <-> b <-> c <-> d
^                       ^

'z'
let newNode = new Node('z')
newNode.next = head
head = newNode

*/

class LLNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const reverseLLWithStack = (head) => {
	let stack = [];

	while (head !== null) {
		stack.push(head.value);
		head = head.next;
	}

	let newHead = new LLNode(0);
	let cur = newHead;

	while (stack.length) {
		let newNode = new LLNode(stack.pop());
		cur.next = newNode;
		cur = newNode;
	}

	return newHead.next;
};

const testList = new LLNode('a', new LLNode('b', new LLNode('c')));
// console.log(reverseLLWithStack(testList)); // 'c' -> 'b' -> 'a'

const rotateStringWithQueue = (str, k) => {
	const letters = str.split(''); // ['c', 'd', 'e', 'f', 'g', 'a', 'b']

	while (k > 0) {
		// k = 0
		const char = letters.shift(); // char: 'a'
		letters.push(char); //
		k--;
	}

	return letters.join(''); // 'cdefgab'
};

/*

'abcdefg', k = 2
'cdefgab'

class Queue {
  constructor(arr = []) {
    this.store = arr
  }

  enqueue(value) { // time: O(1)
    this.store.push(value)
    return this.store
  }

  dequeue() { // time: O(N)
    return this.store.shift()
  }

  peek() { // time: O(1)
    return this.store[0]
  }
}

*/

class Stack {
	constructor(arr = []) {
		this.store = arr;
	}

	push(value) {
		// time: O(1)
		this.store.push(value);
		return this.store;
	}

	pop() {
		// time: O(1)
		return this.store.pop();
	}

	peek() {
		// time: O(1)
		return this.store[this.store.length - 1];
	}

	length() {
		return this.store.length;
	}
}

class StackQueue {
	constructor(arr = []) {
		this.store1 = new Stack(arr);
		this.store2 = new Stack();
	}

	enqueue(value) {
		return this.store1.push(value);
	}

	dequeue() {
		if (!this.store2.length()) {
			this._transferStores();
		}

		return this.store2.pop();
		// always pull from store2
		// store2 has content => return the first element (pop)
		// store2 is empty => move everything from store1 into store2

		// let reverseStack = new Stack();
		// while (this.store.length) {
		//   reverseStack.push(this.store.pop())
		// }

		// return reverseStack.pop()
	}

	peek() {
		if (!this.store2.length()) {
			this._transferStores();
		}

		return this.store2.peek();
		// store2 has content => return element at top
		// store2 is empty => move everything from store1 to store2
	}

	_transferStores() {
		while (this.store1.length()) {
			this.store2.push(this.store1.pop());
		}
	}
}

const testQueue = new StackQueue();
console.log(testQueue); // should be empty
console.log(testQueue.dequeue()); // undefined
console.log(testQueue.enqueue('a')); // ['a']
console.log(testQueue.enqueue('b')); // ['a', 'b']
console.log(testQueue.dequeue()); // 'a'
console.log(testQueue.peek()); // 'b'
console.log(testQueue.enqueue('c')); // ['b', 'c']

/*

store1: ['c'] 

store2: ['b']

*/
