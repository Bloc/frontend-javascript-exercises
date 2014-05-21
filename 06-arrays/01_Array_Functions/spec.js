var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("reversePlusOne", function() {
  it("creates a new array for a short array", function() {
    expect(challenge.reversePlusOne([1,2])).to.eql([1,2,1]);
  });

  it("creates a new array for a longer array", function() {
    expect(challenge.reversePlusOne([1,2,3,4])).to.eql([1,4,3,2,1]);
  });
});

describe("plusesEverywhere", function() {
  it("returns a single plus for a short array", function() {
    expect(challenge.plusesEverywhere([1,2])).to.equal("1+2");
  });

  it("returns pluses for longer arrays", function() {
    expect(challenge.plusesEverywhere([1,2,3,4,5])).to.equal("1+2+3+4+5");
  });
});

describe("arrayQuantityPlusOne", function() {
  it("returns the number of items for a short array plus one", function() {
    expect(challenge.arrayQuantityPlusOne([1,2,3])).to.equal(4);
  });

  it("returns the number of items for a long array plus one", function() {
    expect(challenge.arrayQuantityPlusOne([1,532,23,35,52,39])).to.equal(7);
  });
});