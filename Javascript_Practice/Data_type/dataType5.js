/*
Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.


Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map, to transform these key/value pairs.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.



function count(obj) {
  return Object.keys(obj).length;
}


let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2

*/