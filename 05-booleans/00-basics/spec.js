var expect = require('chai').expect;
var solution = require('./challenge');

describe("inBetween", function() {
  it("should return true if the middle number is in between the lower and upper number", function() {
    expect(solution.inBetween(1,3,5)).to.be.true
  });

  it("should return false if middle is not in between lower and upper", function() {
    expect(solution.inBetween(3,1,5)).to.be.false;
  });
});

describe("equalStrings", function() {
  it("should return true if strings are equal", function() {
    expect(solution.equalStrings('bloc', 'bloc')).to.be.true
  });

  it("should return false if strings aren't equal", function () {
    expect(solution.equalStrings('dan', 'mark')).to.be.false
  });
});

describe("notEqual", function() {
  it("should return true if the two arguments are not the same value or type", function() {
    expect(solution.notEqual(1,'1')).to.be.true;
  });

  it("should return false if the two arguments are the same type and value", function () {
    expect(solution.notEqual('bloc','bloc')).to.be.false;
  });
});

describe("outsideRanges", function() {
  it("should return true for random numbers outside of ranges", function() {
    expect(solution.outsideRanges(0)).to.be.true;
    expect(solution.outsideRanges(7)).to.be.true;
    expect(solution.outsideRanges(-100)).to.be.true;
    expect(solution.outsideRanges(100)).to.be.true;
    expect(solution.outsideRanges(35)).to.be.true;
  });

  it("should return true for boundary numbers outside all ranges", function() {
    expect(solution.outsideRanges(1)).to.be.true;
    expect(solution.outsideRanges(6)).to.be.true;
    expect(solution.outsideRanges(9)).to.be.true;
    expect(solution.outsideRanges(21)).to.be.true;
    expect(solution.outsideRanges(42)).to.be.true;
  });

  it("should return false for boundary numbers", function() {
    expect(solution.outsideRanges(10)).to.be.false;
    expect(solution.outsideRanges(20)).to.be.false;
    expect(solution.outsideRanges(75)).to.be.false;
  });
});

describe("nameAndPrice", function() {
  it("should return true for our papers and prices greater than or equal to 1.", function() {
    expect(solution.nameAndPrice("NYTimes", 1)).to.be.true;
    expect(solution.nameAndPrice("LATimes", 1)).to.be.true;
  });

  it("should return false for LATimes and price less than 1.", function() {
    expect(solution.nameAndPrice("LATimes", .5)).to.be.false;
  });

  it("should return false for NYTimes and price less than 1.", function() {
    expect(solution.nameAndPrice("NYTimes", .5)).to.be.false;
  });

  it("should return false for Chicago Tribune and any price.", function() {
    expect(solution.nameAndPrice("Chicago Tribune", 1)).to.be.false;
    expect(solution.nameAndPrice("Chicago Tribune", 0.5)).to.be.false;
  });
});
