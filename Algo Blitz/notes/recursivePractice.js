/*
1. Sum all the elements in an array.
2. Remove all target elements from an array. (return a new array)
3. Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true,  [3, 2, 1] => false)
4. Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3])
*/

function sum(arr, idx = 0) {
	/* if last element (idx === arr.length)
      return 0
    else
      return arr[idx] + sum(arr, idx + 1)

  time complexity = O(n), where is n is the number of elements in array
  space complexity = O(n)
  */

	if (idx == arr.length) {
		return 0;
	} else {
		return arr[idx] + sum(arr, idx + 1);
	}
}

// [1, 2, 3, 4]
let arr = [1, 2, 3, 4];
// console.log(sum(arr)) // 10

// [1, -2, -3]
arr = [1, -2, -3];
// console.log(sum(arr)) // -4

// []
arr = [];
// console.log(sum(arr)) // 0

function remove(arr, x, idx = 0, res = []) {
	/**
   base case check - if idx >= arr.length return []

   if el is equal to x then return [] + recurse idx + 1
   if not equal -> return [el] + recurse idx + 1
   */
	if (idx === arr.length) {
		return res;
	} else {
		if (arr[idx] !== x) {
			res.push(arr[idx]);
		}
		return remove(arr, x, idx + 1, res);
	}
}

// console.log(remove([], 5), [])
// console.log(remove([1,2], 5),[1,2])
// console.log(remove([1,5,5], 5),[1])
// console.log(remove([5,2,5], 5), [2])
// console.log(remove([5,2,3], 5), [2,3])
// console.log(remove([-1,2,5], 5), [-1,2])

/*
 ** Remove all target elements from an array
 */

const array = [1, 2, 3, 3, 4, 5];

const removeTargetElements = (arr, target, i = 0) => {
	if (i === arr.length) {
		return arr;
	}
	if (arr[i] === target) {
		arr.splice(i, 1);
		return removeTargetElements(arr, target, i);
	}
	return removeTargetElements(arr, target, i + 1);
};

// console.log(removeTargetElements(array, 3,), [1, 2, 4, 5])
// console.log(removeTargetElements([1, 1, 2, 3], 2), [1, 1, 3]);
// console.log(removeTargetElements([1, 1, 2, 3], 4), [1, 1, 2, 3]);
// console.log(removeTargetElements([4], 4), []);

function rotateK(arr, k) {
	if (k > 0) {
		let lastElement = arr.pop();
		arr.unshift(lastElement);
		rotateK(arr, k - 1);
	}
	return arr;
}

console.log(rotateK([1, 2, 3, 4, 5], 2));
console.log(rotateK([1, 2, 3, 4, 5], 5));
console.log(rotateK([1, 2, 3, 4, 5], 6));

/*
 ** Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true,  [3, 2, 1] => false)
 */

let array = [3, 6, 0, 6, 3];

const palindrome = (arr, begin = 0, end = arr.length - 1) => {
	if (begin >= end) {
		return true;
	}
	if (arr[begin] == arr[end]) {
		return palindrome(arr, begin + 1, end - 1);
	} else {
		return false;
	}
};

console.log(palindrome(array), true);
