
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("printing line from p1")
        resolve("Promise1 resolved")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("printing line from p2")
        resolve("Promise2 resolved")
    }, 10000)
})

// function handlePromise1() {
//     console.log("Hello world1");

//     p1.then((val1) => {
//         console.log("for p1 promise");
//         console.log(val1);

//         console.log("middle of p1 and p2");
//         return p2;

//     }).then((val2) => {
//         console.log("for p2 promise");
//         console.log(val2);
//     })

// }
async function handlePromise2() {
    console.log("Hello world2");

    let val1 = await p1;
    console.log("for p1 promise")
    console.log(val1);

    console.log("middle of p1 and p2")

    let val2 = await p2;
    console.log("for p2 promise")
    console.log(val2);
}

// handlePromise1()
handlePromise2()


// if p1 setTimeout is higher , then p1 and p2 will be resolved together
//if p1 setTimeout is lesser , then p1 will be resolved first and then p2 will be resolved


