var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("newArray", function() {
  it("creates an array of numbers", function() {
    expect(challenge.newArray(1,2,3,4)).to.eql([1,2,3,4]);
  });

  it("creates an array of strings", function() {
    expect(challenge.newArray("a", "b", "c", "d")).to.eql(["a", "b", "c", "d"]);
  });

  it("creates an array of non-sequential objects", function() {
    expect(challenge.newArray(1,4,2,3)).to.eql([1,4,2,3]);
  });
});

describe("firstAndLast", function() {
  it("creates new array with numbers", function() {
    expect(challenge.firstAndLast([1,2,3])).to.eql([1,3]);
  });

  it("creates new array with strings", function() {
    expect(challenge.firstAndLast(["a", "b", "c", "d"])).to.eql(["a", "d"]);
  });
});