//in strict mode it will give error , in normal it's run fine
/*
let age = 19

// conditionally declare a function
if (age < 18) {

  function welcome() {
    console.log('hello');
  }

} else {

  function welcome() {
    console.log('greeting');
  }

}

// ...use it later
welcome();
*/

/*

correct way for above


let age = 18;

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now


*/

/*
 */
function fun1() {
  if (1) {
    function fun2() {
      console.log(5);
      return;
    }
    fun2();
    return fun2;
  }
}
fun1();
