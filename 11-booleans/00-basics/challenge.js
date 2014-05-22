// TODO: complete the equalStrings function.
// equalStrings should:
//   - Take two arguments, both strings.
//   - Return true if the strings are the same.
//   - Return false if the strings are different.
//
// Ex. equalStrings('fun', 'fun') should return true
// Ex. equalStrings('bloc', 'boring') should return false :)
module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne == stringTwo;
};

// TODO: complete the notEqual function.
// notEqual should:
//   - Take two arguments (of any type)
//   - Return true unless the two arguments are the same type and are equal to eachother.
// Ex. notEqual(1, '1') should return true
// Ex. notEqual(1, 1) should return false
module.exports.notEqual = function(one, two) {
  return one !== two;
};

// TODO: complete the inBetween function.
// inBetween should:
//   - Take three arguments (all integers), lower, middle, upper
//   - Return a boolean that tells us whether middle is in between upper and lower
// Ex. inBetween(1,3,5) should return true
// Ex. inBetween(3,1,5) should return false
module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && middle < upper;
};


// TODO: complete the outsideRanges function.
// outsideRanges should:
//  - Take one argument, 'number', which is a number.
//  - Return true when the number is:
//     * Not between 10 and 20, it also can't be 10 or 20.
//     * Not between 42 and 75, it also can't be 75. 42 is allowed.
//     * Not between 1 and 6. 1 and 6 are allowed.
// Ex. outsideRanges(42) should return true.
// Ex. outsideRanges(75) should return false
module.exports.outsideRanges = function(number) {
  var inRange = (10 <= number && number <= 20)
            || (42 < number && number <= 75)
            || (1 < number && number < 6)
            ;
  return !inRange;
};

// TODO: complete the nameAndPrice function.
// nameAndPrice should:
//   - Take two arguments 'name' which is the name of a newspaper, and 'price' which is a number.
//   - Return true if name is 'NYTimes' or 'LATimes' and price is greater than or equal to 1.
//
// Ex. nameAndPrice('NYTimes', 1) returns true
// Ex. nameAndPrice('LATimes', 0) returns false
// Ex. nameAndPrice('NYTimes', 0) returns false
module.exports.nameAndPrice = function(name, price) {
  return (name === "NYTimes" || name === "LATimes") && (price >= 1);
};


