function zooInventory(matrix) {
	let result = [];
	for (let elem of matrix) {
		let string = '';
		for (let i = 0; i < elem.length; i++) {
			let curr = elem[i];
			if (!Array.isArray(curr)) {
				string = string + curr + ' the ';
			} else {
				string = string + `${curr[0]} is ${curr[1]}.`;
			}
		}
		result.push(string);
	}
	return result;
}

let myZoo = [
	['King Kong', ['gorilla', 42]],
	['Nemo', ['fish', 5]],
	['Punxsutawney Phil', ['groundhog', 11]],
];

console.log(zooInventory(myZoo));
/* => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/
