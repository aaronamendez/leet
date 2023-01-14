let array = [1, 2, 3, 4, 5];

function solution(arr) {
	if (arr.length === 1 || arr.length === 0) {
		return arr;
	}
	let firstIdx = 0;
	let secondIdx = arr.length - 1;
	while (firstIdx < secondIdx) {
		let a = arr[firstIdx];
		let b = arr[secondIdx];
		arr[firstIdx] = b;
		arr[secondIdx] = a;
		firstIdx++;
		secondIdx--;
	}
	return arr;
}

console.log(solution(array));
