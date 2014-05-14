var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("hello", function() {
  it("should return 'Hello World'", function() {
    expect(challenge.hello()).to.equal("Hello World");
  });
});