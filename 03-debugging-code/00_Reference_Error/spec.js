var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("hello", function(){
  it("should be defined", function() {
    expect(challenge.hello).to.exist;
  });

  it("should return 'Hello World' when passed 'World'", function(){
    expect(challenge.hello("World")).to.equal("Hello World");
  });

  it("should return 'Hello Bob' when passed 'Bob'", function() {
    expect(challenge.hello("Bob")).to.equal("Hello Bob");
  });
});
