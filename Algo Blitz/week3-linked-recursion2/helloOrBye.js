/*
Say Hello or Say Bye
Examples:
    helloOrBye("Elon", 1) => "Hello Elon"
    helloOrBye("Elon", 0) => "Bye Elon"
*/

function helloOrBye(name, int) {
	if (int === 1) return `Hello ${name}`;
	if (int === 0) return `Bye ${name}`;
}

console.log(helloOrBye('Melissa', 1)); // => "Hello Melissa"
console.log(helloOrBye('Melissa', 0)); // => "Bye Melissa"
