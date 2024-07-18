function isPass(){
    console.log('inside ispass');
    return 'pass'
}
function isTopper(){
    console.log('inside isTopper');
    return 'topper'
}

const msg=isPass() && isTopper();

console.log('message ', msg);



/*

const a = (1,2,3,4);

console.log('a=',a) // 4

*/




/*

let {x,x:y}={x:2};

console.log('x= ',x);
console.log('y= ',y)

*/