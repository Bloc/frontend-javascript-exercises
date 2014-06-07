var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("addItem", function() {
  it("should be defined", function() {
    expect(challenge.addItem).to.exist;
  });

  it("adds an item to the end of the list", function() {
    expect(challenge.addItem("banana", ["orange"])).to.eql(["orange", "banana"]);
  });

  it("doesn't add an item if the list already has it", function() {
    expect(challenge.addItem("orange", ["orange"])).to.eql(["orange"]);
  });
});

describe("reverseSortedList", function() {
  it("should be defined", function() {
    expect(challenge.reverseSortedList).to.exist;
  });

  it("returns a list sorted", function() {
    list       = [3, 1, 2];
    listSorted = [3, 2, 1];

    expect(challenge.reverseSortedList(list)).to.eql(listSorted);
  });

  it("returns a different list sorted", function() {
    list          = ["banana", "orange", "apple"];
    listSorted    = ["apple", "banana", "orange"];
    reverseSorted = listSorted.reverse();

    expect(challenge.reverseSortedList(list)).to.eql(reverseSorted);
  });
});
