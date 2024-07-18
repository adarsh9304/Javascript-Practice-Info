/*

let a={name:'adarsh'};
let b={};

Object.assign(b,a);
b.name='adarsh2'
console.log(a)
console.log(b)

*/

/*

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
clone.sizes.height=25  
console.log(clone)
console.log(user)

*/



/*

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true

*/