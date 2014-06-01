var expect = require('chai').expect;
var challenge = require('./challenge');
var _ = require('underscore');

describe("stream", function() {
  it("should be defined", function() {
    expect(challenge.stream).to.exist;
  });

  it("shouldn't call actionFn when conditionalFn returns false immediately", function() {
    var conditionalFn = function() { return false; };
    var actionFn = function() { throw new Error("actionFn shouldn't have been called"); };
    expect(challenge.stream(conditionalFn, actionFn)).to.not.throw;
  });

  it("should call actionFn once conditionalFn when returns true once", function() {
    var flag = true;
    var array = [];
    var conditionalFn = function() {
      var oldFlag = flag;
      flag = !flag;
      return oldFlag; 
    };
    var actionFn = function() {
      array.push('1');
    };
    var result = challenge.stream(conditionalFn, actionFn);
    expect(array).to.have.length(1, "actionFn should have been called once.")
  });

  it("should call actionFn 10 times ", function() {
    var counter = 10;
    var array = [];
    var conditionalFn = function() {
      counter--;
      return counter >= 0;
    };
    var actionFn = function() {
      array.push('1');
    };
    var result = challenge.stream(conditionalFn, actionFn);
    expect(array).to.have.length(10, "actionFn should have been called 10 times.")
  });
});


describe("sumNumbers", function() {
  it("should be defined", function() {
    expect(challenge.sumNumbers).to.exist;
  });

  it("sums consecutive numbers", function() {
    expect(challenge.sumNumbers([1,2,3])).to.eql(6);
  });

  it("sums random numbers", function() {
    expect(challenge.sumNumbers([5, 23, 4])).to.eql(32);
  });

  it("can be called multiple times and return the correct result.", function() {
    expect(challenge.sumNumbers([5, 23, 4])).to.eql(32);
    expect(challenge.sumNumbers([5, 23, 4, 1])).to.eql(33);
  });

  it("returns 0 for an empty array", function() {
    expect(challenge.sumNumbers([])).to.eql(0);
  });
});
