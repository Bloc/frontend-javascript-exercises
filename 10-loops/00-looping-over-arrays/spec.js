var expect = require('chai').expect;
var challenge = require('./challenge');
var _ = require('underscore');

describe("sumNumbers", function() {
  it("should be defined", function() {
    expect(challenge.sumNumbers).to.exist;
  });

  it("sums consecutive numbers", function() {
    expect(challenge.sumNumbers([1,2,3])).to.eql(6);
  });

  it("sums random numbers", function() {
    expect(challenge.sumNumbers([5, 23, 4])).to.eql(32);
  });

  it("can be called multiple times and return the correct result.", function() {
    expect(challenge.sumNumbers([5, 23, 4])).to.eql(32);
    expect(challenge.sumNumbers([5, 23, 4, 1])).to.eql(33);
  });

  it("returns 0 for an empty array", function() {
    expect(challenge.sumNumbers([])).to.eql(0);
  });
});

describe("splitAndLowerCaseString", function() {
  it("should be defined", function() {
    expect(challenge.splitAndLowerCaseString).to.exist;
  });

  it("should lowercase a single word", function() {
    expect(challenge.splitAndLowerCaseString("TeST")).to.eql(['test']);
  });

  it("should split and lowercase comma separated words", function() {
    expect(challenge.splitAndLowerCaseString("TeST,tESt,rEst")).to.eql(['test', 'test', 'rest']);
  });

  it("should lower case an entire string", function() {
    expect(challenge.splitAndLowerCaseString("This Is A tESt")).to.eql(["this is a test"]);
  });

  it("should handle an empty string", function() {
    expect(challenge.splitAndLowerCaseString('')).to.eql(['']);
  });
});


describe("addIndex", function() {
  it("should be defined", function() {
    expect(challenge.addIndex).to.exist;
  });

  it("adds index to an array of numbers", function() {
    inputData = [1, 2, 3];
    expect(challenge.addIndex(inputData)).to.eql(["0 is 1", "1 is 2", "2 is 3"]);
    // This function shouldn't modify the inputData array
    expect(inputData).to.eql([1, 2, 3]);
  });

  it("adds index to strings", function() {
    expect(challenge.addIndex(['apple', 'banana', 'orange'])).to.eql(["0 is apple", "1 is banana", "2 is orange"]);
  });

  it("should work with a mix of strings and numbers", function() {
    expect(challenge.addIndex(['My', 1, 'number'])).to.eql(["0 is My", "1 is 1", "2 is number"]);
  });
});


