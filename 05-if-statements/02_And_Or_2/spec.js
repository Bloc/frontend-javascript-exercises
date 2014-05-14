var expect    = require("chai").expect;
var challenge = require("./challenge.js");  

describe("canIGet", function() {
  it("returns true if user wants a computer and has $1,000", function() {
    expect(challenge.canIGet("computer", 1100)).to.equal(true);
  });

  it("returns false for a computer if they don't have $1,000", function() {
    expect(challenge.canIGet("computer", 900)).to.equal(false);
  });

  it("returns true for a iPad if they have $500", function() {
    expect(challenge.canIGet("ipad", 500)).to.equal(true);
  });

  it("returns false for a iPad if they have less than $500", function() {
    expect(challenge.canIGet("ipad", 499)).to.equal(false);
  });
});