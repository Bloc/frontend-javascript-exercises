var assert    = require("assert");
var challenge = require("./challenge.js");

describe("hello", function() {
  it("should return 'Hello World'", function() {
    assert.equal(challenge.hello(), "Hello World");
  });
});