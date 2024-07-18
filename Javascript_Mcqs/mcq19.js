const obj={};

function fun(data){
    data.name="js";
    data=null;
    return data;
}

const newObj=fun(obj);
console.log(obj); // { name: 'js' }
console.log(newObj); // null