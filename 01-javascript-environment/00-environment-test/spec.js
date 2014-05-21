var assert = require('assert');
var expect = require('chai').expect;
var _ = require('underscore');
var rosie = require('rosie');

describe('Environment Check', function() {
  it('should be able to find all environment dependencies', function() {
    assert.notEqual(undefined, expect);
    assert.notEqual(undefined, _);
    assert.notEqual(undefined, rosie);
  });
});
