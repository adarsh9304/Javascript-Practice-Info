// console.log(NaN==NaN)  false
// console.log(null==undefined) true
// console.log(null===undefined) false
// console.log(0==false) true
// console.log(typeof null) object
// console.log(typeof null=="object")  true
// console.log(typeof function(){} == "function") true

// bind return function , so if we console this then it gives us function

const arr=[];
const arr1=[1,2,3];

if(arr){
    console.log('inside')
}
console.log('here')


// function fun(){
//     return 5;
// }
// console.log(fun) //[Function: fun]





// We can copy a function to another variable:
// function sayHi() {   // (1) create
//   alert( "Hello" );
// }

// let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)

