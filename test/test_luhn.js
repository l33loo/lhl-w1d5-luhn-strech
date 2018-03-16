var assert = require("chai").assert;
var luhn = require("../lib/luhn");

describe("Luhn", function(){
  it("Should return true if the id number is valid", function() {
    assert.isTrue(luhn(79927398713));
  })
  it("Should return false if the id number is invalid", function() {
    assert.isFalse(luhn(79927398714));
  })
});