/**Problem: 
 * Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, compute the sum of all the integers in the nested array.
 * 
What is the shape or pattern of this nested array structure?
As a follow on, modify this code to multiply each list sum by it's depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside of one array. But [1, [2, 3, [1]]] now evaluates to 11 because the (2 + 3) is at depth 2, so 5 * 2 is 10, then add the one for 11.

[1, [2, 3] , 1 ] = 1 + 10 + 3  -> 14
[1, 5, 1] -> 14

Function Signature: 
def sumNestedList(nestedList: List) -> int:


Target runtime and space complexity:
Time: O(n), where n is the total count of numbers in the nested array
Space: O(d), where d is the depth of the deepest nesting, since a stack frame is needed for each recursive call.
 * 
 */

//O(n)
function sumNestedList(arr) {
	if (!arr || arr.length === 0) return 0;
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		let depth = i + 1;
		if (Array.isArray(arr[i])) {
			let sum = 0;
			for (let j = 0; j < arr[i].length; j++) {
				sum += arr[i][j];
			}
			total = total + sum * depth;
		} else {
			total = total + arr[i] * depth;
		}
	}
	return total;
}

// [1, [2, 3, [4, 4, 5, 5]], 5]
console.log('should = 14 : ');
console.log(sumNestedList([1, 2, 3])); //14
console.log('should == 22 : ');
console.log(sumNestedList([1, [1, 2, 3], 3])); //22
console.log('should == 11');
console.log(sumNestedList([1, [2, 3]])); //11

//O(n)
function sumNestedList2(list) {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		if (Array.isArray(list[i])) {
			sum += sumNestedList2(list[i]);
		} else {
			sum += list[i];
		}
	}
	return sum;
}

console.log('should = 6 : ');
console.log(sumNestedList2([1, 2, 3]));

console.log(` 10: ${sumNestedList2([1, [1, 2, 3], 3])}`);
console.log('should == 6');
console.log(sumNestedList2([1, [2, 3]]));
