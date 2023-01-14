/*
Count 7's given an number
Examples
    count7(7) == 1
    count7(123) == 0
    count7(717) == 2
*/

const count7 = (int) => {
	if (!int) return 0;
	if (int % 10 === 7) {
		return 1 + count7(parseInt(int / 10));
	}
	return 0 + count7(parseInt(int / 10));
};

// console.log(count7(1717)) // => 2
// console.log(count7(70701277)) // == 4
