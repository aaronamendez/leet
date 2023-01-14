/*
Get all Subsequences
Examples: 
    getAllSubsequences("abc") == [
      "a",
      "b",
      "c",
      "ab",
      "ac",
      "bc",
      "abc",
    ]
*/

// How to understand this
function getAllSubsequences(str) {
	const output = [];
	const stack = [];

	function helper(index) {
		if (index === str.length) {
			if (stack.length > 0) {
				output.push(stack.join('')); // at the end, we push stack "values" into the output
			}
			return; // be done
		}

		// else
		helper(index + 1); // index = 1
		stack.push(str[index]); // pushes "a" into stack
		helper(index + 1); // index = 1
		stack.pop();
	}

	helper(0);

	return output;
}

// function getAllSubsequences(str) {

// }

// console.log(getAllSubsequences("abc")) /* =>
// ['c', 'b', 'bc', 'a', 'ac', 'ab', 'abc']
// */
