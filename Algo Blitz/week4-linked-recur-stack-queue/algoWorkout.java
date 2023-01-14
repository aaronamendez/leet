/*
# You are given the head of a linked list, and an integer k.
# Return the head of the linked list after swapping the nodes of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

# Examples
# Input: head = [1,2,3,4,5], k = 2
# Output: [1,4,3,2,5]

head -> 1 -> 2 -> 3 -> 4 -> 5

# Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
# Output: [7,9,6,6,8,7,3,0,9,5]
# Function Signature
# def swapNodes(self, head: ListNode, k: int) -> ListNode:

Clarifying questions

Can k be negative? No

Can there be no elements? Yes; just return the original linked list

K will be smaller than # of nodes / 2

Potential solution:



Node {
int val;
Node next;
}

Finding a potential solution
counter = 0 + 1 = targ

What if you can do everything with multiple passes?

1 -> 2 -> 3 -> 4 -> 5
    if ()

How do you find the number of nodes in total?
- just iterate through the whole list

Next: find the kth from the first and kth from the last

Finally, swap those two nodes

Runtime: O(2n) = O(n)
Space: Constant O(1)

Tip: first find brute force solution/don't think about runtime, and optimize later

Tip: you can find the lower bound/"best case" scenario to see if your algorithm is optimal. In this problem, we have to look at every element at least once to find the total number of elements. This means the minimum/best case runtime is O(n). Since the algorithm we came up with is O(n), our algorithm has the optimal runtime.
*/

class Node {
  int val;
  public Node next;

  public Node(int val, Node next) {
    this.val = val;
    this.next = next;
  }

  public String toString() {
    return String.valueOf(val);
  }
}

class Solution {
   public static void main(String... str) {
     Node head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(7, null))))));
     Node root = swapKth(head, 2);
     while (root != null) {
       System.out.print(root.val + " ");
       root = root.next;
     }
   }

   private static Node swapKth(Node root, int k) {
     // Count the number of nodes
     int numOfNodes = 0;
     Node currentNode = root;
     while (currentNode != null) {
       numOfNodes++;
       currentNode = currentNode.next;
     }

     // Find the Kth node from First and last
     Node firstKthNode = null;
     Node lastKthNode = null;

     int lastKthPos = numOfNodes - k + 1; // 5 - 2 = 3 -> 4
     int currentPos = 0;
     currentNode = root;
     while (currentNode != null) {
       currentPos++;
       if (currentPos == k) {
         firstKthNode = currentNode;
       } else if (currentPos == lastKthPos) {
         lastKthNode = currentNode;
       }
       currentNode = currentNode.next;
     }
     
     // Swap the nodes;
    //  Node tmp = firstKthNode.next; // this will hold first kth node
    //  Node lastPart = lastKthNode.next;
    //  lastKthNode.next = tmp;

    //swap the values
  
    int tmp = firstKthNode.val;
    firstKthNode.val = lastKthNode.val;
    lastKthNode.val = tmp;

     return root;
   }
}

