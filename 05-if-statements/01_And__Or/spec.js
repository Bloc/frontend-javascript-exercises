var assert    = require("assert");
var challenge = require("./challenge.js");

describe("lock", function() {
  it("should return unlocked for 3258", function() {
    assert.equal(challenge.lock(3, 2, 5, 8), 'unlocked');
  });

  it("should return locked for 1111", function() {
    assert.equal(challenge.lock(1, 1, 1, 1), 'locked');
  });

  it("should return unlocked for other valid combinations", function() {
    assert.equal(challenge.lock(3, 2, 5, 8), 'unlocked');
    assert.equal(challenge.lock(5, 2, 5, 0), 'unlocked');
    assert.equal(challenge.lock(5, 2, 6, 8), 'unlocked');
    assert.equal(challenge.lock(7, 2, 5, 8), 'unlocked');
    assert.equal(challenge.lock(7, 2, 6, 9), 'unlocked');
  });
});