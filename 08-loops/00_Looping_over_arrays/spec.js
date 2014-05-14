var assert = require('assert');
var solution = require('./challenge');

describe("sumNumbers", function() {
  it("sums consecutive numbers", function() {
    assert.equal(6, solution.sumNumbers([1,2,3]));
  });

  it("sums random numbers", function() {
    assert.equal(32, solution.sumNumbers([5,23,4]));
  });

  it("can be called multiple times and return the correct result.", function() {
    assert.deepEqual(32, solution.sumNumbers([5,23,4]));
    assert.deepEqual(320, solution.sumNumbers([50,230,40]));
  });

  it("returns 0 for an empty array", function() {
    assert.deepEqual(0, solution.sumNumbers([]));
  });
});

describe("splitAndLowerCaseString", function() {
  it("should lowercase a single word", function() {
    assert.deepEqual(['test'], solution.splitAndLowerCaseString("TeST"));
  });

  it("should split and lowercase comma separated words", function() {
    assert.deepEqual(['test', 'test', 'rest'], solution.splitAndLowerCaseString("TeST,tESt,rEst"));
  });

  it("should lower case an entire string", function() {
    assert.deepEqual(["this is a test"], solution.splitAndLowerCaseString("This Is A tESt"));
  });

  it("should handle an empty string", function() {
    assert.deepEqual([''], solution.splitAndLowerCaseString(''));
  });
});


describe("addIndex", function() {
  it("adds index to an array of numbers", function() {
    inputData = [1, 2, 3];
    assert.deepEqual(["0 is 1", "1 is 2", "2 is 3"], solution.addIndex(inputData));
    // This function shouldn't modify the inputData array
    assert.deepEqual([1,2,3], inputData);
  });

  it("adds index to strings", function() {
    new_array = ["0 is apple", "1 is banana", "2 is orange"]
    assert.deepEqual(["0 is apple", "1 is banana", "2 is orange"], solution.addIndex(['apple', 'banana', 'orange']));
  });

  it("should work with a mix of strings and numbers", function() {
    assert.deepEqual(["0 is My", "1 is 1", "2 is number"], solution.addIndex(['My', 1, 'number']));
  });
});


