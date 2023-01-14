class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
/*
Given an org chart of a company, employee A, and employee B: figure out if employee B is a direct report to employee A.
Employee B must report directly to employee A - this occurs if Employee A is the parent node of Employee B.
Employees in our tree are represented as integer values (eg: 1).
Return true if employee A manages employee B, false if not.

  Example:
    input:
                1   
              /  \
            2     4 
           / \
          2   5
    and a = 2, b = 5
    output: true
    explanation: because a is a parent node of b (2 is parent of 5)
*/

// Iterative
function isEmployeeDirectReport(tree, a, b) {
	let queue = tree ? [tree] : [];
	while (queue.length > 0) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let pop = queue.shift();
			if (pop.value === a) {
				if (pop.left && pop.left.value === b) return true;
				if (pop.right && pop.right.value === b) return true;
			}
			if (pop.left) queue.push(pop.left);
			if (pop.right) queue.push(pop.right);
		}
	}
	return false;
}

/* TEST CASES */
let tree = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(2),
		new TreeNode(5)
	),
	new TreeNode(4)
); // first right
/* TREE2
                1  
              /  \
            2     4  
           / \    / \
          4   2   1   4  
      a = 4, b = 2
  return false
*/
let tree2 = new TreeNode(
	1, // root
	new TreeNode(
		2, // first left
		new TreeNode(4),
		new TreeNode(2)
	),
	new TreeNode(4, new TreeNode(1), new TreeNode(4))
); // first right

console.log(isEmployeeDirectReport(tree, 2, 5), true);
console.log(isEmployeeDirectReport(tree2, 4, 2), false);
