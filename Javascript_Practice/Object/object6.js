let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      console.log( this.name );  // John
      console.log( user.name );  // Error
    }
  
  };
  
  let admin = user;
  user = null; 
  admin.sayHi();