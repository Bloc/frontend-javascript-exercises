// TODO: Complete the `getKeys` function
// getKeys should:
//   - Return an array of each of the keys in the object.
// Ex. getKeys({name: "Rob", age: 101}) returns ["name", "age"]
module.exports.getKeys = function(object) {
  output = [];
  for (var k in object) {
    output.push(k);
  }
  return output;
}

// TODO: Complete the `getValues` function
// getValues should:
//   - Return an array of each of the values in the object.
// Ex. getValues({name: "Rob", age: 101}) returns ["Rob", 101]
module.exports.getValues = function(object) {
  output = [];
  for (var k in object) {
    output.push(object[k]);
  }
  return output;
}


// TODO: Complete the `objectToArray` function
// objectToArray should:
//   - Convert the object passed in to an array of strings.
//   - Each string should be in the format of "[key] is [value]" for each key/value pair in the object.
//   - If an empty object is passed in, you should return an empty array.
//
// Ex. objectToArray({name: "Rob"}) should return ["name is Rob"]
module.exports.objectToArray = function(object) {
  output = [];
  for (k in object) {
    output.push(k + " is " + object[k]);
  }
  return output;
};

