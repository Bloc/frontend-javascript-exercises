var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("favorite_number", function() {
  it("should return 'Too low' if the guess is low", function() {
    expect(challenge.favorite_number(10, 1)).to.eql("Too low");
  });

  it("should return 'Too high' if the guess is high", function() {
    expect(challenge.favorite_number(5, 11)).to.eql("Too high");
  });

  it("should return 'You got it!' if the guess is right", function() {
    expect(challenge.favorite_number(11, 11)).to.eql("You got it!");
  });
});