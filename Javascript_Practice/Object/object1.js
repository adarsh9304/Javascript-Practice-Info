let user = {
    name: "John",
    age: 30
  };
  
  user['key']='Adarsh'
  
  console.log(user)

let user2={
  ...user
}
user2.key='key1'
user2.age=18

console.log(user2) // { name: 'John', age: 18, key: 'key1' }
console.log(user) // { name: 'John', age: 30, key: 'Adarsh' }

console.log(typeof new Number(0)) //object
