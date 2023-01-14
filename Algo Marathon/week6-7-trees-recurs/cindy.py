# Given a binary tree, return the sum of all nodes with an odd-valued parent node.
# tree has at least 2 nodes
# all node values are numbers

'''
input:
        1
    2       3  -> sum = 5


input: 
        1
    2       3
4               1         -> sum = 2 + 3 + 1 = 6

approach:
dfs
total = 0
check if node is odd, if yes, add its children values to total
recursively call function for node.left and node.right
return total

'''

class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# def sumNodesWithOddParent(root):
#     if not root:
#         return 0
    
#     total = 0

#     if root.value % 2 == 1:
#         if root.left:
#             total += root.left.value
#         if root.right:
#             total += root.right.value
#     left = sumNodesWithOddParent(root.left)
#     right = sumNodesWithOddParent(root.right)

#     total += left + right
    
#     return total


tree1 = TreeNode(1,
            TreeNode(2),
            TreeNode(3))

tree2 = TreeNode(1,
            TreeNode(2,
                TreeNode(4)),
            TreeNode(3,
                None,
                TreeNode(1)))


# print(sumNodesWithOddParent(tree1))
# print(sumNodesWithOddParent(tree2))

def iterativeNodesWithOddParent (root): 
    stack = [root] if root else []
    total = 0

    while stack:
        pop = stack.pop()
        
        if (pop.value % 2 == 1):
            if (pop.left):
                total += pop.left.value
                stack.append(pop.left)
            if (pop.right):
                total += pop.right.value
                stack.append(pop.right)
    return total

print(iterativeNodesWithOddParent(tree1))
print(iterativeNodesWithOddParent(tree2))

