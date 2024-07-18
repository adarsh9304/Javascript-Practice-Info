const promise=new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(() => {
        console.log('start');
        resolve('success');
        console.log('end');
    },);
    console.log(2);
})

promise.then((data)=>{
    console.log(data);
})
console.log(3);