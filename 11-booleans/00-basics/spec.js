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
