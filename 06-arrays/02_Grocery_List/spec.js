var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("addItem", function() {
  it("adds an item to the end of the list", function() {
    expect(challenge.addItem("banana", ["orange"])).to.equal(["orange", "banana"]);
  });

  it("doesn't add an item if the list already has it", function() {
    expect(challenge.addItem("orange", ["orange"]), ["orange"]);
  });
});

describe("reverseSortedList", function() {
  it("returns a list sorted", function() {
    list       = [3, 1, 2];
    listSorted = [1, 2, 3];

    expect(challenge.reverseSortedList(list)).to.equal(listSorted);
  });

  it("returns a different list sorted", function() {
    list          = ["banana", "orange", "apple"];
    listSorted    = ["apple", "banana", "orange"];
    reverseSorted = listSorted.reverse();

    expect(challenge.reverseSortedList(list)).to.equal(reverseSorted);
  });

  it("returns a list sorted without duplicates", function() {
    list          = ["banana", "orange", "apple", "orange"];
    listSorted    = ["apple", "banana", "orange"];
    reverseSorted = listSorted.reverse();

    expect(challenge.reverseSortedList(list)).to.equal(reverseSorted);
  });
});