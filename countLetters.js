const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(senToCount) {
  const letterCount = {};
  const newSentence = senToCount.split(" ").join("").toLowerCase();

  for (const letters of newSentence) {
    //console.log(letters);

    if (letterCount[letters]) {
      letterCount[letters] += 1;
    } else {
      letterCount[letters] = 1;
    }
  }

  return letterCount;

}

console.log(countLetters("Lighthouse Labs In The House"));
console.log(countLetters("this is the second test"));

/*

let test1 = countLetters("Lighthouse Labs In The House")
let test2 = countLetters("this is the second test")

const expectedOutput1 = {  
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

let expectedOutput2 = {

}

console.log(assertEqual(test1, expectedOutput1));
console.log(assertEqual(test2, expectedOutput2));
*/