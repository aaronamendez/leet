let array = [0, 0, 0, 0, 0, 0];

function solution(arr, targ) {
	let results = [];
	if (targ >= arr.length) {
		return results;
	}
	let index = 0;
	while (index < arr.length) {
		index += targ;
		results.push(index);
	}
	return results;
}

console.log(solution(array, 3));
