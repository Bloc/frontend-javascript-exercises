var assert    = require("assert");
var challenge = require("./challenge.js");  

describe("canIGet", function() {
  it("returns true if user wants a computer and has $1,000", function() {
    assert.equal(challenge.canIGet("computer", 1100), true);
  });

  it("returns false for a computer if they don't have $1,000", function() {
    assert.equal(challenge.canIGet("computer", 900), false);
  });

  it("returns true for a iPad if they have $500", function() {
    assert.equal(challenge.canIGet("ipad", 500), true);
  });

  it("returns false for a iPad if they have less than $500", function() {
    assert.equal(challenge.canIGet("ipad", 499), false);
  });
});