// LEETCODE
// Valid Parentheses

const isValid = function (s) {
	let arr = s.split('');
	let stack = [];
	let map = new Map([
		['{', '}'],
		['(', ')'],
		['[', ']'],
	]);
	for (let elem of arr) {
		if (stack.length < 1) {
			stack.push(elem);
		} else if (stack.length > 0) {
			if (map.get(stack[stack.length - 1]) === elem) {
				stack.pop();
			} else {
				// else if its an opener
				stack.push(elem);
			}
		}
	}
	return stack.length === 0;
};
