var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("hello", function() {
  it("should be defined", function() {
    expect(challenge.hello).to.exist;
  });

  it("should return 'Hello first name last name'", function() {
    expect(challenge.hello("Steve", "Jobs")).to.equal("Hello Steve Jobs");
  });
});
