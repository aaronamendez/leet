/*
Given an array of length n, create an output value that is created by doing the following:
Create an array of length n-1 by summing all adjacent values.
Repeating step 1 until the array is of length 1.
For example, let's say the input is [1, 2, 3, 4, 5]. 
The next array would be [1 + 2, 2 + 3, 3 + 4, 4 + 5] which is [3, 5, 7, 9]
The next array would be [8, 12, 16]
The next array would be [20, 28]
The final array would be [48], so return 48.

create a sum helper function.
this function would take 2 inputs the first element and 2nd element and it will return the sum.
while loop through the array as long as the array is more than length of 1, and use the sum function with inputs i, i+1


[1, 2, 3, 4, 5]
1, 2 => 2, 3 => 3, 4 => 4, 5
[1 + 2, 2 + 3, 3 + 4, 4 + 5]

total = 0
helper(index, total) break when i + 1 === null
return total + helper(index, total)
*/

// [1, 2, 3, 4, 5]
// [3, 5, 7, 9]
// [8, 12, 16]
// [20, 28]
// [48] == array.length equals 1 return array[0]

function reduceSum(input) {
	if (input.length === 0) return 0;
	if (input.length === 1) return input[0];

	function helper(array) {
		let i = 0;
		while (array[i + 1]) {
			array[i] = array[i] + array[i + 1];
			if (i + 1 === array.length - 1) {
				array.pop();
			}
			i++;
		}
		return array;
	}

	return reduceSum(helper(input));

	// return arr
}

console.log(reduceSum([1, 2, 3, 4, 5])); // => 48
console.log(reduceSum([])); // => 0
/*
1 + 2 = 3
2 + 3 = 5
3 + 4 = 7 + 8 = 15
4 + 5 = 9 => 24
*/
