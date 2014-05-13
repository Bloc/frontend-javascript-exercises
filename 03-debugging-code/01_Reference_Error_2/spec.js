var assert    = require("assert");
var challenge = require("./challenge.js");

describe("hello", function() {
  it("should return 'Hello first name last name'", function() {
    assert.equal(challenge.hello("Steve", "Jobs"), "Hello Steve Jobs");
  });
});