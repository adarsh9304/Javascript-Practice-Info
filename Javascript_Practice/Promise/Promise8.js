console.log("start");
function generatePromise() {
  return new Promise((resolve, reject) => {
    console.log("Inside promise");
    setTimeout(function timeoutCb() {
      resolve("resolve");
      console.log("Inside setTimeout");
    }, 1000);
    console.log('after promise');
  });
}
generatePromise().then(function promiseCb(data) {
  console.log(data);
  return data;
});

console.log("end");
