var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("basicStringOperations", function() {
  it("should return a properly formated letter", function() {
    result = "Hello Rob,\n\nTake care.\n\nSincerely,\nJoe";
    expect(challenge.formLetter("Rob", "Joe", "Take care.")).to.eql(result);
  });

});
describe("sliceItAndCombineIt", function() {
  var origString = "This is a long test of the emergency broadcast system."
  var bigString = null;

  beforeEach(function() {
    bigString = origString;
  });

  it("should not modify the original string", function() {
    challenge.sliceItAndCombineIt(bigString, 10, 20, 30, 40);
    expect(bigString).to.eql(origString, "Your function shouldn't modify the string argument!");
  });
  it("should properly concatenate disjoint substrings", function() {
    result = challenge.sliceItAndCombineIt(bigString, 10, 15, 27, 36);
    expect(result).to.eql("long emergency");
  });

  it("should work properly with empty start string", function() {


  });
});
