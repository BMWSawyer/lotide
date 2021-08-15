/*
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

const assertArraysEqual = function(Arr1, Arr2) {
  if (eqArrays(Arr1, Arr2) === true) {
    console.log(`✅✅ Assertion Paased: ${Arr1} === ${Arr2}`)
  } else {
    console.log(`❌❌ Assertion Failed: ${Arr1} !== ${Arr2}`)
  }
}
*/
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(Arr1) {
  let flattenedArray = [];
  
  for (let i = 0; i < Arr1.length; i++) {
    if (Array.isArray(Arr1[i])){
      for (let x = 0; x < Arr1[i].length; x++) {
        flattenedArray.push(Arr1[i][x]);
      }
    } else {
      flattenedArray.push(Arr1[i]);
    }
  };

  return flattenedArray;
}

module.exports = flatten;

let result1 = flatten([1, 2, [3, 4], 5, [6]])
let result2 = flatten([[2, 4, 6], 8, [10, 12]])
let result3 = flatten([1, [3, 5, 7], 9, 11])

let expectedOutput1 = [1, 2, 3, 4, 5, 6];
let expectedOutput2 = [2, 4, 6, 8, 10, 12];
let expectedOutput3 = [1, 3, 5, 7, 9, 11];

assertArraysEqual(result1, expectedOutput1);
assertArraysEqual(result2, expectedOutput2);
assertArraysEqual(result3, expectedOutput3);