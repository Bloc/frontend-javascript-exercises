// In this exercise we'll create a program that allows you to manage a grocery
// list. You'll need to create three methods for this program, each of which is
// detailed below.
//
// The `addItem` method should take two arguments. The first argument is the item
// you want to add to the list and the second argument is the array (i.e. list)
// that the item will be added to. Don't add an item to the list if it already
// exists in the list. For example, you could start with this:

module.exports.addItem = function(item, list) {

};

// If we were simply adding items to a list, without worrying about if the item is
// already on the list, we could write:
//
// module.exports.addItem = function(item, list) {   
//  list.push(item);
//  return list;
// }
//
// The tricky part is adding the logic to ensure that we're not adding the same
// `item` twice. There's a function in Javascript arrays that will be helpful here:
//
// http://www.w3schools.com/jsref/jsref_indexof_array.asp
//
// It's called `indexOf`, takes an argument, and returns the index of the element
// in the array. For example:
//
// [1,2,3].indexOf(3); #=> 2
// [1,2,3].indexOf(1); #=> 0
// [1,2,3].indexOf(4); #=> -1
//
// If the element isn't in the array, `indexOf` will return -1. Try to use the
// `indexOf` function to determine if the given `item` is in the
// given `list` and complete the `addItem` implementation.


// The `reverseSortedList` method should take a list of items and return the list sorted
// alphabetically. To get started, define the function:

module.exports.reverseSortedList = function(list) {
 // the list argument is expected to be an array of grocery items
};

// Sorting an array in Javascript is really easy. We can use the `sort` function.
// For example:
//
// list = ["apple", "orange", "banana"]; #=> ["apple", "orange", "banana"]
// list.sort();                          #=> ["apple", "banana", "orange"]
//
// Try stringing the `reverse` and `sort` methods together to complete the
// implementation of the `reverseSortedList` method. In Ruby, you can string methods
// together by calling them in succession. For example:
//
// numbers = [1,2,4,3];      #=> [1,2,4,3]
// numbers.sort();           #=> [1,2,3,4]
// numbers.sort().reverse(); #=> [4,3,2,1]
//
// Remember, the `reverseSortedList` function should return an array of sorted items, 
// in reverse order.