/*
Problem Statement

Bubble sort is a sorting algorithm that works by comparing and swapping elements in the wrong order which you've likely done iteratively. Now we will do it recursively.
Bubble sort is a stable, in-place sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.


ex:

inputArr = [3, 8, 5, 4, 1, 9, -2]
bubbleSort(inputArr)
print(inputArr == [-2, 1, 3, 4, 5, 8, 9])

inputArr = [5, 4, 3, 2, 1]
bubbleSort(inputArr)
print(inputArr == [1, 2, 3, 4, 5])

inputArr = [8, 4, 6, 2]
bubbleSort(inputArr)
print(inputArr == [2, 4, 6, 8])


Walkthrough recursively:

[8, 4, 6, 2]

base case: if length of array = 1 return 1

# recursive case: full array, i, j 

*/

function bubbleSort(array, i, j) {
	if (array.length < 2) return array;
	// empty case
	// if (array.length < 2) return array;

	// case that ends the recursion
	// curr i === array.length
	// if (isSorted(array) === true) return array
	if (i === array.length - 1) return array;

	// idea of swapping
	if (array[j] > array[j + 1]) {
		// swap(array, i, j)
		let temp = array[j + 1];
		array[j + 1] = array[j];
		array[j] = temp;
	}

	// update j each time as we iterate over the same i
	// but once we reach the end of j then we move i+=1
	// then j resets to 0
	let newJ = j + 1;
	if (j === array.length - 1) {
		i += 1;
		newJ = 0;
	}

	return bubbleSort(array, i, newJ);

	/**
	 * [1]
	 * [1, 2, 4, 3, 5]
	 * [4, 3, 2, 1, 5]
	 */
}

console.log(bubbleSort([4, 2, 3, 1, 5], 0, 0)); // => [1, 2, 3, 4, 5]
console.log(bubbleSort([], 0, 0)); // => null or []
console.log(bubbleSort([1], 0, 0));
console.log(bubbleSort([2, 1], 0, 0)); // => [1, 2]
