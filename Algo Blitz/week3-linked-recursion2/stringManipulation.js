/*
Is the Word Plural?
It is plural if it ends with an "s"
Example:
  dude => false,
  dudes => true,
  change => false,
  changes => true
*/
const isPlural = (str) => (str[str.length - 1] === 's' ? true : false);
console.log(isPlural('dudes')); // => true
console.log(isPlural('dude')); // => false
