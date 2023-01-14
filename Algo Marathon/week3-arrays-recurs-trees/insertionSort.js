// /*
// Insertion sort is a sorting algorithm that works the way we sort playing cards in our hands and you've likely done this iteratively. Now we will do it recursively.
// Note: This is an exercise in modifying an algorithm to use recursion even though it is normally done iteratively. You can still use a loop within each recursive frame to do part of the algorithm. Just make part of the overall algorithm recursive.
// Insertion sort is a stable, in-place sorting algorithm that builds the final sorted list one item at a time. The partially sorted list initially contains only the first element in the list. With each iteration one element is removed from the remaining unsorted portion of the list and inserted in-place into the sorted portion of the list.

// Examples
// inputArr = [3, 8, 5, 4, 1, 9, -2]
// insertionSort(inputArr)
// print(inputArr == [-2, 1, 3, 4, 5, 8, 9])

// inputArr = [5, 4, 3, 2, 1]
// insertionSort(inputArr)
// print(inputArr == [1, 2, 3, 4, 5])

// inputArr = [8, 4, 6, 2]
// insertionSort(inputArr)
// print(inputArr == [2, 4, 6, 8])

// Function Signature
// def insertionSort(arr: list[int]) -> None:
//     1  
// [8, 4, 6, 2]
// */

// // i
// // 0 1 2 3
// // v
// // 2 4 6 8

// /*
// Approach:
//   - iterate over the array from 0 to n
//     - compare the current element to all elements in the sorted part until swap condition doesn't hold
//       - perform swap between adjacent elements if current element is smaller than previous element
  
// */
// function compareElements(array, idx){
//   // base cases
//   if (idx <= 0 
//       || array.length < 2 
//       || array[idx-1] <= array[idx]) {
//     return;
//   }

//   // action
//   // swap elements
//   [array[idx-1], array[idx]] = [array[idx], array[idx-1]]
//   // recursive case
//   compareElements(array, idx - 1)
//   return;
// }

// function main(input) {
//   insertionSortRecursiveOuter(input)
//   return input;
// }

// function insertionSortRecursiveOuter(input, idx = 1) { //Both recursive  
 
//   if(idx == input.length) {
//     return;
//   }
//   compareElements(input, idx)
//   insertionSortRecursiveOuter(input, idx + 1)
// }

// function insertionSortRecursiveOuter(input, idx) { //Both recursive
//   if(idx == input.length) {
//     return;
//   }
//   let j = idx 
//   while(j > 0 && input[j-1] > input[j]){
//     [input[j-1], input[j]] = [input[j], input[j-1]]
//     j--;
//   }
  
//   insertionSortRecursiveOuter(input, idx + 1)
// }


// function insertionSortRecursive(input){
//   for(let i = 1 ; i < input.length ; i++){
//      compareElements(input, i)
//   }
//   return input
// }

// function insertionSort(input){
//   for(let i = 1 ; i < input.length ; i++){
//     let j = i 
//     while(j > 0 && input[j-1] > input[j]){
//       [input[j-1], input[j]] = [input[j], input[j-1]]
//       j--;
//     }
//   }
//   return input
// }


// console.log(insertionSortRecursive([8, 4, 6, 2]))



function compareElements(array, idx){
  // base cases
  console.trace();
  if (idx <= 0 
      || array.length < 2 
      || array[idx-1] <= array[idx]) {
    return;
  }

  // action
  // swap elements
  [array[idx-1], array[idx]] = [array[idx], array[idx-1]]
  // recursive case
  compareElements(array, idx - 1)
//  return;
}
console.log(compareElements([8, 4, 6, 2], 3))