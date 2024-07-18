// function fun(...arg){
//     console.log(typeof arg);
// }
// fun(100)
//object

function fun(a,b=5,...arg){
    let sum=0;
    sum=a+b;

    for(let i in arg){
        sum+=arg[i]
    }

    return sum;
}
const sum=fun(1,2,3,4,5);
console.log(sum);

