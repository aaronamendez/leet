/* 
Sum Recursively Each Digit of an Integer
Example: 
    sumDigits(12) == 3
    sumDigits(49) == 13
    sumDigits(126) == 9
*/

const sum = (int) => (int ? (int % 10) + sum(parseInt(int / 10)) : 0);
// console.log(sum(1234)) // => 10
