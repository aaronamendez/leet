let array = [4, 2, 1, 3];

function solution(arr) {
	let minDiff = Infinity;
	// arr.sort((a, b) => a - b)
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let sum = arr[i] - arr[j];
				if (sum < minDiff) {
					minDiff = sum;
				}
			} else {
				let sum = arr[j] - arr[i];
				if (sum < minDiff) {
					minDiff = sum;
				}
			}
		}
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] - arr[i] === minDiff) {
				result.push([arr[i], arr[j]]);
			}
			if (arr[i] - arr[j] === minDiff) {
				result.push([arr[i], arr[j]]);
			}
		}
	}
	return result;
}

console.log(solution(array));
// Output: [[1,2],[2,3],[3,4]]
