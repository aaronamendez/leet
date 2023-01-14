// In this problem, we want to simulate the game Hot Potato (https://en.wikipedia.org/wiki/Hot_potato). Essentially, we have a list of people that pass the potato to the next person at each turn.

// After a certain number of passes (x), the person holding the potato is kicked out of the group. We want to return the final winner of the game (eg: survives all rounds of elimination).

// For example, if we have a list ["James", "Naoko", "Jason"], and a number of passes (2), we would pass two times each round.

// The first round, we might start with James -> Naoko -> Jason (eliminating Jason first after two passes). James starts with the potato for the next round. Then, we would do James -> Naoko -> James (eliminating James second). Then, we only have one contestant left (Naoko), who we return as our result.

// You can assume passes will be equal to or greater than 1. The potato begins the game with the first person in the list.

// [execution time limit] 4 seconds (js)

// [input] array.string contestants

// An array of strings representing contestant names.

// [input] integer passes

// An integer representing the number of passes.

// [output] string

// The name of the contestant holding the potato after the specified number of passes.

// [JavaScript] Syntax Tips

/**
 * input: array of people
 * build queue with the array
 * build counter = passes
 * while length of array is greater than 1
 *  do pass
 */
// James -> Naoko -> Jason
// Round 1: Passes 2 => Jason
// James -> Naoko
// Round 2: Passes 2 => James
// Winner is Naoko
function solution(contestants, passes) {
	let counter = passes;
	let queue = [...contestants];
	while (queue.length > 1) {
		if (counter === 0) {
			queue.shift(); // eliminates person
			counter = passes; // resets the round
		} else {
			// if counter is > 0
			queue.push(queue.shift());
			counter--;
		}
	}
	return queue[0];
}

//test case
const test1 = ['James', 'Naoko', 'Jason']; // passes 2 expected output "Naoko"

const test2 = ['James', 'Jason', 'Naoko', 'Lenny', 'Kent', 'Linda']; // passes 8 expected output "Kent"

const test3 = ['James', 'Jason', 'Naoko', 'Lenny', 'Kent', 'Linda']; // passes 2 expected output 'James'

const test4 = ['James', 'Jason', 'Naoko', 'Lenny', 'Kent', 'Linda']; // passes 9 expected "Jason"

console.log(solution(test1, 2), 'Naoko');
console.log(solution(test2, 8), 'Kent');
console.log(solution(test3, 2), 'James');
console.log(solution(test4, 9), 'Jason');
