/*
  Fibonacci Sequence
*/

function fibo(int) {
	if (int <= 1) return int;
	let lastNumber = fibo(int - 1); // [1, 2, 3, 4 + [5]] <- not an array
	let secondToLastNumber = fibo(int - 2); // [1, 2, 3, [4], 5]
	let total = lastNumber + secondToLastNumber;
	return total;
}

console.log(fibo(4)); // => 3
console.log(fibo(10)); // => 55
console.log(fibo(-12)); // => return 0 (cause its negative)
