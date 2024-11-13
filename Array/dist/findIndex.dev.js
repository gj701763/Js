"use strict";

//  Question :- find the give arr to prime number and return it's indexs
function isPrimeFirst(element) {
  // return to first touch elements 
  if (element % 2 === 0 || element < 2) {
    return false;
  }

  for (var i = 3; i <= Math.sqrt(element); i += 2) {
    if (element % i === 0) {
      return false;
    }
  }

  return true;
}

function isPrime(element) {
  ///          return to all of within array
  if (element === 2) return true;
  if (element < 2) return false;
  if (element % 2 === 0) false;

  for (var i = 3; i <= Math.sqrt(element); i += 2) {
    if (element % i === 0) {
      return false;
    }
  }

  return true;
}

var arr = [2, 11, 7, 1, 9];
var findPrime = arr.map(function (num, index) {
  return isPrime(num) ? index : -1;
}).filter(function (index) {
  return index !== -1;
});
console.log(findPrime);