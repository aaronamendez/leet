/*
Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4 (because 2+1+0+1).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) by 10 removes the rightmost digit (126 / 10 is 12).
Examples:
    print(count8(8) == 1)
    print(count8(818) == 2)
    print(count8(8818) == 4) # because 2+1+0+1
*/

function count8s(int) {
	if (int === 0) return 0;
	if (int % 100 == 88) return 2 + count8s(Math.floor(int / 10));
	if (int % 10 == 8) return 1 + count8s(Math.floor(int / 10));
	return count8s(int / 10);
}

console.log(count8s(8) === 1);
console.log(count8s(818) === 2);
console.log(count8s(8818) === 4);
console.log(count8s(8) === 1);
console.log(count8s(818) === 2);
console.log(count8s(8818) === 4);
console.log(count8s(8088) === 4);
console.log(count8s(123) === 0);
console.log(count8s(81238) === 2);
console.log(count8s(88788) === 6);
console.log(count8s(8234) === 1);
console.log(count8s(2348) === 1);
console.log(count8s(23884) === 3);
console.log(count8s(0) === 0);
console.log(count8s(1818188) === 5);
console.log(count8s(8818181) === 5);
console.log(count8s(1080) === 1);
console.log(count8s(188) === 3);
console.log(count8s(88888) === 9);
console.log(count8s(9898) === 2);
console.log(count8s(78) === 1);

// O(n) === O(2n)
