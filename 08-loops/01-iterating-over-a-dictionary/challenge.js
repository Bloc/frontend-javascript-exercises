// TODO: Complete the `getKeys` function
// getKeys should:
//   - Return an array of each of the keys in the dictionary.
// Ex. getKeys({name: "Rob", age: 101}) returns ["name", "age"]
module.exports.getKeys = function(dictionary) {
  output = [];
  for (var k in dictionary) {
    output.push(k);
  }
  return output;
}

// TODO: Complete the `getValues` function
// getValues should:
//   - Return an array of each of the values in the dictionary.
// Ex. getValues({name: "Rob", age: 101}) returns ["Rob", 101]
module.exports.getValues = function(dictionary) {
  output = [];
  for (var k in dictionary) {
    output.push(dictionary[k]);
  }
  return output;
}


// TODO: Complete the `dictionaryToArray` function
// dictionaryToArray should:
//   - Convert the dictionary passed in to an array of strings.
//   - Each string should be in the format of "[key] is [value]" for each key/value pair in the dictionary.
//   - If an empty dictionary is passed in, you should return an empty array.
//
// Ex. dictionaryToArray({name: "Rob"}) should return ["name is Rob"]
module.exports.dictionaryToArray = function(dictionary) {
  output = [];
  for (k in dictionary) {
    output.push(k + " is " + dictionary[k]);
  }
  return output;
};

