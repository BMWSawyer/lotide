# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bmwsawyer/lotide`

**Require it:**

`const _ = require('@bmwsawyer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: A function for asserting that two arrays are equal.
* `function2(assertEqual)`: A function to compare primitive types (like numbers and strings) for a perfect match.
* `function3(assertObjectsEqual)`: A function for asserting that two objects are equal.
* `function4(countLetters)`: A function that takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `function5(countOnly)`: A function that takes in a collection of items (strings) and returns a count for a specific subset of those items.
* `function6(eqArrays)`: A function that can compare two arrays for a perfect match.
* `function7(eqObjects)`: A function that can compare two objects for a perfect match.
* `function8(findKey)`: A function that takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `function9(findKeyByValue)`: A function that takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `function10(flatten)`: A function that given an array with other arrays inside, it can flatten it into a single-level array.
* `function11(head)`: A function for arrays to retrieve the first element from the array. This is often referred to as the "head" of the array.
* `function12(letterPositions)`: A function that will return all the indices (zero-based positions) in the string where each character is found.
* `function13(map)`: A function that takes in two arguments and returns a new array based on the results of the callback function.
* `function14(middle)`: A function that takes in an array and returns the value of the middle index of the array. If the array length is even then it returns the values of the two middle indecies. If given an empty array or an array with one or two values it returns an emtpty array.
* `function15(tail)`: A function for arrays to retrieve every element except the head (first element) from the array. This is often referred to as the "tail" of the array.
* `function16(takeUntil)`: A function that takes in two parameters and returns a slice of the array with elements taken from the beginning. It keeps going until the callback function returns a truthy value.
* `function17(without)`: A function which will return a subset of a given array, removing unwanted elements. Takes in a source array and a itemsToRemove array when called.