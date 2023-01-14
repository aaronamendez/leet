# /**
#  * 
#  * You are given the head of a linked list, and an integer k.
# Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

# Examples
# Input: head = [1,2,3,4,5], k = 2
# Output: [1,4,3,2,5]

# Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
# Output: [7,9,6,6,8,7,3,0,9,5]
# Function Signature
# def swapNodes(self, head: ListNode, k: int) -> ListNode:

# [1], k = 1

# Examples
# Input: head = [1,2,3,4,5], k = 2
# Output: [1,4,3,2,5]

# [1,2,3,4,5]
#    ^
#    l
#    k
# for right now:

# [1,2,3,4,5]
#  ^   ^
#  1  1+k
# start at node k+1


# [1,2,3,4,5]
#        ^   ^
#        r

# [1,2,3,4,5]
#    l   r



# */

class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

    def __repr__(self) -> str:
        return str(self.val)


def swapNodes(head: ListNode, k: int) -> ListNode:


    # Get the left node.
    counter = 1
    left = head
    while (counter < k):
        left = left.next
        counter += 1


    # k = 4
    # [1,2,3,4,5],
    #    ^   ^     
    #    r   l


    # Get the right node (it will be located at l).
    l = head
    r = head

    count = k
    # Position r to k + 1
    while count > 0:
        r = r.next
        count -= 1

    # Move l and r together to the right until r is None.
    while r:
        r = r.next
        l = l.next
    
    
    # Swap the left and right node values.
    temp = left.val
    left.val = l.val
    l.val = temp
    
    return head




head0 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
swapNodes(head0, 2)
while head0:
    print(head0)
    head0 = head0.next

# Examples
# Input: head = [1,2,3,4,5], k = 2
# Output: [1,4,3,2,5]

print("---")

head1 = ListNode(7, ListNode(9, ListNode(6, ListNode(6, ListNode(7, ListNode(8, ListNode(3, ListNode(0, ListNode(9, ListNode(5))))))))))
swapNodes(head1, 5)
while head1:
    print(head1)
    head1 = head1.next

# Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
# Output: [7,9,6,6,8,7,3,0,9,5]
# Function Signature
# def swapNodes(self, head: ListNode, k: int) -> ListNode:


print("---")

head2 = ListNode(7, ListNode(9, ListNode(6, ListNode(6, ListNode(7, ListNode(8, ListNode(3, ListNode(0, ListNode(9, ListNode(5))))))))))
swapNodes(head2, 7)
while head2:
    print(head2)
    head2 = head2.next
