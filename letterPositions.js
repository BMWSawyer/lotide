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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const arrLetterPosition = [];
      
      if (Array.isArray(results[sentence[i]])) {
        results[sentence[i]].push(i);
      
      } else { 
        results[sentence[i]] = arrLetterPosition;
        results[sentence[i]].push(i);
      
      }
    }
  }
  return results;
};

test1 = letterPositions("hello").e;

assertArraysEqual(test1, [1]);