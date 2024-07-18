

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!")
    }, 5000)
    
    console.log("inside const promise1")
});
async function handlePromise() {
    console.log("before the calling p")
    const val = await promise1;
    console.log("Namaste Javascript");
    console.log(val);
}

handlePromise();
console.log("after handlePromise function call")

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Before resolve")
//         resolve("Promise Resolved Value from p!!");
//     }, 0);
    
//     console.log("inside const p");
// });
// console.log('end');




