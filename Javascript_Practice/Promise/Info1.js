/*
The first argument of .then is a function that runs when the promise is resolved and receives the result.

The second argument of .then is a function that runs when the promise is rejected and receives the error.

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

*/



/*

A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.

A finally handler “passes through” the result or error to the next suitable handler.

For instance, here the result is passed through finally to then:

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Promise ready")) // triggers first
  .then(result => alert(result)); // <-- .then shows "value"


To summarize:

A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
If a finally handler returns something, it’s ignored.
When finally throws an error, then the execution goes to the nearest error handler.

*/
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, ms);
    });
}

const res = delay(3000); 
res.then((data) => console.log(data));
// delay(3000).then(() => console.log('runs after 3 seconds'));

/*

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));
*/