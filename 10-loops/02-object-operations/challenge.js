
// TODO: Complete the `copy` function
// copy should:
//   - Take one object as an argument.
//   - Create a new object and copy all of the properties of the input to the new object.
//   - Return the new object.
//
// Ex. copy({name: "Rob"}) returns a new object {name: "Rob"}
module.exports.copy = function(src) {
  var dest = {};
  for (k in src) {
    dest[k] = src[k];
  }
  return dest;
};

// TODO: Complete the `extend` function
// extend should:
//   - Take two dictionaries as arguments (`dest` and `src`) and copy all of the properties (e.g. key, value pairs) of `src` into `dest`.
//   - Return a modified `dest`.
//
// Ex. extend({name: "Rob"}, {age: 101}) should modify and return `dest` with content of {name: "Rob", age: 101}
// Ex. extend({name: "Rob"}, {name: "Steve"}) should modify and return `dest` with content of {name: "Steve"}
//
module.exports.extend = function(dest, src) {
  for (k in src) {
    dest[k] = src[k];
  }
  return dest;
};

// TODO: Complete the `hasElems` function.
// hasKey should:
//   - Take two arguments the first is a object and the second argument is an array of elements.
//   - This function should return true when all of the elements in the array
//      are keys in the object, false otherwise.
//
module.exports.hasElems = function(dict, elems) {
  for (var i = 0; i < elems.length; i++) {
    if (dict[elems[i]] === undefined) {
      return false;
    }
  }
  return true;
};

