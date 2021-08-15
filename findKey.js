/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/
const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (const item in object) {

    if (callback(object[item])) {
      return item;
    }
  }
}

module.exports = findKey;

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);


const test2 = findKey({
  "Bob's Bakery": { pies: 1 },
  "Billy's Bake House": { pies: 3 },
  "Barb's Pie Shack": { pies: 5 },
  "Brent's Dessert Store": { pies: 2 },
  "Bobby's Sweet Shop": { pies: 6 },
}, x => x.pies === 4);



const test3 = findKey({
  "Messi": { goals: 20 },
  "Rooney":   { goals: 18 },
  "Toti":      { goals: 16 },
  "Pirlo":   { goals: 14 },
  "Ronaldo":       { goals: 21 },
  "Iniesta":  { goals: 13 }
}, x => x.goals === 21);


assertEqual(test1, "noma");
assertEqual(test2, undefined);
assertEqual(test3, "Ronaldo");