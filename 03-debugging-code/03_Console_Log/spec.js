var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("add", function() {
  it("sums the two numbers", function() {
    expect(challenge.add(1,2)).to.equal(3);
  });
});