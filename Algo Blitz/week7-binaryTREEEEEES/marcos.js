/*
  Given an array, return the element that appears the most amount of times.
  
  input: array of intergers
  output: most frequent number 
  explanation: returns the number that has appeared the msot amount of times
*/

// most frequent interger in a map
function returnMostFrequent(array) {
	let map = new Map();
	let mostFrequent = null;
	let highestCount = 0;
	// adds it to the map
	for (let i = 0; i < array.length; i++) {
		if (map.has(array[i])) {
			map.set(array[i], map.get(array[i]) + 1);
		} else {
			map.set(array[i], 1);
		}
	}
	// once we have everything in the map
	for (let [key, value] of map) {
		if (value > highestCount) {
			highestCount = value;
			mostFrequent = key;
		}
	}
	return mostFrequent;
}

// Test Cases
// console.log(returnMostFrequent([1, 2, 1, 3]), 1)
// console.log(returnMostFrequent([]), null)
// console.log(returnMostFrequent([3, 3, 4, 4, 1]), '3 or 4')

// Playground

let map = new Map();
map.set('a', 3); // how to set a new key and value to the map
map.set('a', map.get('a') + 1); // how to add to a key
// console.log(map.get('a'))
// console.log(map.has("key")) // return a boolean

// this is the leastFrequent interger in a map
function leastFrequent(array) {
	let map = new Map();
	let leastFrequent = null;
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (map.has(array[i])) {
			map.set(array[i], map.get(array[i]));
		} else {
			map.set(array[i], 1);
		}
	}
	for (let [key, value] of map) {
		if (value < count) {
			leastFrequent = value;
			count = key;
		}
	}
	return count;
}

// Test Cases
console.log(leastFrequent([1, 1, 1, 3]), 1);
console.log(leastFrequent([]), null);
console.log(leastFrequent([3, 3, 4, 4, 5, 1]), '5 or 1');
