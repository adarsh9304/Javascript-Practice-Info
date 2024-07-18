/*
REST parameter

A function can be called with any number of arguments, no matter how it is defined.

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6


The rest parameters must be at the end



But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

*/





/*

SPREAD OPERATOR

let arr = [3, 5, 1];
console.log( Math.max(arr) ); // NaN

let arr = [3, 5, 1];
console.log( Math.max(...arr) ); // 5


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25


let str = "Hello";
console.log( [...str] ); // H,e,l,l,o



Rest parameters are used to create functions that accept any number of arguments.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.
*/