/*
isBalanced - is a string containing only ( and ) characters balanced?
    a. Using stack
    b. Using only count
isBalancedMulti - string may contain { }, [ ], and ( )
isAlmostBalanced - string contains only ( and ) but may contain at most one mistake.

(()())
(()()))
((()())

{ -> }
( -> )
[ -> ]

*/

function isAlmostBalanced(str) {
	let mistake = 0; // assume no mistakes to start
	let stack = [];
	for (let c of str) {
		if (c === '(') {
			stack.push(c);
		} else if (c === ')') {
			// we know its a closing bracket
			let closing = stack.pop();
			if (closing === undefined) {
				mistake += 1;
			}
		}
	}

	if (mistake > 1) {
		return false;
	}

	return stack.length === 0 || stack.length === 1;
	// return stack.length === 1 && mistake == 1 || stack.length === 0 && mistake == 1 || stack.length === 0
}

console.log(isAlmostBalanced('(()') === true);
console.log(isAlmostBalanced('())') === true);
console.log(isAlmostBalanced('))') === false);
console.log(isAlmostBalanced('((') === false);
console.log(isAlmostBalanced('((((())))') === true);
console.log(isAlmostBalanced('((((()))') === false);
console.log(isAlmostBalanced('((((()))(') === false);

function isBalancedMulti2(str) {
	/**
	 * stack = [{]
	 * stack = [{] => }
	 */
	let map = new Map([
		['{', '}'],
		['[', ']'],
		['(', ')'],
	]);

	let stack = []; // last value == c
	for (let c of str) {
		// if(map.has(c))
		if (c === '(' || c === '[' || c === '{') {
			stack.push(c);
		} else if (map.get(stack[stack.length - 1]) === c) {
			// } ) ]
			stack.pop();
		} else {
			return false;
		}
	}
	return stack.length === 0;
}

function isBalancedMulti(str) {
	let map = new Map([
		['{', '}'],
		['[', ']'],
		['(', ')'],
	]);

	let stack = [];

	for (let c of str) {
		if (c === '(' || c === '[' || c === '{') {
			stack.push(c);
		} else {
			// we know its a closing bracket
			let topChar = stack.pop(); // removes the element from the stack
			let matchingBracket = map.get(topChar);
			if (matchingBracket !== c)
				// find the matching closing bracket
				return false;
		}
	}
	return stack.length === 0;
}

function isBalanced(str) {
	const stack = [];
	for (let char of str) {
		if (char === '(') {
			stack.push(char);
		} else if (char === ')') {
			const lastChar = stack.pop();
			if (lastChar !== '(') {
				return false;
			}
		}
	}
	return stack.length === 0;
}

function isBalancedCount(str) {
	let depth = 0;
	for (let c of str) {
		if (c === '(') {
			depth += 1;
		} else if (c === ')') {
			depth -= 1;
			if (depth < 0) {
				return false;
			}
		}
	}
	return depth === 0;
}

/**
 * stack = [(]
 * stack = [( + )]
 * stack = [( + (]
 * stack = [( + ( + )]
 * stack = [( + ( + ) + )]
 *
 * return stack.length === 0
 */

// console.log(isBalancedMulti("({)}") === false)
// console.log(isBalancedMulti("(") === false)
// console.log(isBalancedMulti(")") === false)
// console.log(isBalancedMulti("()") === true)
// console.log(isBalancedMulti("())") === false)
// console.log(isBalancedMulti("(()") === false)
// console.log(isBalancedMulti("()()") === true)
// console.log(isBalancedMulti("(())") === true)
// console.log(isBalancedMulti("(()())") === true)
// console.log(isBalancedMulti("(((()))())") === true)
// console.log(isBalancedMulti("(()()))") === false)
// console.log(isBalancedMulti("((()())") === false)

// console.log(isBalancedMulti("({})") === true)
// console.log(isBalancedMulti("{}()") === true)
// console.log(isBalancedMulti("{[]}()") === true)
// console.log(isBalancedMulti(")") === false)
// console.log(isBalancedMulti("()") === true)
// console.log(isBalancedMulti("())") === false)
// console.log(isBalancedMulti("(()") === false)
// console.log(isBalancedMulti("()()") === true)
// console.log(isBalancedMulti("(())") === true)
// console.log(isBalancedMulti("(()())") === true)
// console.log(isBalancedMulti("(((()))())") === true)
// console.log(isBalancedMulti("(()()))") === false)
// console.log(isBalancedMulti("((()())") === false)
