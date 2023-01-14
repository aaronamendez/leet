class ListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value + ' -> ' + this.next;
	}
}
// Thoroughly understand the problem
// Identify some possible solution(s)
// Choose a solution
// Build it
// Test it
/*
Write a program to recursively alternate printing nodes.  You are not allowed to use loop constructs. You can assume that the head node should always be printed first. Here is some starting code to implement and print a linked list in Python.

class Node:
  def __init__(self, val=None):
    self.val = val
    self.next = None

def printLL(head: Node) -> None:
  i = 0 # only print the first 20

  while head and i < 20:
    print(str(head.val) + " -> ", end="")
    head = head.next
    i += 1

  print("None")

  

n1 = Node(1)
n2 = Node(2)
n3 = Node(3)

n1.next = n2
n2.next = n3
Node(1, Node(2, Node(3)))

printAlternate(n1) 
1 -> 3 ->
in: 1 ->
out: 1 ->
in: null
out: null
Q: print arrows?
A: yes
*/

// Instead of printing alternate nodes, take a frequency parameter that specifies how many nodes to skip.
// 1->2->3->4->5, 2
// 1->3->5
// always positive
// 1->2->3->4->5->6->7->8, 3
// 1->4->7
//
// 1->2->3->4->5->6->7->8, 9
// 1

// Instead of always printing the head, take an offset parameter that specifies how many nodes to skip initially.
function printAlternate3(head, frequency, offset) {
	let result = [];
	// let counter = 0;
	let counter = frequency - offset;

	function helper(node) {
		if (!node) return;
		//counter++;
		if (counter === frequency) {
			result.push(node.value);
			counter = 0;
		}
		counter += 1;
		helper(node.next);
	}

	helper(head);
	return result.join('->');
}

function printAlternate2(head, frequency) {
	let result = [];
	let counter = frequency;

	function helper(node) {
		if (!node) return;
		if (counter === frequency) {
			result.push(node.value);
			counter = 0;
		}
		counter += 1;
		helper(node.next);
	}
	helper(head);
	return result.join('->');
}

function printAlternate(head) {
	// declare result array
	let result = [];
	function helper(node) {
		//base case: return if node === null
		if (node === null) {
			return;
		}

		// push node value to result array
		result.push(node.value);

		// base case 2: return if node.next === null
		if (node.next === null) {
			return;
		}

		// recursive call on current node.next.next
		helper(node.next.next);
	}
	helper(head);
	// return result array joined by "->"
	return result.join('->');
}

let list = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			3,
			new ListNode(
				4,
				new ListNode(
					5,
					new ListNode(
						6,
						new ListNode(7, new ListNode(8, new ListNode(9)))
					)
				)
			)
		)
	)
);
// let list2 = null
// let list3 = new ListNode(1)
// let list4 = new ListNode(1, new ListNode(2))
// console.log(printAlternate2(list, 1)) // 1 -> 2 ... 9
// console.log(printAlternate2(list, 2)) // 1->3->5->7->9
// console.log(printAlternate2(list, 4)) // 1->5->9
// console.log(printAlternate2(list, 3)) // 1->4->7
// console.log(printAlternate2(null, 3)) // nothing

// Instead of always printing the head, take an offset parameter that specifies how many nodes to skip initially.
// These Tests for 3rd
console.log(printAlternate3(list, 1, 4)); //  2->3->4 ... 9
console.log(printAlternate3(list, 2, 4)); // 3->4->...9
// console.log(printAlternate3(list, 4)) // 4 -- > 8
// console.log(printAlternate3(list, 3)) // 3->6->9
// console.log(printAlternate3(null, 3)) // nothing
