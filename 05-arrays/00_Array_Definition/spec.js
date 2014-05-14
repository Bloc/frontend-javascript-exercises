var assert    = require("assert");
var challenge = require("./challenge.js");

describe("newArray", function() {
  it("creates an array of numbers", function() {
    assert.equal(challenge.newArray(1,2,3,4), [1,2,3,4]);
  });

  it("creates an array of strings", function() {
    assert.equal(challenge.newArray("a", "b", "c", "d"), ["a", "b", "c", "d"]);
  });

  it("creates an array of non-sequential objects", function() {
    assert.equal(challenge.newArray(1,4,2,3), [1,4,2,3]);
  });
});

describe("firstAndLast", function() {
  it("creates new array with numbers", function() {
    assert.equal(challenge.firstAndLast([1,2,3]), [1,3]);
  });

  it("creates new array with strings", function() {
    assert.equal(challenge.firstAndLast(["a", "b", "c", "d"]), ["a", "d"]);
  });
});