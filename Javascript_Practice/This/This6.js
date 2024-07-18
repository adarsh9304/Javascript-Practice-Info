


function logThis(){
    console.log(this);
  }
  
  const myObj = {
    foo: function(){
      logThis();
      //logThis.call(this); // explicitly set `this` to `myObj`
    }
  }
  
  myObj.foo() 


/*


Explanation:

Is logThis an arrow function? - No.
Was logThis called with new? - No.
Was logThis called with call / apply / bind? - No.
Was logThis called as an object method? - No.
Is strict mode on? - No.
default case - window (or global).


*/

