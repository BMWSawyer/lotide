/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

const eqArrays = function(Arr1, Arr2) {
  if (Arr1.length === Arr2.length){
    
    for (let i = 0; i < Arr1.length; i++) {
      if (Arr1[i] !== Arr2[i]){
        return false;
      }
    };

    return true;

  } else {
    return false;
  }
}

module.exports = eqArrays;

/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [2, 3, 4]), false);
assertEqual(eqArrays([2, 3, 4], [2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([1, 3, 2], [1, 2, 3]), true);
*/