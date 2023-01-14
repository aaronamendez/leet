/*
We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

Examples
{"oliver": 3, "pinky": 1, "pixel": 2, "tobey": 1} => ["pinky", "tobey"]

*/

// Trying to underwhat the prompt
/**
 * input:
 *  object -> fellows and their timestamp
 * output:
 *  array of names of the fellows with the earliest timestamp
 */

function solution(fellows) {
	let result = []; //
	let lowest = Infinity; // 1
	// let map = new Map()
	// map.get(key);
	// map[key]
	// map.has(key);
	// map.set("key", "value");

	for (let [key, value] of Object.entries(fellows)) {
		if (value < lowest) {
			lowest = value;
		}
	}
	for (let [key, value] of Object.entries(fellows)) {
		/**
		 * oliver, 3
		 * lowest ===
		 * if (lowest === value) then push key or "name" to result
		 */
		if (lowest === value) {
			result.push(key);
		}
	}
	return result;
}

// console.log(solution({"oliver": 3, "pinky": 1, "pixel": 2, "tobey": 1}))

/*
  Given an array, how many values in the array are unique?
  Examples:
    [1, 2, 3, 4, 4, 5] => 5

  You will always be given a value, and return the number of unique values that are greater than that value.
*/

function unique(array, num) {
	let set = new Set();
	for (let value of array) {
		if (value > num) set.add(value);
	}
	return set.size;
}

console.log(unique([1, 2, 3, 4, 4, 5], 2)); // => 3, 4, 5 -> 3

function earliestFellows(fellowsList) {
	const fellowNamesAndTimestamps = {};
	let fellowNames = [];
	let earliestTimestamp = Infinity;

	for (const fellow in fellowsList) {
		let timestamp = fellowsList[fellow];
		if (fellowNamesAndTimestamps[fellow]) {
			fellowNamesAndTimestamps[fellow]++;
			fellowNamesAndTimestamps[fellow].timestamp += timestamp;
		} else {
			fellowNamesAndTimestamps[fellow] = { fellow: tobey, timestamp: 1 };
		}
		if (fellowNamesAndTimestamps[fellow].timestamp < earliestTimestamp) {
			earliestTimestamp = fellowNamesAndTimestamps[fellow].timestamp;
			// push fellow with earliestTimestamp to fellowNames array
		}
	}
	return earliestTimestamp;
}

// console.log(earliestFellows({"oliver": 3, "pinky": 1, "pixel": 2, "tobey": 1}))
// console.log(earliestFellows({"oliver": 3, "pinky": 5, "pixel": 5, "tobey": 2, "ron": 4, "bub": 2,}))
