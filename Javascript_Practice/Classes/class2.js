
/*

PRIVATE

Private members are accessible only within the class they are defined. They are declared using the # prefix.
Accessibility:
Accessible inside the class.
Not accessible outside the class.
Not accessible by child classes (subclasses).

class ObjectCreator {
    #meaningOfLife;

    constructor(name) {
        this.#meaningOfLife = 42;
    }

    returnMeaningOfLife() {
        return this.#meaningOfLife;
    }

    #returnAMessage() {
        return "You will do great things in life";
    }
}

const myObject = new ObjectCreator("Parwinder");
console.log(myObject.returnMeaningOfLife()); // 42
console.log(myObject["#meaningOfLife"]); // undefined
console.log(myObject.#meaningOfLife); // SyntaxError
console.log(myObject.#returnAMessage); // SyntaxError

*/


/*
PROTECTED

The only way that I can think of doing this is by using a class that has a getter for a property without a setter. 

Accessible inside the class.
Accessible by child classes (subclasses) when using the underscore convention.
Not directly accessible from outside the class when using closures and WeakMaps.

class NameGenerator {
    _name;

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let nameGenerator = new NameGenerator("John");
console.log(`My name is ${nameGenerator.name}`); // My name is John
nameGenerator.name = "Jane"; // Cannot assign to 'name' because it is a read-only property


*/