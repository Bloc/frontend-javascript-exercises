// TODO: define a function inBetween()
// inBetween should
//		- take three arguments (all integers), lower, middle, upper
// 		- return a boolean that tells us whether middle is in between upper and lower
// Ex. inBetween(1,3,5) should return true
// inBetween(3,1,5) should return false

module.exports.inBetween = function(lower, middle, upper) {
	return lower < middle && middle < upper;
};

// TODO: define a function equalStrings
// equalStrings should
// 		- take two arguments, both strings
// 		- return true if the strings are the same
//		- return false if the strings are different
// Ex. equalStrings('fun', 'fun') should return true
// equalStrings('bloc', 'boring') should return false :)

module.exports.equalStrings = function(stringOne, stringTwo) {
	return stringOne == stringTwo;
};

// TODO: define a function notEqual
// equalStrings should
//		- take two arguments (of any type)
//		- return true if the two arguments are equal and they're of the same type
// 		- use the strict not equal
// Ex. notEqual(1,'1') should return true
// notEqual(2,2) should return false

module.exports.notEqual = function(one, two) {
	return one !== two;
};