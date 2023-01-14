const array = [1, 5, 8, 10, 13, 18];

function solution(arr, targ) {
	let firstIdx = 0;
	let secondIdx = arr.length - 1;

	while (firstIdx < arr.length) {
		let sum = arr[firstIdx] + arr[secondIdx];
		if (sum === targ) {
			return sum;
		}
		if (sum > targ) {
			secondIdx--;
		}
		if (sum < targ) {
			firstIdx++;
		}
	}
	return -1;
}

console.log(solution(array, 11));
