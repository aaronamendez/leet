class TreeNode():
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

'''
MEDIUM
Given the root of a binary tree, return the sum of values of its deepest leaves.
           1
        2     3
      4   5     6
    7             8.                 = 7 + 8 = 15

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

                6
        7               8
     2     7        1       3
  9      1   4                  5    = 9 + 1+ 4 + 5 = 19

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
'''

from collections import deque

# time O(N), space O(N)
def iterativeDeepestLeavesBFS(root):
    queue = deque([root]) if root else deque()
    total = 0
    while queue:
        sum = 0
        size = len(queue)
        for i in range(size): # 0 to size - 1
            pop = queue.popleft()
            sum += pop.value
            if pop.left:
                queue.append(pop.left)
            if pop.right:
                queue.append(pop.right)
        total = sum
    return total


test_root = TreeNode(1)
test_root.left = TreeNode(2)
test_root.right = TreeNode(3)
test_root.left.left = TreeNode(4)
test_root.left.right = TreeNode(5)
test_root.left.left.left = TreeNode(7)
test_root.right.right = TreeNode(6)
test_root.right.right.right = TreeNode(8)


print(iterativeDeepestLeavesBFS(test_root), 15)
print(iterativeDeepestLeavesBFS(None), 0)

# [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
'''
                6
        7               8
     2     7        1       3
  9      1   4                  5  = 19
'''

test_root2 = TreeNode(6)
test_root2.left = TreeNode(7)
test_root2.right = TreeNode(8)
test_root2.left.left = TreeNode(2)
test_root2.left.right = TreeNode(7)
test_root2.left.right.left = TreeNode(1)
test_root2.right.right = TreeNode(3) 
test_root2.left.left.left = TreeNode(9)
test_root2.left.right.left = TreeNode(1)
test_root2.left.right.right = TreeNode(4)
test_root2.right.right.right = TreeNode(5)

print(iterativeDeepestLeavesBFS(test_root2), 19)


'''
https://www.geeksforgeeks.org/check-for-identical-bsts-without-building-the-trees/

HARD
An array of integers is said to represent the Binary Search Tree (BST) obtained by inserting each integer in the array from left to right, into the BST.

Write a function that takes in two arrays of integers and determines whether these arrays represent the same BST. [Note that you're not allowed to construct any BSTs in your code.]

A BST is a binary search tree that consists only of BST nodes. A node is said to be a valid BST if and only if it satisfies a BST property.

Sample input:
arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]

[root, right, left, right.left, right.right, right.right.left]


Sample output: true, both arrays represent the same BST.
(this tree below)
                    10
                8          15
            5         12        94
        2           11        81

def sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
}

BST Property?
* left subtree <= node < right subtree
* has to apply for the root node and for all other nodes down the tree

Ideas
- sort the two and see if they're equal (log-linear time)***


- have a int frequency counter and loop once, incrementing/decrementing and seeing if they're equal (linear time, linear space)
    - 1 map (increment for first array, decrement for second) and see if all values are zero at the end.

- set (assuming distinct)
    - store all elements from arrayOne into a set
    - for every element in array two, check if that element is inside of the set
        - if no -> return false
        - if yes -> continue on until we hit the end of the set
    - O(N) space
    - O(N) time

 int a[] = { 8, 3, 6, 1, 4, 7, 10, 14, 13 };
 int b[] = { 8, 10, 14, 3, 6, 4, 1, 7, 13 };

if (((j == n) ^ (k == n)) || a[j] != b[k])
        return false;


'''

def check_equal_bsts(arrayOne, arrayTwo):
    if len(arrayOne) != len(arrayTwo):
        return False

    freq = {}
    for i in range(len(arrayOne)):
        freq[arrayOne[i]] = freq.get(arrayOne[i], 0) + 1
        freq[arrayTwo[i]] = freq.get(arrayTwo[i], 0) - 1

    return all([value == 0 for value in freq.values()])


arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]

print(check_equal_bsts(arrayOne, arrayTwo), True)
print(check_equal_bsts([], [3,5,7]), False) # size error
print(check_equal_bsts([3,4,7], [3,5,7]), False) # unequal
print(check_equal_bsts([3,3,4,7], [3,3,3,7]), False) # non-distinct


'''
This approach is faster but doesn't get all test cases passing...

Insight: know that we don't need to calculate all attack positions...
we can check if the query has same row or col as one of the queens (4 cardinal directions)

* I struggled with figuring out how to determine if a query is diagonally away from one of the queens..

* maybe I could have just computed the slope of the diagonal for both sides...
** rise / run

[2,3]

[1,0]

1/3 and -1/3

store the slopes in a hash map 
key = queen positive slope or negative slope

def solution(n, queens, queries):
    queenDiags = set()
    rowSet = set()
    colSet = set()
    for queen in queens:
        rowSet.add(queen[0])
        colSet.add(queen[1])
        queenDiags.add(queen[0] - queen[1])
        queenDiags.add(queen[0] + queen[1])
       
    ans = []
    for query in queries:
        diagIndex = query[0] - query[1]
        diagIndex2 = query[0] + query[1]
        # how to check for diagonals....
        if diagIndex in queenDiags or diagIndex2 in queenDiags or query[0] in rowSet or query[1] in colSet:
            ans.append(True)
        else:
            ans.append(False)
           
    return ans

def solution(n, queens, queries):
    query_hits = [False] * len(queries)

    for queen in queens:
        x1, y1 = queen

        for i, query in enumerate(queries):
            x2, y2 = query
            
            if (x2 - x1) == 0 or (y2 - y1) == 0:
                query_hits[i] = True
                continue
            
            slope = (y2 - y1) / (x2 - x1)
            if abs(slope) == 1:
                query_hits[i] = True

    return query_hits


'''

'''
Number of Moves

Given a chess board of n rows (top to bottom) and n columns (left to right).

In each move, a knight moves either
  * 2 column positions and 1 row position
  * 2 row positions and 1 column position

Given a starting position A and ending position B, calculate min number of moves needed by knight to reach point B. If not possible return -1. All moves must remain inside of the board

Inputs
N = dimension of board
startRow
startCol
endRow
endCol

Example:
N = 9
startRow, startCol = (4,4)
endRow, endCol = (4,8)

time O(B^(N^2))
space O(N^2)
. . . . . . . . .
. . . . . . . . .
. . . x . x . . .
. . x . . . x . .
. . . . s . . . e
. . x . . . x . .
. . . x . x . . .
. . . . . . . . .
. . . . . . . . .

answer = 2

                    tree with 8 decisions at each move

                    r
    A   B   C   D   E   F   G     H
                     

'''

from collections import deque
import math

# iterative solution
def minMoves(n, startRow, startCol, endRow, endCol):
    # 2d matrix 
    # moveTable[r][c] = min number of moves to go from r,c to tr, tc
    moveTable = [[math.inf for _ in range(n)] for _ in range(n)]
    
    # min move count to reach itself is 0
    moveTable[endRow][endCol] = 0
    
    outer_q = deque()
    outer_q.append((endRow, endCol, 0))
    
    '''
        for every move you are going to make from cr, cc
        - check if the current position you are on move count + 1
        is less than the move in the move table
        - if yes, then update move table to the smaller move count
        - if no, do nothing

        append all 8 moves to the queue as long as they don't go out of bounds
    '''

    while len(outer_q) > 0:        
        # print(moveTable)        
        currRow, currCol, current_step = outer_q.popleft()


        
        # add moves that go from curr point
        q = deque()
        directions = [(2,1), (2,-1), (1, 2), (1, -2), (-2, 1), (-2, -1), (-1, 2), (-1, -2)]

        for x, y in directions:
            if moveTable[currRow + x][currCol + y] > current_step + 1:
                moveTable[currRow + x][currCol + y] = current_step + 1
                q.append((currRow + x, currCol + y))

        # bfs of trying out all immediate moves one can make from some intermediate point
        while len(q) > 0:
            row, col = q.popleft()
            
            # out of bounds skip
            if row >= n or col >= n or row < 0 or col < 0:
                continue
            
            # if we can find smaller amount of moves  from the intermediate point we are on, replace the existing move count, if not use the existing move count as it is a smaller move    
            moveTable[row][col] = min(moveTable[row][col], 1 + moveTable[currRow][currCol])
            
            # hack 
            if row == startRow and col == startCol:
                return moveTable[row][col]
            
            # add move to later process in outer queue
            outer_q.append((row, col))
    
            
    if moveTable[startRow][startCol] == math.inf:
        return -1
    
    return moveTable[startRow][startCol]


# recursive solution (brute force)
def minMovesRecur(n, startRow, startCol, endRow, endCol, memo, visited):
    if startRow == endRow and startCol == endCol:
        return 0
    if startRow >= n or startCol >= n or startRow < 0 or startCol < 0:
        return math.inf
    
    # prune decision tree if we already have went to this location already
    if (startRow, startCol) in memo:
        return memo[(startRow, startCol)]
    
    # if for some reason a series of recursive calls have us circling back to a location we already moved to
    # return math.inf as cyclic moves is impossible for the program to find the answer
    if (startRow, startCol) in visited:
        return math.inf
    
    
    visited.add((startRow, startCol))
        
    # try out all possible 8 directions
    op1 = minMovesRecur(n, startRow + 2, startCol + 1, endRow, endCol, memo, visited)
    op2 = minMovesRecur(n, startRow - 2, startCol + 1, endRow, endCol, memo, visited)
    op3 = minMovesRecur(n, startRow + 2, startCol - 1, endRow, endCol, memo, visited)
    op4 = minMovesRecur(n, startRow - 2, startCol - 1, endRow, endCol, memo, visited)
    op5 = minMovesRecur(n, startRow + 1, startCol + 2, endRow, endCol, memo, visited)
    op6 = minMovesRecur(n, startRow + 1, startCol - 2, endRow, endCol, memo, visited)
    op7 = minMovesRecur(n, startRow - 1, startCol + 2, endRow, endCol, memo, visited)
    op8 = minMovesRecur(n, startRow - 1, startCol - 2, endRow, endCol, memo, visited)
    
    minMoveCount = min(op1, op2, op3, op4, op5, op6, op7, op8) + 1
    
    # print('min count: ', minMoveCount)
    
    memo[(startRow, startCol)] = minMoveCount
    return minMoveCount


def minMoves2(n, startRow, startCol, endRow, endCol):
    # key - current row and col tuple
    # value - min number of moves it took from that row col to reach end row and end col
    memo = {}
    visited = set()
    minCount = minMovesRecur(n, startRow, startCol, endRow, endCol, memo, visited)
    
    if minCount == math.inf:
        return -1
    
    return minCount

