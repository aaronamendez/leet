/*

Print the value of each node in a level, followed by a new line character at the end of each level

Function Signature: 
func printByLevel(node: Node)
Target runtime and space complexity:
Runtime: O(n)

  Examples:
  Input:
    3
   2  4
  1    5

Output:
  3
  24
  15
*/

function printByLevel(node) {
	let queue = node ? [node] : [];

	while (queue.length) {
		let size = queue.length;
		let level = [];
		for (let i = 0; i < size; i++) {
			let curr = queue.shift();

			level.push(curr.value.toString());

			if (curr.left) queue.push(curr.left);
			if (curr.right) queue.push(curr.right);
		}

		console.log(parseInt(level.join('')));
	}
}

class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
    3
   2  4
  1    5
*/

let tree1 = new TreeNode(
	3,
	new TreeNode(2, new TreeNode(1), null),
	new TreeNode(4, null, new TreeNode(5))
);

printByLevel(tree1);
