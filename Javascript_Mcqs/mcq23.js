const obj={};
let key='constructor';

if(key in obj){
    console.log('Key is found');
}
else console.log('Key is Not found');

// in operator : check in the property if not found then it goes to prototype chaining and in prototype there is constructor key
// to fix this we have to use hasOwn