(function(){
    var a=b=3;
})();

console.log(typeof a !== 'undefined');
console.log(typeof b !== 'undefined');

//false
//true

// b is not declared , so it will go into window scope , a is in function scope