var assert    = require("assert");
var challenge = require("./challenge.js");

describe("addItem", function() {
  it("adds an item to the end of the list", function() {
    assert.equal(challenge.addItem("banana", ["orange"]), ["orange", "banana"]);
  });

  it("doesn't add an item if the list already has it", function() {
    assert.equal(challenge.addItem("orange", ["orange"]), ["orange"]);
  });
});

describe("reverseSortedList", function() {
  it("returns a list sorted", function() {
    list       = [3, 1, 2];
    listSorted = [1, 2, 3];

    assert.equal(challenge.reverseSortedList(list), listSorted);
  });

  it("returns a different list sorted", function() {
    list          = ["banana", "orange", "apple"];
    listSorted    = ["apple", "banana", "orange"];
    reverseSorted = listSorted.reverse();

    assert.equal(challenge.reverseSortedList(list), reverseSorted);
  });

  it("returns a list sorted without duplicates", function() {
    list          = ["banana", "orange", "apple", "orange"];
    listSorted    = ["apple", "banana", "orange"];
    reverseSorted = listSorted.reverse();

    assert.equal(challenge.reverseSortedList(list), reverseSorted);
  });
});