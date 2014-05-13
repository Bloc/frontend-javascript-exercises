var assert    = require("assert");
var challenge = require("./challenge.js");

describe("hello", function() {
  it("returns a full greeting for Abraham Lincoln", function() {
    assert.equal(challenge.hello("Abraham", "Lincoln"), "Hello Abraham Lincoln");
  });

  it("returns a full greeting for George Washington", function() {
    assert.equal(challenge.hello("George", "Washington"), "Hello George Washington");
  });
});