class TreeNode:
    def __init__(self,val,left=None,right=None):
        self.val = val 
        self.left = left 
        self.right = right 


def printSibling(head:TreeNode) -> list[int]:
    if not head:
        return []
    
    if head.left and head.right:
        return [head.left.val,head.right.val]+printSibling(head.left)+printSibling(head.right)
    
    return printSibling(head.left)+printSibling(head.right)

    # siblings: list = []
    # def helper(node:TreeNode) -> None:
    #     if not node:
    #         return 
    #     if node.left and node.right:
    #         siblings.append(node.left.val)
    #         siblings.append(node.right.val)
        
    #     helper(node.left)
    #     helper(node.right)
    
    # helper(head)
    # return siblings

#  var minDepth = function(root) {
#   if (!root) return 0
#   if(!root.left && !root.right) return 1
  
#   let min = Infinity;
#   if (root.left) {
#       min = Math.min(min, minDepth(root.left))
#   }
#   if (root.right) {
#       min = Math.min(min, minDepth(root.right))
#   }
#   return 1 + min
# };

tree1 = TreeNode(1,TreeNode(2,None,TreeNode(4)),TreeNode(3))
print(printSibling(tree1))

tree2 = None 
print(printSibling(tree2))

tree3 = TreeNode(12,
                    TreeNode(3,
                        TreeNode(1),
                        None),
                    TreeNode(4,
                        TreeNode(6),
                        None))
print(printSibling(tree3))

tree4 = TreeNode(12,
                TreeNode(3,
                        TreeNode(1,
                            TreeNode(9),
                            TreeNode(7))),
                TreeNode(4,
                    TreeNode(6),
                        None))
print(printSibling(tree4))

#            1
#        2       3
#      _   4   _   _
    
#   should return [2, 3]
# Example 2

#            12
#        3       4
#     1    _   6   _
    
#     should return [3, 4]
# Example 3


#            12
#        3       4
#     1    _   6   _
#   9  7      _ _
    
#    should return [3, 4, 9, 7]