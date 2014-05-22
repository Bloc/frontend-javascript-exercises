var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("favoriteNumber", function() {
  it("should return 'Too low' if the guess is low", function() {
    expect(challenge.favoriteNumber(10, 1)).to.eql("Too low");
  });

  it("should return 'Too high' if the guess is high", function() {
    expect(challenge.favoriteNumber(5, 11)).to.eql("Too high");
  });

  it("should return 'You got it!' if the guess is right", function() {
    expect(challenge.favoriteNumber(11, 11)).to.eql("You got it!");
  });
});

describe("checkLock", function() {
  it("should return 'correct' for the correct example", function() {
    expect(challenge.checkLock(5, 2, 45, 1)).to.eql("correct");
  });


  it("should return 'correct' for all correct first numbers", function() {
    expect(challenge.checkLock(3, 2, 45, 1)).to.eql('correct');
    expect(challenge.checkLock(5, 2, 45, 1)).to.eql('correct');
    expect(challenge.checkLock(7, 2, 45, 1)).to.eql('correct');
  });

  it("should return 'incorrect' for the incorrect first number example", function() {
    expect(challenge.checkLock(1, 2, 45, 1)).to.eql("incorrect");
  });

  it("should return 'incorrect' for incorect second number", function() {
    expect(challenge.checkLock(5, 2, 5, 10)).to.eql("incorrect");
    expect(challenge.checkLock(5, 2, 1, 10)).to.eql("incorrect");
  });


  it("should return 'correct' for the boundary conditions of the third number", function() {
    expect(challenge.checkLock(5, 2, 5, 1)).to.eql("correct");
    expect(challenge.checkLock(5, 2, 100, 1)).to.eql("correct");
  });

  it("should return 'incorrect' for invalid third numbers", function() {
    expect(challenge.checkLock(5, 2, 4, 1)).to.eql("incorrect");
    expect(challenge.checkLock(5, 2, 101, 1)).to.eql("incorrect");
  });

  it("should return 'incorrect' for the incorrect fourth number example", function() {
    expect(challenge.checkLock(5, 2, 45, 10)).to.eql("incorrect");
  });

  it("should return 'incorrect' for the boundary conditions of the fourth number", function() {
    expect(challenge.checkLock(5, 2, 45, 20)).to.eql("incorrect");
    expect(challenge.checkLock(5, 2, 45, 9)).to.eql("incorrect");
  });
});

describe("canIGet", function() {
  it("returns the correct results for MacBook Air", function() {
    expect(challenge.canIGet("MacBook Air", 999)).to.be.true;
    expect(challenge.canIGet("MacBook Air", 1000)).to.be.true;
    expect(challenge.canIGet("MacBook Air", 998)).to.be.false;
  });

  it("returns the correct results for MacBook Pro", function() {
    expect(challenge.canIGet("MacBook Pro", 1299)).to.be.true;
    expect(challenge.canIGet("MacBook Pro", 1300)).to.be.true;
    expect(challenge.canIGet("MacBook Pro", 1298)).to.be.false;
  });

  it("returns the correct results for Mac Pro", function() {
    expect(challenge.canIGet("Mac Pro", 2499)).to.be.true;
    expect(challenge.canIGet("Mac Pro", 2500)).to.be.true;
    expect(challenge.canIGet("Mac Pro", 2498)).to.be.false;
  });

  it("returns correct results for Apple Sticker", function() {
    expect(challenge.canIGet("Apple Sticker", 1)).to.be.true;
    expect(challenge.canIGet("Apple Sticker", 2)).to.be.true;
    expect(challenge.canIGet("Apple Sticker", 0)).to.be.false;
  });

  it("returns false for non-Apple products", function() {
    expect(challenge.canIGet("Dell", 1000000)).to.be.false;
    expect(challenge.canIGet("Windows", 10000000)).to.be.false;
    expect(challenge.canIGet("Snapple", 10000000)).to.be.false;
  });
});
