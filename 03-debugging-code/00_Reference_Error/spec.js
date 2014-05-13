var assert    = require("assert");
var challenge = require("./challenge.js");

describe("hello", function(){
  it("should return 'Hello World' when passed 'World'", function(){
    assert.equal(challenge.hello("World"), "Hello World");
  });

  it("should return 'Hello Bob' when passed 'Bob'", function() {
    assert.equal(challenge.hello("Bob"), "Hello Bob");
  });
});