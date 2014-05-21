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

  it("should concatenate disjoint substrings", function() {
    result = challenge.sliceItAndCombineIt(bigString, 10, 15, 27, 36);
    expect(result).to.eql("long emergency");
  });

  it("should handle an empty second string", function() {
    result = challenge.sliceItAndCombineIt(bigString, 0, 4, 0, 0);
    expect(result).to.eql("This");
  });

  it("should handle an empty first string", function() {
    result = challenge.sliceItAndCombineIt(bigString, 0, 0, 0, 4);
    expect(result).to.eql("This");
  });

  it("should handle overlapping strings", function() {
    result = challenge.sliceItAndCombineIt(bigString, 0, 4, 0, 4);
    expect(result).to.eql("ThisThis");
  });
});

describe("findFirstMatch", function() {
  it("should find a match", function() {
    expect(challenge.findFirstMatch("Roses are red.", "red")).to.eql(10);

  });

  it("should return the first match", function() {
    expect(challenge.findFirstMatch("red red red red", "red")).to.eql(0);
  });
});

describe("findLastMatch", function() {
  it("should find a match", function() {
    expect(challenge.findLastMatch("Roses are red.", "red")).to.eql(10);
  });

  it("should return the first match", function() {
    expect(challenge.findLastMatch("red red red red", "red")).to.eql(12);
  });
});

describe("findLastMatch", function() {
});


describe("substringBetweenMatches", function() {
  it("creates the correct substring for the example", function() {
    text = "Roses are red, apples are really red.";
    result = challenge.substringBetweenMatches(text, "red");
    expect(result).to.eql(", apples are really ");
  });

  it("creates the correct substring when there are more than two matches", function() {
    text = "red red red red red red";
    result = challenge.substringBetweenMatches(text, "red");
    expect(result).to.eql(" red red red red ");
  });
});

