/*

In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. Compute the result recursively (without loops).

*/

function factorial(int) {
	if (int === 1) return 1;
	return int * factorial(int - 1);
}

console.log(factorial(3), 6);
console.log(factorial(5), 120);
