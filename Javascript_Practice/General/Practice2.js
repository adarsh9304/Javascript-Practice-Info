// var a=5;

// var a=6;
// function funn(){
//      a=5;
// }
// funn()
// console.log(a)

// var variable = 10;
// (()=>{
//    console.log(variable);   // undefined
// //    var variable = 20;
// //    console.log(variable);   // 20
// })();

// // console.log(variable);
// // var variable = 30;

// var a=6;
// {
//     console.log(a)
// // }

// a=6;
// var a=7;
// console.log(a);

// var variable = 10;
// (()=>{
//    variable_3 = 35;
//    console.log(variable_3);
//    var variable_3 = 45;
//    variable_2 = 15;
//    console.log(variable);   // 20
// })();

// console.log(variable_2);
// console.log(variable_3);
// var variable=30;

// function anotherCaller() {
//     console.log(`${this.caller} called, too!`);
//   }
  
//   const call = {
//     caller: "mom", 
//     anotherCaller: anotherCaller,
//     says: function() {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
//   };
  
//   console.log(call.anotherCaller());
  
console.log("start")

const generatePromise = new Promise((resolve, reject) => {
    console.log('Inside promise')
    setTimeout(function timeoutCb() {
        resolve("resolve")
        console.log('Inside setTimeout')
    }, 1000)
})

generatePromise.then(function promiseCb(data) {
    console.log(data)
    return data
})


console.log("end")