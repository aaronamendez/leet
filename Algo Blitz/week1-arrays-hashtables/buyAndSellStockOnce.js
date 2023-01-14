let array = [7, 1, 5, 3, 6, 4];

function solution(arr) {
	let highestSellIdx;
	let highestProfit = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let trade = arr[j] - arr[i];
			if (trade > highestProfit) {
				highestProfit = trade;
				highestSellIdx = j;
			}
		}
	}

	return highestProfit;
}

console.log(solution(array));
