// Given a string that contains only digits from 0 to 9, and an integer value, target. Print all expressions which evaluate to target using the plus(+) and minus(-) binary operators between the digits.
// You will likely need a helper function to recurse. You can use a loop within your recursive function because we're not monsters.
// Function Signature:
// def printExprs(seq: str, target: int) -> None:
// Target runtime and space complexity:
// Time: O(3^n) where n is the length of the sequence. 3 recursive paths at each index: adding, subtracting, and merging the digit to make a larger number.
// Space: O(n) because the stack can reach n recursive frames before being torn down

// Examples

// printExprs(seq="123", target=6); print("====") # plus only
// 1+2+3

// printExprs(seq="125", target=7); print("====") # minus only
// 12-5

// printExprs(seq="420", target=420); print("====")
// 420

// printExprs(seq="1210", target=2); print("====")
// 1+2-1+0
// 1+2-1-0
// 12-10

/*
  input: string (0-9), integer === target
  output: 
  1 23
  1 2 3
  12 3
  123
*/

function printExprs(seq, target) {
	function helper(arrSofar = [], index = 0, calculation = 0) {
		// if the index >= len(seq){
		//  print what's in arrSofar
		// }

		if (index >= seq.length) {
			if (calculation === target) {
				console.log(arrSofar.join(''));
			}
			// console.log(arrSofar.join(""),calculation)
			return;
		}

		for (let i = index; i < seq.length; i++) {
			let newString = seq.substring(index, i + 1);
			let num = parseInt(newString);

			if (seq[index] === '0' && i != index) {
				break;
			}

			if (arrSofar.length === 0) {
				helper(arrSofar.concat(newString), i + 1, num);
			} else {
				helper(
					arrSofar.concat('+').concat(newString),
					i + 1,
					calculation + num
				);
				helper(
					arrSofar.concat('-').concat(newString),
					i + 1,
					calculation - num
				);
			}
		}
	}
	helper();

	return;
}

// printExprs("123", 6)
// printExprs("125", 7)
// printExprs("1236",0)
// printExprs("1235", -3)
// printExprs("12036", 0)
printExprs('12036', 18);
printExprs('1010', 9);
printExprs('420', 420);
printExprs('1210', 2);
