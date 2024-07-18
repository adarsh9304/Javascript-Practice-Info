/*
push appends an element to the end.
shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.


let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.shift() ); // remove Apple and console.log it
console.log( fruits ); // Orange, Pear


let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
console.log( fruits ); // Apple, Orange, Pear

*/

/*

For instance, it is copied by reference:

let fruits = ["Banana"]
let arr = fruits; // copy by reference (two variables reference the same array)
console.log( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
console.log( fruits ); // Banana, Pear - 2 items now


The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast.


The ways to misuse an array:

Add a non-numeric property like arr.test = 5.
Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
Fill the array in the reverse order, like arr[1000], arr[999] and so on.

Methods push/pop run fast, while shift/unshift are slow.

*/

/*

let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  console.log( fruit );
}

 it's not good idea to use for...in
 1) non -numeric property
 2) The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. 

*/



/*

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return

So, the simplest way to clear the array is: arr.length = 0;.

*/


/*

Arrays have their own implementation of toString method that returns a comma-separated list of elements.

For instance:

let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true


console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"


console.log( [] == [] ); // false
console.log( [0] == [0] ); // false


console.log( 0 == [] ); // true
console.log('0' == [] ); // false
so the array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''.

*/

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // a,b,function(){...}

