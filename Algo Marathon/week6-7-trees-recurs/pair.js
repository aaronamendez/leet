/**
 * Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.
Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.
Function Signature: 
def printXTriangle(k: int) -> None:
def printTriangle(array: list[str]) -> None:
Target runtime and space complexity:
Time: O(k), where k is the input integer or the length of the array.
Space: O(k), for the recursive call frames on the stack.
Examples:
printXTriangle(5)
XXXXX
 XXX
  X

printTriangle([a,b,c,d,e])
abcde
 bcd
  c
 */

function printXTriangle(n) {
	function helper(num, count) {
		if (num < 1) return;

		let string = '';
		for (let j = 0; j < count; j++) {
			string = string + ' ';
		}
		for (let i = 0; i < num; i++) {
			string = string + 'X';
		}
		console.log(string);
		helper(num - 2, count + 1);
	}
	helper(n, 0);
}

// console.log(printXTriangle(5))

function printTriangle(arr) {
	function helper(arr, count) {
		if (arr.length < 1) return;

		let string = '';
		for (let j = 0; j < count; j++) {
			string = string + ' ';
		}
		for (let i = 0; i < arr.length; i++) {
			string = string + arr[i];
		}
		console.log(string);
		helper(arr.slice(1, arr.length - 1), count + 1);
	}
	helper(arr, 0);
}

console.log(printTriangle(['a', 'b', 'c', 'd', 'e']));
/*
  def printXTriangle(k: int) -> None:
    def xTriangleHelper(times: int, currLvl: int = 0) -> None:
      # the number of spaces should increase each level down
      print(' ' * currLvl, end='')
      # reduce the quantity of Xs by twice the current level
      print('X' * (times - currLvl * 2), end='') 
      print()
  
      # there's half as many levels as there are Xs (floored)
      if currLvl < times // 2:
        xTriangleHelper(times, currLvl+1)
  
    xTriangleHelper(k, 0)
  */
