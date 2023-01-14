/*

A recursive function is one that calls itself (one or more times)

Key components:

- base case (tells the code when to stop recursing further)
- the actual recursive call
- the main body - what do you want to do with the results that come from the recursive calls

1. sum all of the values of a linked list

*/

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function sumList(head) {
	if (!head) {
		return 0;
	}

	// console.log('about to return ', head.val + sumOfRestOfList);
	return head.val + sumList(head.next);
}

function findMax(head) {
	if (!head) {
		// console.log('about to return -Infinity');
		return -Infinity;
	}

	// console.log('about to return ', Math.max(head.val, maxFromRestOfList));
	return Math.max(head.val, findMax(head.next));
}

/*

pretend like you have a magic function that does exactly what you want to do, but ONLY for N - 1 case
pretend like I have a magic function that can give me the MAX from the list AFTER my current node

sumList(-1) => Math.max(-1, -2) => -1
  sumList(-2) => Math.max(-2, -3) => -2
    sumList(-7) => Math.max(-7, -3) => -3
      sumList(-3) => Math.max(-3, -Infinity) => -3
        sumList(null) => -Infinity

*/

const testList = new ListNode(
	1,
	new ListNode(2, new ListNode(7, new ListNode(3)))
);

// console.log(findMax(testList)); // => 3

/*

Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, the first two terms of the sequence are both 1, i.e. fib(0) = fib(1) = 1.

1 1 2 3 5 8 13 21 34 55

fib(4) => return 3 + 2 => 5
  fib(3) => return 2 + 1 => 3
    fib(2) => return 1 + 1 => 2
      fib(1) => return 1
      fib(0) => return 1
    fib(1) => return 1
  fib(2) => return 1 + 1 => 2
    fib(1) => return 1
    fib(0) => return 1

                                                          
                                        fib(4)      
                              fib(3)            fib(2)          
                      fib(2)       fib(1)      fib(1)   fib(0)
                  fib(1)  fib(0)

O(2^N)

*/

function fib(k) {
	if (k <= 1) {
		return 1;
	}

	return fib(k - 1) + fib(k - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
