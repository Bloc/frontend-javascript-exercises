

// TODO: Complete the `sumNumbers` function
// sumNumbers should:
//   - Return the sum of all numbers inside of the array that is passed to the function.
//   - If the array is empty, this function should return 0.
//
// Ex. sumNumbers([1, 2, 3]) should return 6.
module.exports.sumNumbers = function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

// TODO: Complete the `splitAndLowerCaseString` function
// splitAndLowerCaseString should:
//   - Split the `inputString` argument into an array of strings by comma.
//   - Return an array with the set of split strings lowercased.
//
// Ex. splitAndLowerCaseString("TEST") returns ["test"]
// Ex. splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS") returns ["this", "is", "split", "by", "commas"]
// Ex. splitAndLowerCaseString("THIS HAS NO COMMAS") returns ["this has no commas"]
//
// Hint: You should use the built-in string functions 'split' and 'toLowerCase'.

module.exports.splitAndLowerCaseString = function(inputString) {
  var output = inputString.split(',');
  for (var i = 0; i < output.length; i++) {
    output[i] = output[i].toLowerCase();
  }
  return output;
};

// TODO: Complete the `addIndex` function
// addIndex should:
//   - Create and return a new array of all inputs as strings.
//   - Each of the new strings should start with "[index] is [data element at index]"
//
// Ex. addIndex([1, 2, 3]) returns ["0 is 1", "1 is 2", "2 is 3"]
// Ex. addIndex(['My', 1, 'number']) returns ["0 is My", "1 is 1", "2 is number"]
module.exports.addIndex = function(arrayOfData) {
  var output = [];
  for (var i = 0; i < arrayOfData.length; i++) {
    output.push(i + " is " + arrayOfData[i]);
  }
  return output;
};

