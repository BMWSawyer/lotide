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

console.log(flatten([1, 2, [3, 4], 5, [6]]));

/*
const assertArraysEqual = function(Arr1, Arr2) {
  let matchResult = true;
  
  for (let i = 0; i < Arr1.length; i++) {
     if (Arr1[i] === Arr2[i]) {
        matchResult = true;
      } else {
        matchResult = false;
      }
    };

    if (matchResult === true) {
      console.log(`✅✅ Assertion Paased: ${Arr1} === ${Arr2}`)
    } else {
      console.log(`❌❌ Assertion Failed: ${Arr1} !== ${Arr2}`)
    }
}
*/