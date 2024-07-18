/*

When new User("John") is called:
A new object is created.
The constructor runs with the given argument and assigns it to this.name.

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  }
  
  let user = new User("John");
  user.sayHi();


  What class User {...} construct really does is:

Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
Stores class methods, such as sayHi, in User.prototype.

  */




/*

The important difference of class fields is that they are set on individual objects, not User.prototype:

class User {
  name = "John";
}

let user = new User();
console.log(user.name); // John
console.log(User.prototype.name); // undefined


*/

/*
//typeof Animal is function

class Animal{

    constructor(name){
        this.name=name
    }
    getName(){
        console.log(this.name)
    }
    setName(name){
        this.name=name
    }
}

let animal1=new Animal('horse');
animal1.getName()

*/


class Animal {
	constructor(legs) {
		this.legs = legs;
	}

	displayLegs() {
		console.log(`I have ${this.legs} legs.`);
	}
}

class Dog extends Animal {
	constructor(...args) {
		super(...args);
		this.breed = args[0] || 'Unknown Breed';
	}

	bark() {
		console.log('Woof, woof!');
	}

	displayInfo() {
		console.log(`I am a ${this.breed}
		with ${this.legs} legs.`);
	}
}

// Creating an instance
const dog = new Dog(4, 'Golden Retriever');

// Calling methods
dog.displayLegs();
dog.bark();
dog.displayInfo();
