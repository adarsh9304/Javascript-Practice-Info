var a='js1'

function fun(){
    a='js2';
    return;
    function a(){}  
    // function ne vadhare priority
    // in js function will treat as variable
}
fun();
console.log(a);  // js1

// if we remove function a(){} in above it will give use output js2

/*
 function fun(){};
 fun='javascript'
 console.log(fun) javascript
 
*/