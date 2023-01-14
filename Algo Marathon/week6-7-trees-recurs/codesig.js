// Towers of Hanoi is a puzzle with three rods and a few disks of varying sizes. The disks are stacked in ascending order on the leftmost rod as follows:

//     |          |          |
//    [1]         |          |
//   [ 2 ]        |          |
//  [  3  ]       |          |
//   Rod A      Rod B      Rod C
// The object of the puzzle is to move all disks from rod A to rod C. To so, there are a few rules that must be followed:

// Each move may move the top disk of any rod and place it onto the top of another rod
// A disk may not be moved on top of a smaller disk; that is a disk of size N can only be placed on top of disks sized N+1 or greater.
// Only one disk may be moved at a time
// For instance, a valid move in the above setup is:

//     |          |          |
//     |          |          |
//   [ 2 ]        |          |
//  [  3  ]       |         [1]
//   Rod A      Rod B      Rod C
// We represent this move with the string Disk 1 to Rod C. (Note that an invalid move after this would be Disk 2 to Rod C, as this would place a disk of size 2 on top of a disk of size 1.)

// To complete the puzzle for the N=3 disks above, the shortest solution is:

// [
// 	"Disk 1 to Rod C",
// 	"Disk 2 to Rod B",
// 	"Disk 1 to Rod B",
// 	"Disk 3 to Rod C",
// 	"Disk 1 to Rod A",
// 	"Disk 2 to Rod C",
// 	"Disk 1 to Rod C",
// ]
// Given a Towers of Hanoi puzzle with N disks, return a list of moves representing the shortest solution to the puzzle. (There will always be three rods named A, B, and C.)

// Important Hint: This problem is easier if you don't try to model the rods and disks directly in code. Instead, think about what happens in the 3-disk case above when you try to move the third disk:

// def moveDisk(disk_num=3, from_rod="A", to_rod="C", extra_rod="B"):
//    ...
// How can moveDisk recursively call itself to simulate all the moves needed?
