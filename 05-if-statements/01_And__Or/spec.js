var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("lock", function() {
  it("should return unlocked for 3258", function() {
    expect(challenge.lock(3, 2, 5, 8)).to.equal('unlocked');
  });

  it("should return locked for 1111", function() {
    expect(challenge.lock(1, 1, 1, 1)).to.equal('locked');
  });

  it("should return unlocked for other valid combinations", function() {
    expect(challenge.lock(3, 2, 5, 8)).to.equal('unlocked');
    expect(challenge.lock(5, 2, 5, 0)).to.equal('unlocked');
    expect(challenge.lock(5, 2, 6, 8)).to.equal('unlocked');
    expect(challenge.lock(7, 2, 5, 8)).to.equal('unlocked');
    expect(challenge.lock(7, 2, 6, 9)).to.equal('unlocked');
  });
});