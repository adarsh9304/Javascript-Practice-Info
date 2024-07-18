let info = {
    name:'Adarsh',
    skills:{
        Adarsh:'Nodejs',
        Ashvin:'Reactjs'
    }
}

let copyObj=info;

// copyObj.name='Adarsh2'
// console.log(info)
// console.log(copyObj)

const obj2 = {...info}
obj2.name='Adarsh2'
obj2.skills.Ashvin='Database'
console.log(info)
console.log(obj2)