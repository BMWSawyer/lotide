/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

const tail = function(arr) {
  let tailArray = arr.slice(1);

  return tailArray;
};

module.exports = tail;

/*
//Test Case: Check the original array

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

*/