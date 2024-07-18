/*
, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:

If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then((data)=>console.log(data));

*/




/*
 
Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

{status:"fulfilled", value:result} for successful responses,
{status:"rejected", reason:error} for errors.


  const p1 = Promise.resolve('1');
const p2 = new Promise((res, re) => setTimeout(() => res("Hello world"), 3000));
const p3 = Promise.resolve("final one");

async function fun1() {
    const obj1 = await Promise.allSettled([p1, p2, p3]);
    console.log(obj1);
}

fun1();

*/



/*

Promise.race([iterables])
Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

*/


/*

Promise.any([])
Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.


Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then((data)=>console.log(data)); // 1
*/