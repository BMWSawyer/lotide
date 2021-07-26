const assertArraysEqual = function(Arr1, Arr2) {
  
  if (Arr1.length === Arr2.length){
    let matchResult = true;
    for (let i = 0; i < Arr1.length; i++) {
      if (Arr1[i] === Arr2[i]){
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
  
  } else {
    console.log(`❌❌ Assertion Failed: ${Arr1} !== ${Arr2}`);  
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["4", "5", "6"], ["4", "5", "6"]);
assertArraysEqual(["4", "5", "6"], ["4", "5", 6]);
