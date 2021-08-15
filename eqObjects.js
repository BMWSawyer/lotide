/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
*/
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let matchingObjects;
  const lengOfObj1 = Object.keys(object1).length;
  const lengOfObj2 = Object.keys(object2).length;

  if (lengOfObj1 !== lengOfObj2){
    return false;
  }
  
  for (const item in object1) {
      
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      matchingObjects = eqArrays(object1[item], object2[item]);
    } else {
        
      if (object1[item] === object2[item]) {
        matchingObjects = true;
      }
      
    }
    
    if (matchingObjects === false){
      return false;
    }
  
  } 

  return matchingObjects;

};

module.exports = eqObjects;

//const ab = {a: "1", b: "2"};
//const ba = {b: "2", a: "1"};
//const abc = {a: "1", b: "2", c: "3"};

//const test1 = eqObjects(ab, ba);
//const test2 = eqObjects(ab, abc);

//console.log(test1);
//console.log(test2);
//assertEqual(test1, true);
//assertEqual(test2, false);



const cd = {d: ["2", 3], c: "1"};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {d: ["2", 3, 4], c: "1"};

const test3 = eqObjects(cd, dc);
const test4 = eqObjects(cd, cd2);

//console.log(test3);
//console.log(test4);
assertEqual(test3, true);
assertEqual(test4, false);