// Basics

/*
Given a number in the form of a string, turn it into a number.
Example:
    input: "452"
    output: 452
*/

function numberToString(str) {
	return parseInt(str);
}

// console.log(numberToString("452"), 452)

/*
Given an array and a target X, return true if that target value exists in that array. Return false if it does not.
Example: 
    Input: [1, 2, 3, 4], X = 4
    Output: True
    Explanation: It is true because value 4 exists within the array
*/

function findX(arr, x) {
	for (let elem of arr) {
		if (elem === x) {
			return true;
		}
	}
	return false;
}

// always console.log()
// use the newer iterating way, unless you need the value of the index

// console.log(findX([1, 2, 3, 4], 4), "should return", true)

/*
Given an array, return an array with odd values.
Example:
    input: [1, 2, 3, 4]
    output: [1, 3]
    Explanation: Return only the odd values you encounter as you iterate

Could there be negative values? No.
Could there be duplicate values? Sure.
*/

function oddValues(arr) {
	let newArr = [];
	for (let elem of arr) {
		if (elem % 2 !== 0) newArr.push(elem);
	}
	return newArr;
}

// always pay attention to the input and output

// console.log(oddValues([1, 2, 3, 4]), "should return", [1, 3])
// console.log(oddValues([]), "should return", [])
// console.log(oddValues([-1, -4, 5, 6]), "should return", [])

/*
Given an array, return an array with even values.
Example:
    input: [1, 2, 3, 4]
    output: [2, 4]
    Explanation: Return only the even values you encounter as you iterate
*/

function evenVal(arr) {
	let newArr = [];
	for (let elem of arr) {
		if (elem % 2 === 0) newArr.push(elem);
	}
	return newArr;
}

// console.log(evenVal([1, 2, 3, 4]), "should return", [2, 4])

/*
Arrays:
  Given a sorted array and a value X, return an array with two numbers that add up to X
  Example: 
      input: [1, 2, 3, 5, 8], x = 5
      output: [2, 3]
    O(n^2)
  Two Pointers:
    [1, 2, 3, 5, 6] = 5?
     ^.          ^
    first       last
      return [first, last]


  Sliding Windows:
    [1, 2, 3, 4, 5, 6]

*/

function twoValAdd(arr, x) {
	let first = 0;
	let last = arr.length - 1; // 3
	while (first < last) {
		let sum = arr[first] + arr[last];
		if (sum === x) {
			return [arr[first], arr[last]];
		} else if (sum > x) {
			last--;
		} else if (sum < x) {
			first++;
		}
	}
	return [];
}

// console.log(twoValAdd([1, 2, 3, 5, 6], 5), 'should be', [2, 3])
// console.log(twoValAdd([3, 454, 566, 77], 5), 'should be', [])

/*
Given an array, and a target x, return true if two numbers multiplied together equals x. Else, return false
Example:
    Input: [2, 5, 9, 10, 12], x = 50
    Output: true
    Explanation: 5 * 10 = 50
*/

function pointerX(arr, x) {
	arr.sort((a, b) => a - b);
	let first = 0;
	let last = arr.length - 1;
	while (first < last) {
		let multi = arr[first] * arr[last];
		if (multi === x) {
			return true;
		} else if (multi > x) {
			last--;
		} else if (multi < x) {
			first++;
		}
	}
	return false;
}

// console.log(pointerX([2, 5, 9, 10, 12], 50), 'should return', true)
// console.log(pointerX([2, 4, 44, 4444, 44444], 8), 'should return', true)
// console.log(pointerX([4, 44, 444, 4444, 44444], 8), 'should return', false)

/*
Given an array, return true if the array is ascending. Else Return false.

Sliding Windows:
    [1, 2, 3, 4, 5, 6]
                    ^. ^
                    c. n
    
  input: [1, 2, 3, 4, 5, 6]
  output: true
  explanation: because the array is sorted
*/

function slidingX(arr) {
	let curr = 0;
	let next = 1;
	while (curr < arr.length - 1) {
		if (arr[curr] <= arr[next]) {
			curr++, next++;
		} else {
			return false;
		}
	}
	return true;
}

// build test case that should be true
console.log(slidingX([3, 4, 5, 6, 7]), 'Should be', true);
// build a test case that should be false
console.log(slidingX([3, 4, 2, 6, 7]), 'Should be', false);
