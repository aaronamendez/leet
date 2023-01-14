class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*
Given a binary tree with node values represented as integers, find and return the least occurring tree node value (eg: 3).
You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).

Example 1

           1
       2       _
     2   _   _   _
    
  should return Node(1)
Example 2


           1
       1       1
    1    1   1   1
    
    should return Node(1)
Example 3


           9
       _       _
    
   should return Node(9)

*/

/**
 * create a map to count the node values
 * create lowest
 * as we iterate/recursive, we want to check if the value exists in our map
 *  if it does, add 1 to the value
 *  if it doesnt, then create that pair with a value of 1
 * when we are finished iterating through the tree
 *  then we iterate through the map to find the lowest value
 *  return lowest
 */

function findLeastFrequentNodeValue(root) {
	const map = new Map();
	let lowest = Infinity; // 1
	let result;

	function helper(node) {
		if (!node) return;

		const count = (map.get(node.value) || 0) + 1;
		map.set(node.value, count);

		if (node.left) helper(node.left);
		if (node.right) helper(node.right);
	}

	helper(root);

	for (let [key, value] of map.entries()) {
		if (value < lowest) {
			// key value
			// key = the actual number
			// value = frequency of that number
			lowest = value;
			result = key;
		}
	}
	return result;
}

/**
 * O(n + m) || O(n) || O(2n)
 * nodes = n = each node
 * map = m = the values in the map
 * O(n) Space Complexity
 */

let tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(2))); // returns 1
let tree2 = new TreeNode(
	1,
	new TreeNode(1, new TreeNode(1), new TreeNode(1)),
	new TreeNode(1, new TreeNode(1), new TreeNode(1))
); // returns 1

let tree3 = new TreeNode(
	9,
	new TreeNode(10, new TreeNode(10), new TreeNode(10)),
	new TreeNode(9, new TreeNode(2))
); // returns 2

// console.log(findLeastFrequentNodeValue(tree1), "should return 1")
console.log(findLeastFrequentNodeValue(tree2), 'should return 1');
// console.log(findLeastFrequentNodeValue(tree3), "should return 2")
/*


           9
       10       9
    10   10   2
    
   should return Node(2)
*/
