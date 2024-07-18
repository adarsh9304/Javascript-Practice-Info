/*
ARRAY


let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr.length ); // 3


let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]



let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr ); // "I", "study", "complex", "language", "JavaScript"



let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

*/

/*

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });


arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.includes(item, from)  looks for item starting from index from, returns true if found.


let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

console.log(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3

*/



/*
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths)



let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

console.log( arr );  // 1, 15, 2

Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.


to Solve above:


function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

console.log(arr);  // 1, 2, 15

OR USE : arr.sort( (a, b) => a - b );

*/




/*
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');
for (let name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

let str = "test";
console.log( str.split('') ); // t,e,s,t


let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using ;
console.log( str ); // Bilbo;Gandalf;Nazgul



let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);


console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

*/



/*

PRACTICE:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

*/

//sort by age object
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);