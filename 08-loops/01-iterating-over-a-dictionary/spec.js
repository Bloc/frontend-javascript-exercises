assert = require('assert');
solution = require('./challenge');

var hasElements = function(collection, elements) {
  for (var j = 0; j < elements.length; j++) {
    var foundElem = false;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] == elements[j]) {
        foundElem = true;
        break;
      }
    }

    if (!foundElem) {
      return false;
    }
  }
  return true;
};


describe("getKeys", function() {
  it("should return an array of all the keys", function() {
    hash = {name: "Rob", age: 101};
    array = ["name", "age"];
    solutionOutput = solution.getKeys(hash);

    assert.equal(2, solutionOutput.length)
    assert(hasElements(solutionOutput, array), "There is a mismatch between the elements you returned and the expected output");
  });

  it("should return an empty array when the dictionary is empty", function() {
    assert.deepEqual([], solution.getKeys({}));
  });
});

describe("getValues", function() {
  it("should return an array of all the keys", function() {
    hash = {name: "Rob", age: 101};
    array = ["Rob", 101];
    solutionOutput = solution.getValues(hash);

    assert.equal(2, solutionOutput.length)
    assert(hasElements(solutionOutput, array), "There is a mismatch between the elements you returned and the expected output");
  });

  it("should return an empty array when the dictionary is empty", function() {
    assert.deepEqual([], solution.getValues({}));
  });
});

describe("dictionaryToArray", function() {

  it("should convert a hash into an array of strings", function() {
    hash = { name: "Bob", age: 34 }
    array = [ "name is Bob", "age is 34" ]

    solutionOutput = solution.dictionaryToArray(hash);
    assert.equal(2, solutionOutput.length)
    assert(hasElements(solutionOutput, array), "There is a mismatch between the elements you returned and the expected output");
  });

  it("returns array for longer hash", function() {
    hash = { name: "Joe", age: 34, sex: 'male' }
    array = [ "name is Joe", "age is 34", "sex is male" ]
    solutionOutput = solution.dictionaryToArray(hash);

    assert.equal(3, solutionOutput.length)
    assert(hasElements(solutionOutput, array), "There is a mismatch between the elements you returned and the expected output");
  });

  it("returns an empty array when the hash is empty", function() {
    assert.deepEqual([], solution.dictionaryToArray([]));
  });
});

