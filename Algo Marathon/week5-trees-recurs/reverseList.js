/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prev = null;
	function helper(node) {
		if (!node) return;
		let next = node.next;
		node.next = prev;
		prev = node;
		return helper(next);
	}
	helper(head);
	return prev;
};

// https://leetcode.com/problems/reverse-linked-list/submissions/
