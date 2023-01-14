/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

var MinStack = function () {
	this.stack = [];
	this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
	let curr = val;
	if (this.min.length) {
		curr = Math.min(this.min([this.min.length - 1][0]), curr);
	}
	this.stack.push(val);
	this.min.push([curr]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.min.pop();
	return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min[this.min.length - 1][0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//Solution min and max

class MinMaxStack {
	constructor() {
		this.store = [];
		this.minMax = [];
	}

	peek() {
		// Write your code here.
		return this.store[this.store.length - 1];
	}

	push(number) {
		// Write your code here.
		let min = number;
		let max = number;
		if (this.minMax.length) {
			min = Math.min(this.minMax[this.minMax.length - 1][0], number);
			max = Math.max(this.minMax[this.minMax.length - 1][1], number);
		}
		this.store.push(number);
		this.minMax.push([min, max]);
	}

	pop() {
		// Write your code here.
		this.minMax.pop();
		return this.store.pop();
	}

	getMin() {
		// Write your code here.
		return this.minMax[this.minMax.length - 1][0];
		// return 2
	}

	getMax() {
		// Write your code here.
		return this.minMax[this.minMax.length - 1][1];
		// return 5
	}
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
