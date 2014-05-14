var expect = require('chai').expect;
var solution = require('./challenge');
var _ = require('underscore');

describe("sumNumbers", function() {
  it("sums consecutive numbers", function() {
    expect(solution.sumNumbers([1,2,3])).to.eql(6);
  });

  it("sums random numbers", function() {
    expect(solution.sumNumbers([5, 23, 4])).to.eql(32);
  });

  it("can be called multiple times and return the correct result.", function() {
    expect(solution.sumNumbers([5, 23, 4])).to.eql(32);
    expect(solution.sumNumbers([5, 23, 4, 1])).to.eql(33);
  });

  it("returns 0 for an empty array", function() {
    expect(solution.sumNumbers([])).to.eql(0);
  });
});

describe("splitAndLowerCaseString", function() {
  it("should lowercase a single word", function() {
    expect(solution.splitAndLowerCaseString("TeST")).to.eql(['test']);
  });

  it("should split and lowercase comma separated words", function() {
    expect(solution.splitAndLowerCaseString("TeST,tESt,rEst")).to.eql(['test', 'test', 'rest']);
  });

  it("should lower case an entire string", function() {
    expect(solution.splitAndLowerCaseString("This Is A tESt")).to.eql(["this is a test"]);
  });

  it("should handle an empty string", function() {
    expect(solution.splitAndLowerCaseString('')).to.eql(['']);
  });
});


describe("addIndex", function() {
  it("adds index to an array of numbers", function() {
    inputData = [1, 2, 3];
    expect(solution.addIndex(inputData)).to.eql(["0 is 1", "1 is 2", "2 is 3"]);
    // This function shouldn't modify the inputData array
    expect(inputData)).to.eql(["0 is 1", "1 is 2", "2 is 3"]);
  });

  it("adds index to strings", function() {
    expect(solution.addIndex(['apple', 'banana', 'orange'])).to.eql(["0 is apple", "1 is banana", "2 is orange"]);
  });

  it("should work with a mix of strings and numbers", function() {
    expect(solution.addIndex(['My', 1, 'number'])).to.eql(["0 is My", "1 is 1", "2 is number"]);
  });
});


