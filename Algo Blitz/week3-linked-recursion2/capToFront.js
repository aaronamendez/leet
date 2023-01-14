/*
  Move Capital Letters to the Front
  Examples: 
  capToFront("hApPy") ➞ "APhpy"
  capToFront("moveMENT") ➞ "MENTmove"
  capToFront("shOrtCAKE") ➞ "OCAKEshrt"
*/

function capitalsToFront(str) {
	let arr = str.split('');
	let first = '';
	let second = '';
	for (let elem of arr) {
		if (elem === elem.toUpperCase()) {
			first = first + elem;
		} else {
			second = second + elem;
		}
	}
	return first + second;
}

console.log(capitalsToFront('DeDeDe')); // => DDDeee
