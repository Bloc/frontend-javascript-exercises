var assert    = require("assert");
var challenge = require("./challenge.js");

describe("linkTo", function() {
  it("should return a valid link for Bloc", function() {
    assert.equal(challenge.linkTo("Bloc", "http://www.bloc.io"), "<a href='http://www.bloc.io'>Bloc</a>");
  });
});
