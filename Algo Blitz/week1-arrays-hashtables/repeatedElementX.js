function numElementsRepeatedX(input, target) {
	let repeatedCount = 0;
	let map = new Map();

	for (const elem of input) {
		if (map.has(elem)) {
			map.set(elem, map.get(elem) + 1);
			if (map.get(elem) === target) {
				repeatedCount += 1;
			} else if (map.get(elem) === target + 1) {
				repeatedCount -= 1;
			}
		} else {
			map.set(elem, 1);
		}
	}
	return repeatedCount;
}
