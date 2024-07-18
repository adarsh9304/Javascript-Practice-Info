let fruit="stobarry"
let fruit2="banana"

let beg={
    [fruit]:10,
    [fruit]:12,
    [fruit2+' hello']:15
}

beg['fruit']='apple' // { stobarry: 12, 'banana': 15, fruit: 'apple' }

beg['stobarry']='tomato' // { stobarry: 'tomato', banana: 15, fruit: 'apple' }

// console.log(beg)

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

for(let key in user){
    console.log(key) // name
    console.log(user[key]) // john
    console.log('key') // key
}