const greet = () => console.log('Hello!');
greet(); // Output: Hello!

const square = x => x * x;
console.log(square(4)); // Output: 16

const add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8

const getObject = () => ({ key: 'value' });
(() => console.log('IIFE Arrow Function'))();

const obj = {
    value: 10,
    increment: () => {
        return this.value + 1; // `this` is not `obj`
    }
};
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
