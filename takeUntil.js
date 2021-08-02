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


const takeUntil = function(array, callback) {
  
  for (let i = 0; i < array.length; i++) {

    const startPoint = 0;
    let endPoint;
   
    if (callback(array[i])) {
      endPoint = i;
      return array.slice(startPoint, endPoint);
    } 
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedOutput1 = [ 1, 2, 5, 7, 2 ];

assertArraysEqual(results1, expectedOutput1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedOutput2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results2, expectedOutput2);