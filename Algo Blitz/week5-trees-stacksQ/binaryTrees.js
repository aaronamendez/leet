class TreeNode {
	constructor(value = 0, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/*

class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

    obj = TreeNode()



    3
  5   6

    3
  2   6


           5
         5   6
        6 4    7
            6    3
                   3 
                     5


How do we remove a sub-tree form a binary tree?
*/

function removeRightSubtree(node) {
	node.right = null;
}

function findElement(node, target) {
	if (!node) {
		return false;
	}
	if (node.value === target) {
		return true;
	}

	if (node.value > target) {
		return findElement(node.left, target);
	} else if (node.value < target) {
		return findElement(node.right, target);
	}
}

/*

     10
  4      20
1   5  15   22



     1
       4
         5
           10
              15
                 20
                    22

N = 2 logN = 2

N = 32 logN = 5

N = 1B   logN = 30
*/
