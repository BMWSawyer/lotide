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

const middle = function(sampleArr) {
  let middleArr = [];
  let middleIndex = Math.floor((sampleArr.length - 1) / 2);

  if (sampleArr.length >= 3) {
    
    if (sampleArr.length % 2 === 0) {
      
      for (let i = middleIndex; i <= middleIndex + 1; i++) {
        middleArr.push(sampleArr[i]);
      }
      return middleArr;
    
    } else {
      middleArr.push(sampleArr[middleIndex]);
      return middleArr;
    
    }
  
  } else {
    return middleArr;
  }
}

module.exports = middle;

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