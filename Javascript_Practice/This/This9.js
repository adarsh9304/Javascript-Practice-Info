var length = 4;
function callback() {
 console.log(this);
  console.log(this.length); // What is logged?
  console.log(this.arguments)
}

const object = {
  length: 5,
  method() {
    arguments[1]();
    console.log(arguments)
  }
};

object.method(callback, callback, 2);