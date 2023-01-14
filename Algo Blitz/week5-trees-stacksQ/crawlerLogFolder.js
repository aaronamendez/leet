/*
// ../ move back to parent folder of the current folder 
// ./ remain in the same folder
// "d1/" || "d2/" means create a new folder 

// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

// you are initially at main
*/

var minOperations = function (logs) {
	let operations = [];

	for (let op of logs) {
		if (op !== '../' && op !== './') {
			operations.push(op);
		}
		if (op === '../') {
			operations.pop();
		}
	}

	return operations.length;
};
