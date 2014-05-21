// In this exercise you'll be writing 3 methods in total. We'll detail the
// requirements for each method below.
//
// Before we get started with the method requirements, let's get some exposure to
// some common methods that are offered in Javascript arrays. The first function
// we'll look at is named `reverse`. As a Javascript programmer, you should get
// familiar with reading documentation. For example, take a look at the W3Schools
// docs on `reverse`:
//
// http://www.w3schools.com/jsref/jsref_reverse.asp)
//
// numbers = [1, 2, 3] 
// numbers.reverse() #=> [3, 2, 1] 
// numbers           #=> [1, 2, 3]
//
// Notice how calling `reverse` doesn't actually change the `numbers` array
//
// The first method you'll write is a method named `reversePlusOne`. It should take
// one argument - an array - and return the array reversed. Before you reverse the
// array, take the first element of the array argument and add it to the end of the
// return array.

module.exports.reversePlusOne = function(a) {
  a.push(a[0]);
  return a.reverse();
};

// Check out the `join` method in the W3Schools docs:
// http://www.w3schools.com/jsref/jsref_join.asp
//
// The `join` method returns a string consisting of the elements
// of the array it's called on. For example:
//
// [ "a", "b", "c" ].join() #=> "abc"
//
// The `join` method can also take an argument, which it will insert between
// each element of the array it's called on:
//
// [ "a", "b", "c" ].join("-") #=> "a-b-c"
//
// Define a method named `plusesEverywhere` method that takes one argument - an
// array - and returns a string with a `+` between each element in the array.
// Let's get started by defining the method structure, and declaring what we
// want to do:
//

module.exports.plusesEverywhere = function(a) {
  return a.join('+');
};

// You'll often need to evaluate the size of an array. Javascript arrays have an
// attribute named `length` that returns an integer based on the number of elements
// in an array. For example:
//
// [1, 2, 3, 4, 5 ].length #=> 5
//
// Define a method named `arrayQuantityPlusOne` that takes an array as an
// argument and returns the number of elements in the given array, plus 1. As
// always, start by defining the function structure:

module.exports.arrayQuantityPlusOne = function(a) {
  return a.length + 1;
};
