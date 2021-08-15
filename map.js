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


const words = ['ground', 'control', 'to', 'major', 'tom'];
const numbers = ['123', '456', '789', '987', '654', '321'];
const wordsAndNums = ['ground', '456', 'to', '987', 'tom', '321'];


const map = function(array, callback) {
  const results = [];

  for (item of array) {
    results.push(callback(item)); 
  }

  return results;
};

module.exports = map;

const test1 = map(words, word => word[0]);
const test2 = map(numbers, number => number[0]);
const test3 = map(wordsAndNums, WordAndNum => WordAndNum[0]);

const expectedOutput1 = [ 'g', 'c', 't', 'm', 't' ];
const expectedOutput2 = [ '1', '4', '7', '9', '6', '3' ];
const expectedOutput3 = [ 'g', '4', 't', '9', 't', '3' ];

assertArraysEqual(test1, expectedOutput1);
assertArraysEqual(test2, expectedOutput2);
assertArraysEqual(test3, expectedOutput3);