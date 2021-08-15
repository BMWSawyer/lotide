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


const without = function(Arr1, Arr2) {
  let newArray = [];
  let arrayStatus;
  
  for (let i = 0; i < Arr1.length; i++) {
    arrayStatus = true;
    
    for (let x = 0; x < Arr2.length; x++) {
      if (Arr1[i] === Arr2[x]){
        arrayStatus = false;
      }
    };

    if (arrayStatus) {
      newArray.push(Arr1[i]);
    }
  };

  return newArray;
}

module.exports = without;

const testWords = ["hello", "world", "lighthouse"];
const testNums = [1, 2, 3];
const testNumString = ["1", "2", "3"];

let result1 = without(testWords, ["lighthouse"]);
let result2 = without(testNums, [1]);
let result3 = without(testNumString, [1, 2, "3"]);

assertArraysEqual(result1, ["hello", "world"]);

assertArraysEqual(testWords, ["hello", "world", "lighthouse"]);
assertArraysEqual(testNums, [1, 2, 3]);
assertArraysEqual(testNumString, ["1", "2", "3"]);