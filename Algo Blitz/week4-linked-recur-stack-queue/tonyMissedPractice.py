# 5->10->15->22->20->None # O(1)
#
# vs
#
# [5,10,15,22,20] # O(N)
# [5,10,15,22,20,0]
# [999,5,10,15,22,20]

# LL: dynamic, find space anywhere in memory. Not deterministic to get kth index
# array: static, initialized with a set amount of memory. 
# kth index is predictable offset from array index 0

'''
// Javascript
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new Node("A", new Node("B"));
// A->B->null
'''
# Python
class Node:
  def __init__(self, val, next=None):
    self.val = val
    self.next = next

head = Node("A", Node("B"))
# A->B->null

# Creates the linked list above
theHead = Node(5, Node(10, Node(15, Node(22, Node(20)))))


# print(theHead.val, end='->') # 5
# print(theHead.next.val, end='->') # 10
# print(theHead.next.next.val, end='->') # 15
# print(theHead.next.next.next.val, end='->') # 22
# print(theHead.next.next.next.next.val, end='->None\n') # 20

#print(theHead.next.val.val) # will this work?

#               c
# 5->10->15->22->20->None
def printLinkedList(head: Node) -> None:
  curr = head
  while curr:
  # while curr.next:
    print(curr.val, end='->')
    curr = curr.next
  print("None")

# printLinkedList(theHead)

# It can be done with recursion too!
def printLinkedListRecursive(head: Node) -> None:
  if not head:
    print("None")
    return

  print(head.val, end='->')
  printLinkedListRecursive(head.next)

#printLinkedListRecursive(theHead)


#============================
#                                v------|
# create a linked list: 77->78->79->80->81
#               cycleHead^
cycleHead = Node(77)
n2 = Node(78)
n3 = Node(79)
n4 = Node(80)
n5 = Node(81)
cycleHead.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
# n5.next == None


n5.next = n3 # introduce a cycle (81->79)

#printLinkedList(cycleHead) # what will happen if we try to iterate through a LL w/ a cycle?
# 77 78 79 80 81 

def hasCycle(head: Node) -> bool:
  seen = set()

  while head:
    if head in seen:
      return True
    
    seen.add(head)
    head = head.next

  return False
  
  
# 5->10->15->22->20->None
# 77->78->79->80->81->79->80->81
# print("The original linked list has a cycle? " + str(hasCycle(theHead)))
# print("The second linked list has a cycle? " + str(hasCycle(cycleHead)))



def hasCycle2Ptrs(head: Node) -> bool:
  turtle = head
  rabbit = head

  while rabbit and rabbit.next:
    turtle = turtle.next
    rabbit = rabbit.next.next
    
    if turtle == rabbit:
      return True  # found the cycle

  return False

# print("2Ptrs: The original linked list has a cycle? " + str(hasCycle2Ptrs(theHead)))
# print("2Ptrs: The second linked list has a cycle? " + str(hasCycle2Ptrs(cycleHead)))

'''
// Javascript
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
'''

# Python
class DLLNode:
  def __init__(self, val, next=None, prev=None):
    self.val = val
    self.next = next
    self.prev = prev

dllHead = DLLNode(5)
n2 = DLLNode(10)
n3 = DLLNode(15)
n4 = DLLNode(22)
dllTail = DLLNode(20)

# None <- 5 -> 10 -> 15 -> 22 -> 20 -> None
dllHead.next = n2
n2.next = n3
n3.next = n4
n4.next = dllTail

# None <- 5 <-> 10 <-> 15 <-> 22 <-> 20 -> None
dllTail.prev = n4
n4.prev = n3
n3.prev = n2
n2.prev = dllHead

printLinkedList(dllHead)

def printLinkedListBackwards(tail: Node) -> None:
  while tail:
    print(tail.val, end='->')
    tail = tail.prev
  print("None")

printLinkedListBackwards(dllTail)