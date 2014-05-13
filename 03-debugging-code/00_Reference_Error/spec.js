var assert = require("assert");
require("./solution.js");

describe("hello", function(){
  it("should return 'Hello World' when passed 'World'", function(){
    assert.equal(hello("World"), "Hello World");
  });

  it("should return 'Hello Bob' when passed 'Bob'", function() {
    assert.equal(hello("Bob"), "Hello Bob");
  });
});