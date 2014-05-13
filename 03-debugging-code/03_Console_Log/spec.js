var assert    = require("assert");
var challenge = require("./challenge.js");

describe("add", function() {
  it("sums the two numbers", function() {
    assert.equal(challenge.add(1,2), 3);
  });
});