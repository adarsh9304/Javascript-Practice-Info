/*
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2

*/




  /*

  function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

  */



/*
function sum(a) {

    return function(b) {

      return a + b; 
    };
  
  }
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1) ); // 4
*/




/*

even as this (remember, code blocks are ignored):

function sayHi() {
    phrase = "Hello"; // (*)
    
    if (false) {
        var phrase;
    }
    
    console.log(phrase);
}
sayHi();
*/



/*

IIFE

(function() {

  var message = "Hello";

  alert(message); // Hello

})();

*/



/*


let a=5;
console.log(a); 5
global.console.log(a)   5



*/
