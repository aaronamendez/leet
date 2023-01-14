class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*
12
3       4
1    _   6   _
9  _      _ _

k = 1

should return [12, 3, 4, 1, 6, 9]
*/
/*
Given a binary tree and an integer (k), find and return an array of unique nodes that occur at least (k) times in the tree.
For example, if Node(5) occurs 3 times in the tree, and (k) = 3, your result array would include the value of Node(5) (simply 5 in this case).

Target runtime and space complexity:
O(n), where n = # of nodes in tree
Examples:
Example 1
                  
           2           2 (L: 2, r: 3)
       2       3       2 (L: 7, r: 3)
     7   3   14   9
     
    k = 2
    
  should return [2, 3]

  stack = [7,3]
  elem = 
  map = {
    2: 2
    3: 1
    9: 1
    14: 1
  }
  results = [2]

Algo:
  initialize map
  initialize stack with the root
  init results array

  while stack has elements in it:
    pop an element
    update the map with the value of that element (map.set(element.value) = (map.get(element.value) || 0) + 1)
    if map.get(element.value) = k then add element to results
    if element.left exists, add to stack
    if element.right exists, add to stack
  
  return results
*/

function findNodesOccurringKTimes(head, k) {
	let map = new Map();
	let results = [];
	let stack = head ? [head] : [];

	while (stack.length > 0) {
		let elem = stack.pop();
		map.set(elem.value, (map.get(elem.value) || 0) + 1);
		if (map.get(elem.value) === k) results.push(elem.value);
		if (elem.left) stack.push(elem.left);
		if (elem.right) stack.push(elem.right);
	}
	return results;
}

const tree1 = new TreeNode(
	2,
	new TreeNode(2, new TreeNode(7), new TreeNode(3)),
	new TreeNode(3, new TreeNode(14), new TreeNode(9))
);
// tree1, k = 1 >> [all the node values]
// tree1, k = 2 >> [2,3]
// tree1, k = 3 >> []

const tree2 = new TreeNode(
	12,
	new TreeNode(3, new TreeNode(1)),
	new TreeNode(3, new TreeNode(6))
);

const tree4 = null;

console.log(findNodesOccurringKTimes(tree1, 1));
console.log(findNodesOccurringKTimes(tree1, 2));
console.log(findNodesOccurringKTimes(tree1, 3));
console.log(findNodesOccurringKTimes(tree2, 2));
console.log(findNodesOccurringKTimes(tree4, 1));
console.log(findNodesOccurringKTimes(tree4, 11231232));
// tree4, any k >> []
/*
      12
    3       3
1    _   6   _

          12
      3       4
  1    _   6   _
9  _      _ _ 

*/
