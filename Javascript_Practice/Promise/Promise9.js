let print3 = async () => {
  return new Promise((resolve, reject) => {
    // This line executes 7th and add callback function to the mictotask queue.
    setTimeout(() => {
      // microtask queue content: console.log(2) and setTimeout(console.log("3"), 100)
      console.log("3"); // this line moved to the end of the macrotask,
      resolve();
    }, 100); // macrotask queue content: console.log("5") in 200ms console.log("3") in 100ms
  });
};

let print = async () => {
  console.log("1"); // This line executes 3rd and print 1
  setTimeout(() => {
    // This line executes 4th and add call back function inside macrotask queue.
    console.log("5"); // macrotask queue content: console.log("5")
  }, 200);
  return new Promise(async (resolve, reject) => {
    // This line executes 5th and add callback function to microtask queue.
    console.log("2"); // microtask queue content: console.log("2")
    print3(); // This line executes 6th and call print3 function
    resolve();
    console.log("4"); // this line executes 8th and print 4
  });
};

let start = async () => {
  print(); // This line executes 2nd and call print function
  console.log("done"); // this line executes 9th and print done
};

start(); // This line executes 1st and call start function

//1
// 2
// 4
// done
// 3
// 5
