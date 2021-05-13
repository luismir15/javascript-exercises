function add (a, b) {
	
	return a + b;
}

function subtract (a, b) {
	
	return a - b;
}

function sum (array) {
	
	let arraySum;

	for (let i; i < array.length; i++) {

		arraySum += array[i];
	}

	return arraySum;
}

function multiply () {
	
	let arraySum;

	for (let i; i < array.length; i++) {

		arraySum *= array[i];
	}

	return arraySum;
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}