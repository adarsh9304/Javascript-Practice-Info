/*

call,apply and bind are methods which are used to control this context of funtion 

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person1 = { name: "Alice" };
const person2 = { name: "bob" };

greet.call(person1, "Hello", "!"); // Output: Hello, Alice!
greet.call(person2, "Hello", "!"); // Output: Hello, Bob!

*/

/*
APPLY METHOD

function greet(greeting,...arg) {
    console.log(greeting + ', ' + this.name + ' ' +arg);
  }
  
  const person = { name: 'Bob' };
  
  greet.apply(person, ['Hi', 'Hi1','Hi2']);


*/
function greet(greeting, punctuation,last) {
    console.log(greeting + ', ' + this.name + punctuation+last);
  }
  
  const person = { name: 'Charlie' };
  
  const boundGreet = greet.bind(person, 'Hey');

  
  boundGreet('!','hello'); // Output: Hey, Charlie!

  //In this example, greet.bind(person, 'Hey') creates a new function boundGreet that is permanently bound to the person object with 'Hey' as the first argument. When boundGreet is called with '!', it completes the call with the bound context and arguments.
