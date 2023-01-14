/*
Ned and Mary want to choose a restaurant to bring their kids to for the evening, and they both have a list of their favorite places, represented by strings and sorted by preference. The place they each prefer the most is at the beginning of the list, and their least preferred at the end.
You need to help them find the optimal match to dine at based on their combined preferences score. They will often have to compromise, so their ideal option is a place they both have on their list, and it has the highest combined preference score.
To calculate the highest combined preference score, get the restaurant with the minimum index sum when adding the indices of the restaurant on both of their lists together. If multiple restaurants have the same highest score, output all of them.
Examples
Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

Output: ["Shogun"]

Explanation: The only restaurant they both like is "Shogun".
Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["KFC", "Shogun", "Burger King"]

Output: ["Shogun"]

Explanation: They both have "Shogun" on their preferred list and it has the highest preference score with an index sum of 1 (0+1). They both listed "KFC" but it has a lower preference score because the index sum is 3 (0+3). Likewise, "Burger King" has a preference score of 4 (2+2).
Input:
nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]

Output: ["Guppy House", "In-n-Out"]

Explanation: They both have "Guppy House" and "In-n-Out" on their preferred list and both restaurants have the same highest total preference score with an index sum of 1 (0+1 and 1+0). They both listed "Dairy Queen" but the preference score is 4 (2+2).
Function Signature
def findCompatibleRestaurantsBetween(ned: list[str], mary: list[str]) -> list[str]:

Step 1: make a map of ned's choices & indices
set min value to Infinity
set best restaurant to null
Step 2: Go through Mary's choices
  if Mary's Index plus ned's index from map < min
  best rest = [that rest]
  if Mary's Index plus ned's index from map = min
  add rest to best rest
*/

function chooseRestaurant(ned, mary) {
	let min = Infinity;
	let bestRest = [];
	const nedMap = new Map();

	for (let i = 0; i < ned.length; i++) {
		nedMap.set(ned[i], i);
	}

	for (let i = 0; i < mary.length; i++) {
		if (nedMap.has(mary[i])) {
			if (i + nedMap.get(mary[i]) < min) {
				min = i + nedMap.get(mary[i]);
				bestRest = [mary[i]];
			} else if (i + nedMap.get(mary[i]) === min) {
				bestRest.push(mary[i]);
			} else continue;
		}
	}

	return bestRest;
}
/*
  ---Option 2
  make new map

  map stores tuples [int score, bool inBoth]
  var stoppingPoint = max arr.length
  while i < stoppingPoint
  iterate starting at 0
  if ned or mary's x choice is in map
  get score for that choice
  that score becomes the stopping point


  check if ned's choice is in map
  if so set inBoth to true
  and add scores together
  else add ned's choice to map with inBoth = false

  same with Mary's
  i++


  get lowest value in map that has inBoth == true
  get all restaurants at that score



  
  nedsChoices = ["Burger King", "Arby's", "Shogun", "Tapioca Express", "KFC"]
 marysChoices = ["KFC", "McD's", "Shogun", "Burger King"]
*/

function getRestaurant(NedArr, MaryArr) {
	let restaurants = new Map();
	let stoppingPoint = Math.max(NedArr.length, MaryArr.length);
	let i = 0;
	while (i < stoppingPoint) {
		if (restaurants.has(NedArr[i])) {
			let val = restaurants.get(NedArr[i]);
			val[0] += i; //add score
			val[1] = true; //in both arrays
			restaurants.set(NedArr[i], val);
		} else {
			restaurants.set(NedArr[i], [i, false]);
		}

		if (restaurants.has(MaryArr[i])) {
			let val = restaurants.get(MaryArr[i]);
			val[0] += i; //add score
			val[1] = true; //in both arrays
			restaurants.set(MaryArr[i], val);
		} else {
			restaurants.set(MaryArr[i], [i, false]);
		}
		i++;
	}
	let min = Infinity;
	let output = [];
	restaurants.forEach((v, k) => {
		if (v[0] < min && v[1] == true) {
			min = v[0];
			output = [k];
		} else if (v[0] == min && v[1] == true) {
			output.push(k);
		}
	});
	return output;
}

// nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

// Emily
// console.log(chooseRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]), 'should be', ["Shogun"])
// console.log(chooseRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]), 'should be', ["Shogun"])
// console.log(chooseRestaurant(["Guppy House", "In-n-Out", "Dairy Queen"], ["In-n-Out", "Guppy House", "Dairy Queen"]), 'should be', ["Guppy House", "In-n-Out"])

// Andy
console.log(
	getRestaurant(
		['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
		[
			'Piatti',
			'The Grill at Torrey Pines',
			'Hungry Hunter Steakhouse',
			'Shogun',
		]
	),
	'should be',
	['Shogun']
);
console.log(
	getRestaurant(
		['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
		['KFC', 'Shogun', 'Burger King']
	),
	'should be',
	['Shogun']
);
console.log(
	getRestaurant(
		['Guppy House', 'In-n-Out', 'Dairy Queen'],
		['In-n-Out', 'Guppy House', 'Dairy Queen']
	),
	'should be',
	['Guppy House', 'In-n-Out']
);
