const assert = require('chai').assert;
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

/*
let result1 = middle([1, 2, 3, 4, 5]);
let result2 = middle([2, 4, 6, 8, 10, 12]);
let result3 = middle([1, 3, 5, 7, 9, 11, 13]);
let result4 = middle([1]);
let result5 = middle([1, 2]);

let expectedOutput1 = [3];
let expectedOutput2 = [6, 8];
let expectedOutput3 = [7];
let expectedOutput4 = [];
let expectedOutput5 = [];

assertArraysEqual(result1, expectedOutput1);
assertArraysEqual(result2, expectedOutput2);
assertArraysEqual(result3, expectedOutput3);
assertArraysEqual(result4, expectedOutput4);
assertArraysEqual(result5, expectedOutput5);
*/

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [6, 8] for [2, 4, 6, 8, 10, 12]", () => {
    assert.deepEqual(middle([2, 4, 6, 8, 10, 12]), [6, 8]);
  });

  it("returns [7] for [1, 3, 5, 7, 9, 11, 13]", () => {
    assert.deepEqual(middle([1, 3, 5, 7, 9, 11, 13]), [7]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});