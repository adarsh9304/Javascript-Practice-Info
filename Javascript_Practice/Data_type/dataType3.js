/*

let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }

  */



/*

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

*/


/*

let obj={
    0: "Hello",
    1: "World",
    length: 2
}

for(let prop of obj){
    console.log(prop) // TypeError: obj is not iterable
}


Why Use Symbol.iterator?
Iterating Over Values Directly: .

Custom Iteration Logic: You can define custom logic for iteration, such as skipping certain elements, iterating in a specific order, or handling more complex data structures like linked lists, trees, or paginated data.

Compatibility with for...of and Spread Syntax: 

Standard Protocol: 


*/





/*

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

let keys = Array.from(map.keys());

keys.push("more");


*/
