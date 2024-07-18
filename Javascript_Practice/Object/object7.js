/*

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
   console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f']();

*/

/*

let user7 = {
    name: 'user',
    firstName: 'UserFirstName',
    fun1() {
        let outerArrow = () => {
            let innerArrow = () => {
                console.log(this.firstName); // `this` refers to `user7` object
            };
            innerArrow();
        };
        outerArrow();
    }
};

user7.fun1(); // This will log "UserFirstName"


*/

/*
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  console.log( user.ref.name );

  */



  /*

  let str = "Hello";

str.test = 5; // (*)

console.log(str.test);

//undefined (no strict mode)
// An error (strict mode).

*/