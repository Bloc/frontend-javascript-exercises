// TODO: create function newArray
// newArray should
//   - take four arguments
//   - return an array with those arguments 
// Ex. newArray(1,2,3,4) should return [1,2,3,4]

module.exports.newArray = function(a,b,c,d) {   
  return [a,b,c,d];
};

// TODO: create function newArray
// firstAndLast should
//   - take one argument, an array with at least 3 elements
//   - return a new array with the first and last element of the passed array
// Ex. var array = ['one', 3, 'cool' 4];
// firstAndLast(array) should return ['one', 4]

module.exports.firstAndLast = function(a) {
  var lastIndex = a.length - 1;
  return [a[0],a[lastIndex]]; 
};