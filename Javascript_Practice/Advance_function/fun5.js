/*

let func = new Function ([arg1, arg2, ...argN], functionBody);


let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3


let sayHi = new Function('alert("Hello")');
sayHi(); // Hello


*/



/*
Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

let i = 1;
setInterval(function() {
  func(i++);
}, 100);

let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);


if the function always executes longer than delay ms, then the calls will happen without a pause at all.

*/