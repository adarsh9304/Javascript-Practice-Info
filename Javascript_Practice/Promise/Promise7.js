const myPromise = () => Promise.resolve("I have resolved!");

const myPromise1 = new Promise((resolve, reject) => {
  resolve("from the promise1");
});
const myPromise2 = new Promise((resolve, reject) => {
  resolve("from the promise2");
});

function firstFunction() {
  console.log("starting for first fun");

  myPromise().then((res) => console.log('res', res));

  const data = myPromise1;
  console.log('data', data);

  myPromise2.then((data) => console.log(data));

  console.log("first");
}

firstFunction();
// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// secondFunction();
