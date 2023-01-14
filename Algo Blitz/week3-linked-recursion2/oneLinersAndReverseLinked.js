// Practicing One Liners

const stringFunc = (str) => str;
// console.log(stringFunc("hello"))

let arr = [[3], 1, 2];
const sortIt = (arr) => arr.sort((a, b) => a - b);
// console.log(sortIt(arr))

const objToArray = (obj) => Object.entries(obj);
// console.log(objToArray({1: "Aaron", 2: "Melissa", 3: "Brandon"}))

const findFactorial = (int) => {
	if (int === 0) return 1;
	return int * findFactorial(int - 1);
};
// console.log(findFactorial(5))

const zipIt = (men, women) => {
	if (men.length !== women.length) return "sizes don't match";
	return Array(men.length)
		.fill(0)
		.map((elem, idx) => (elem = [men[idx], women[idx]]));
};
// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))

const squareEveryDigit = (int) =>
	+`${int}`
		.split('')
		.map((elem) => elem * elem)
		.join('');
// console.log(squareEveryDigit(1219))

const filterStrings = (arr) => arr.filter((elem) => typeof elem === 'number');
// console.log(filterStrings([1, 2, "a", "b"])) // => [1, 2]

const objToArray = (obj) => Object.entries(obj);
// console.log(objToArray({ a: 1, b: 2 })) // => [["a", 1], ["b", 2]]

// Iterative Approach
function reverseList(head) {
	if (!head || !head.next) {
		return null;
	}
	let prev = null; // 1 or head
	let curr = head; // 2
	let next = null; // 3 or third node

	while (curr !== null) {
		next = curr.next; // 3
		curr.next = prev; // 1 -> [null] -> null -> 4
		prev = curr; // 1 or head
		curr = next;
	}
	head = prev;
	return head;
}
