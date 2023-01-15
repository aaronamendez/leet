/*
Given a array which contains a set of objects, ?return a array of objects that are unique in date while simultaneously holding the highest percentage of "something" then multiply all the numbers together and return that as a result.

Example:
  input: 
  a = dates = string => "10231999"
  b = percentages = float => 0.2
  [
    {"date": 1},
    {"b": 2},
    {"b": 3},
    {"c": 4}
  ]
  output: 
  {
    "a": 1,
    "b": 3,
    "c": 4
  }

  let result = 12
*/

function solution(array) {
	if (array.length < 1) return 0;
	if (array.length === 1) return array[0].percentage;
	let result = 1;
	let map = new Map();
	let current;
	for (let obj of array) {
		if (map.has(obj.date)) {
			current = map.get(obj.date);
			result /= current;
			if (current < obj.percentage) {
				result *= obj.percentage;
				map.set(obj.date, obj.percentage);
			}
		} else {
			map.set(obj.date, obj.percentage);
			result *= obj.percentage;
		}
	}
	return result;
}

let test1 = [
	{
		date: '100',
		percentage: 10,
	},
	{
		date: '100',
		percentage: 12,
	},
	{
		date: '200',
		percentage: 13,
	},
	{
		date: '300',
		percentage: 14,
	},
];

// "100": 12,
//   "200": 13,
//   "300": 14

console.log(solution(test1), 'should output', 2184);
// console.log(test1.length);
