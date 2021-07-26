const testWords = ["hello", "world", "lighthouse"];
const testNums = [1, 2, 3];
const testNumString = ["1", "2", "3"];

const without = function(Arr1, Arr2) {
  let newArray = [];
  let arrayStatus = true;
  for (let i = 0; i < Arr1.length; i++) {
    for (let x = 0; x < Arr2.length; x++) {
      if (Arr1[i] !== Arr2[x]){
        arrayStatus = true;
      } else {
        arrayStatus = false;
      }
    };

    if (arrayStatus) {
      newArray.push(Arr1[i]);
    }
  };

  console.log(newArray);
}

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

without(testWords, ["lighthouse"]);
without(testNums, [1]);
without(testNumString, [1, 2, "3"]);

assertArraysEqual(testWords, ["hello", "world", "lighthouse"]);
assertArraysEqual(testNums, [1, 2, 3]);
assertArraysEqual(testNumString, ["1", "2", "3"]);