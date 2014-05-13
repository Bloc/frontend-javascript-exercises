var assert    = require("assert");
var challenge = require("./challenge.js");

describe("favorite_number", function() {
  it("should return 'Too low' if the guess is low", function() {
    assert.equal(challenge.favorite_number(10, 1), "Too low");
  });

  it("should return 'Too high' if the guess is high", function() {
    assert.equal(challenge.favorite_number(5, 11), "Too high");
  });

  it("should return 'You got it!' if the guess is right", function() {
    assert.equal(challenge.favorite_number(11, 11), "You got it!");
  });
});