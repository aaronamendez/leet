class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	static from(...args) {
		let list = null;
		for (let i = args.length - 1; i >= 0; i--) {
			list = new Node(args[i], list);
		}
		return list;
	}

	toString() {
		return this.value + ' -> ' + this.next;
	}
}

const testList = Node.from(1, 2, 3);

console.log(testList.toString());
