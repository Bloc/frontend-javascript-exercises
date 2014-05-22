// In this exercise we'll create a program that allows you to manage a grocery
// list. You'll need to create three methods for this program, each of which is
// detailed below.
//
// The `addItem` method should take two arguments. The first argument is the item
// you want to add to the list and the second argument is the array (i.e. list)
// that the item will be added to. Don't add an item to the list if it already
// exists in the list. For example, you could start with this:

module.exports.addItem = function(item, list) {
  if (list.indexOf(item) == -1) {
    list.push(item);
  }
  return list;
};


// The `reverseSortedList` method should take a list of items and return the list sorted
// alphabetically. To get started, define the function:

module.exports.reverseSortedList = function(list) {
  return list.sort().reverse();
};

