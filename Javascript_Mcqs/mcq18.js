if(0){
    function getdata(){
        console.log(5)
    };
}
console.log(getdata)  // undefined

// function scope => parent

// when we declare fun in block then js will add the function name to the outer scope but it will attach the function body whenever the execution control come into block , if we write 1 then it will give us the function body