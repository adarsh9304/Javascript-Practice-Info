
/*
const promise1=new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  });
  console.log(promise1)

  */


/*
A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

*/
