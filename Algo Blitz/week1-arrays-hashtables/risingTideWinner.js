let array = ['oliver', 'pixel', 'pinky', 'pixel'];

function solution(arr) {
	let map = {
		key: [],
	};
	let winner = '';
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			map[arr[i]]++;
		} else {
			map[arr[i]] = 1;
		}
	}
	for (const [key, value] of Object.entries(map)) {
		if (value > count) {
			winner = `${key}`;
			count = value;
		}
		console.log(key, value);
	}
	return winner;
}

console.log(solution(array));
