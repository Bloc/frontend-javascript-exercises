var expect = require('chai').expect;
var challenge = require('./challenge');

describe("inBetween", function() {
  it("should be defined", function() {
    expect(challenge.inBetween).to.exist;
  });

  it("should return true if the middle number is in between the lower and upper number", function() {
    expect(challenge.inBetween(1,3,5)).to.be.true
  });

  it("should return false if middle is not in between lower and upper", function() {
    expect(challenge.inBetween(3,1,5)).to.be.false;
  });
});

describe("equalStrings", function() {
  it("should be defined", function() {
    expect(challenge.equalStrings).to.exist;
  });

  it("should return true if strings are equal", function() {
    expect(challenge.equalStrings('bloc', 'bloc')).to.be.true
  });

  it("should return false if strings aren't equal", function () {
    expect(challenge.equalStrings('dan', 'mark')).to.be.false
  });
});

describe("notEqual", function() {
  it("should be defined", function() {
    expect(challenge.notEqual).to.exist;
  });

  it("should return true if the two arguments are not the same value or type", function() {
    expect(challenge.notEqual(1,'1')).to.be.true;
  });

  it("should return false if the two arguments are the same type and value", function () {
    expect(challenge.notEqual('bloc','bloc')).to.be.false;
  });
});

describe("outsideRanges", function() {
  it("should be defined", function() {
    expect(challenge.outsideRanges).to.exist;
  });

  it("should return true for random numbers outside of ranges", function() {
    expect(challenge.outsideRanges(0)).to.be.true;
    expect(challenge.outsideRanges(7)).to.be.true;
    expect(challenge.outsideRanges(-100)).to.be.true;
    expect(challenge.outsideRanges(100)).to.be.true;
    expect(challenge.outsideRanges(35)).to.be.true;
  });

  it("should return true for boundary numbers outside all ranges", function() {
    expect(challenge.outsideRanges(1)).to.be.true;
    expect(challenge.outsideRanges(6)).to.be.true;
    expect(challenge.outsideRanges(9)).to.be.true;
    expect(challenge.outsideRanges(21)).to.be.true;
    expect(challenge.outsideRanges(42)).to.be.true;
  });

  it("should return false for boundary numbers", function() {
    expect(challenge.outsideRanges(10)).to.be.false;
    expect(challenge.outsideRanges(20)).to.be.false;
    expect(challenge.outsideRanges(75)).to.be.false;
  });

  it("should return false for numbers inside range", function() { 
    expect(challenge.outsideRanges(14)).to.be.false; 
    expect(challenge.outsideRanges(46)).to.be.false; 
    expect(challenge.outsideRanges(3)).to.be.false; 
  }); 
});

describe("nameAndPrice", function() {
  it("should be defined", function() {
    expect(challenge.nameAndPrice).to.exist;
  });

  it("should return true for our papers and prices greater than or equal to 1.", function() {
    expect(challenge.nameAndPrice("NYTimes", 1)).to.be.true;
    expect(challenge.nameAndPrice("LATimes", 1)).to.be.true;
  });

  it("should return false for LATimes and price less than 1.", function() {
    expect(challenge.nameAndPrice("LATimes", .5)).to.be.false;
  });

  it("should return false for NYTimes and price less than 1.", function() {
    expect(challenge.nameAndPrice("NYTimes", .5)).to.be.false;
  });

  it("should return false for Chicago Tribune and any price.", function() {
    expect(challenge.nameAndPrice("Chicago Tribune", 1)).to.be.false;
    expect(challenge.nameAndPrice("Chicago Tribune", 0.5)).to.be.false;
  });
});
