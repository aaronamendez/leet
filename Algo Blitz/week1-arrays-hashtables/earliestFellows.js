let map = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };

function earliestFellows(obj) {
	let results = [];
	let timeStamp = Infinity;

	for (const [key, value] of Object.entries(obj)) {
		if (value < timeStamp) {
			results.length = 0;
			results.push(key);
			timeStamp = value;
		} else if (value === timeStamp) {
			results.push(key);
		} else {
			continue;
		}
	}
	return results;
}

console.log(earliestFellows(map));
