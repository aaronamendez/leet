/*
Given a set of units and a target value, return all of the ways that these units may be combined to achieve the target value. For example, for units [1, 2] and a target of 4, the output should be:
[
  [1, 1, 1, 1],
  [1, 1, 2],
  [2, 2]
]
Notice that [1, 2, 1] and [2, 1, 1] are also possibilities but we only return the one where the values are sorted from smallest to largest.

The units will always be a non-empty array of positive integers and sorted from small to large. The output should be ordered by those using the small units first before moving to larger and larger units.
*/

function recursion(units, target) {
	let result = [];
	function helper(perm = []) {
		/**
		 * [1] <-
		 * [1] = 1 === targ = 4? No
		 *  No -> [1, 1] === 4? No
		 *  No -> [1, 1, 1] === 4? No.
		 *  No -> [1, 1, 1, 1] === 4? Yes! Push!
		 *  Yes -> Push to Result and Return
		 */
		let total = perm.reduce((partial, a) => partial + a, 0);
		if (total === target) {
			result.push(perm);
			return;
		} else if (total > target) {
			return;
		}
		for (let i = 0; i < units.length; i++) {
			if (units[i] < perm[perm.length - 1]) {
				continue;
			}
			perm.push(units[i]);
			helper([...perm]);
			perm.pop();
		}
	}
	helper();
	return result;
}

console.log(recursion([1, 2], 4));
console.log(recursion([1, 3, 4], 7));
