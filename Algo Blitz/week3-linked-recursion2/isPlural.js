/*
Is the Word Plural?
It is plural if it ends with an "s"
Example:
  dude => false,
  dudes => true,
  change => false,
  changes => true
*/

const isPlural = (str) => (str.split('').pop() === 's' ? true : false);
// console.log(isPlural("dudes")) // => true
// console.log(isPlural("dude")) // => false
