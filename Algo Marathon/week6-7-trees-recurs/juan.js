function generateParentheses(numOfPairs) {
	if (numOfPairs < 1) return [];
	let size = numOfPairs * 2; // 8
	let result = [];
	const options = ['(', ')'];
	helper();

	function helper(perm = []) {
		if (perm.length === size) {
			const joined = perm.slice().join('');
			result.push(joined);
			return;
		}

		for (let i = 0; i < options.length; i++) {
			const counts = perm.reduce(
				(sum, cur) => {
					if (cur === '(') {
						sum[0] += 1;
					} else if (cur === ')') {
						sum[1] += 1;
					}
					return sum;
				},
				[0, 0]
			);

			const numOpen = counts[0];
			const numClosed = counts[1];
			const diff = numOpen - numClosed;

			const cantAddOpenBracket =
				numOpen >= numOfPairs && options[i] === '(';
			const cantAddCloseBracket =
				numOpen >= 0 && diff <= 0 && options[i] === ')';

			if (cantAddOpenBracket || cantAddCloseBracket) {
				continue;
			}

			perm.push(options[i]);
			helper(perm);
			perm.pop();
		}
	}
	return result;
}

console.log(generateParentheses(4));

const res = generateParentheses(4);

const test = [
	'(((())))',
	'((()()))',
	'((())())',
	'((()))()',
	'(()(()))',
	'(()()())',
	'(()())()',
	'(())(())',
	'(())()()',
	'()((()))',
	'()(()())',
	'()(())()',
	'()()(())',
	'()()()()',
];
console.log(JSON.stringify(res) === JSON.stringify(test));
