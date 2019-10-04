function eval() {
    // Do not use eval!!!
    return;
}
let divide = function(expr) {
	let numberString = expr.split('/');
	let numbers =numberString.map(noStr=> +noStr); 
	let result = numbers.reduce((sum, current) => (sum/current));
	return result;
}
let multi = function(expr) {
	let numberString = expr.split('*');
	let numbers =numberString.map((noStr)=> divide(noStr));
	let initialValue = 1.0000;
	let result = numbers.reduce((sum, current) => sum * current, initialValue);
	return result;
} 

let minus = function(expr) {
	let  numberString = expr.split('-');
	let numbers = numberString.map(noStr =>multi(noStr));
	let initialValue = numbers[0];
	let result = numbers.slice(1).reduce((sum, current) => sum - current, initialValue);
	return result;
}
let expressionCalculator = function(expr) {
	let  numberString = expr.split('+');
	let numbers = numberString.map(noStr => minus(noStr));
	let initialValue = 0.0000;
	let result = numbers.reduce((sum, current) => sum + current , initialValue);

	return result;
}

module.exports = {
	expressionCalculator
}




