let object = { oliver: 3, pixel: 3, pinky: 5, tobey: 5 };

function solution(obj) {
	let set = new Set();
	for (const [key, value] of Object.entries(obj)) {
		if (set.has(value)) {
			set.delete(value);
		} else {
			set.add(value);
		}
	}
	return set.size === 0;
}

console.log(solution(object));
