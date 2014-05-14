var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("helloWorld", function() {
  it("is defined", function() {
    expect(challenge.helloWorld).to.exist
  });

  it("returns 'Hello World'", function () {
    expect(challenge.helloWorld()).to.equal("Hello World");
  });
});