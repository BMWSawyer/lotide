const assert = require('chai').assert;
const tail = require('../tail');
//const assertEqual = require('../assertEqual');

/*
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words));
assertEqual(words.length, 3);
*/

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [4, 6, 8, 10, 12] for [2, 4, 6, 8, 10, 12]", () => {
    assert.deepEqual(tail([2, 4, 6, 8, 10, 12]), [4, 6, 8, 10, 12]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

});