// this property difference

/*

//Normal functions have their own arguments object, 
function normalFunction() {
    console.log(arguments);
}

normalFunction(1, 2, 3); // [1, 2, 3]

let arrowFunction = (...args) => {
    console.log(args);
};

arrowFunction(1, 2, 3); // [1, 2, 3]

*/




/*
//new keyword

function Person(name) {
    this.name = name;
}

let person = new Person('John');
console.log(person.name); // John

let Person = (name) => {
    this.name = name;
};

let person = new Person('John'); // TypeError: Person is not a constructor

*/



