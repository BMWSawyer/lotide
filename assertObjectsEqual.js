const eqObjects = function(object1, object2) {
  let matchingObjects;
  const lengOfObj1 = Object.keys(object1).length;
  const lengOfObj2 = Object.keys(object2).length;

  if (lengOfObj1 === lengOfObj2){

    for (const item in object1) {
      
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        matchingObjects = eqArrays(object1[item], object2[item]);
      } else {
        
        if (object1[item] === object2[item]) {
          matchingObjects = true;
        }
      
      }
    } 
  } else {
    matchingObjects = false;
  }

  return matchingObjects;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅ Assertion Paased: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};


assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
