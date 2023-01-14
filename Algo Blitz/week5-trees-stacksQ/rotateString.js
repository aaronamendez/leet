/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 *
 */
/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/

var rotateString = function (s, goal) {
	/*
   goal: bca
   string: abc 
       shift up to the length;
       how: [a]bc -> bc[a] -> 1 shift
   output: 1
  */
	let shiftTimes = 0;
	let queue = s.split('');
	let length = queue.length;
	while (shiftTimes < length) {
		if (queue.join('') !== goal) {
			let val = queue[0];
			queue.shift();
			queue.push(val);
			shiftTimes += 1;
		} else {
			return true;
		}
	}
	return false;
};
