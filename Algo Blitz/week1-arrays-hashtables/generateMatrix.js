let input = 5;

function generateMatrix(num) {
	let result = [];
	let counter = 0;
	for (let i = num; i > 0; i--) {
		result.push(putIntoArray(i));
	}
	return result;
}

function putIntoMatrix(num) {
	let arr = [];
	for (let i = num; i > 0; i--) {
		arr.push(i);
	}
	return arr;
}

console.log(generateMatrix(input));
