var assert = require("assert");
// This gets the "exported" variables.
//  - Any function/variable defined in solution.js needs to be exported.
//  - It becomes available through the object returned by the `require` statement.
solution = require("./solution");

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
