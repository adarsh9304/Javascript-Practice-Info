var variable = 10;
(()=>{
   console.log(variable);   // undefined
   var variable = 20;
   console.log(variable);   // 20
})();

console.log(variable);
var variable = 30;

// var variable;
// variable = 10;
// (()=>{
//    var variable;
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// console.log(variable);
// variable = 30;