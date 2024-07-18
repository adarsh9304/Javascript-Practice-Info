const promise1=()=>new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Promise Resolving');
    }, 1000);
})

const arr = [1,2,3,4,5];

arr.forEach(async (ele) => {
    const data=await promise1();
    console.log(data);
    console.log('hello',ele);
})
console.log('end');