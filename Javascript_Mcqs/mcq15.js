function sayHi(){
    return (()=>0)()
}
console.log(typeof sayHi()); // number

console.log(typeof typeof 1); // string

const data=[...'apple']
console.log(data);