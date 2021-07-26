const eqArrays = function(Arr1, Arr2) {
  
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

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 3, 4]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["4", "5", "6"], ["4", "5", "6"]);
eqArrays(["4", "5", "6"], ["4", "5", 6]);
