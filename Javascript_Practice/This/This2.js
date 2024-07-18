/* function logThis(){
    console.log(this);
  }
  
  const myObj = {
    logThis
  }
  
  myObj.logThis() 
  //Was logThis called as an object method? - Yes, myObj is left to the dot.



function logThis(){
  console.log(this);
}

const someObj = new logThis()
Result - The object created by logThis.
Explanation:

Is logThis an arrow function? - No.
Was logThis called with new? - Yes, then this is an auto created object inside the function.




function logThis(){
  console.log(this);
}

class myClass {
  logThat(){
    logThis()
  }
}

const myClassInstance = new myClass()
myClassInstance.logThat()
Result - window.
Explanation:

Is logThis an arrow function? - No.
Was logThis called with new? - No.
Was logThis called with call / apply / bind? - No.
Was logThis called as an object method? - No.
Is strict mode on? - No.
default case - window (or global).




function logThis(){
  console.log(this);
}

const someObj = new logThis()
Result - The object created by logThis.
Explanation:

Is logThis an arrow function? - No.
Was logThis called with new? - Yes, then this is an auto created object inside the function.





function logThis(){
  console.log(this);
}

class myClass {
  logThat(){
    logThis.call(this)
  }
}

const myClassInstance = new myClass()
myClassInstance.logThat()

Result - The object created by myClass.
Explanation:

Is logThis an arrow function? - No.
Was logThis called with new? - No.
Was logThis called with call / apply / bind? - Yes, whatever passed in as first argument. OK, but we are passing this! what is this refers to inside the logThat execution context? Lets check:
Is logThat an arrow function? - No.
Was logThat called with new? - No.
Was logThat called with call / apply / bind? - No
Was logThat called as an object method? - Yes, this is the object left to the dot - The auto created object inside myClass in this case.






class myClass {
  logThis = () => {
    console.log(this);
  }
}

const myObj = { name: 'sagiv' };

const myClassInstance = new myClass()
myClassInstance.logThis.call(myObj)

Result - The object created by myClass.
Explanation:

Is logThis an arrow function? - Yes, this refers to whatever the wrapping context set it, myClass in this case. Lets check what this refers to in the wrapping context:
Is myClass an arrow function? - No.
Was myClass called with new? - Yes, this refers to the newly created object (the instance).






function logThis() {
  console.log(this);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', logThis);
Result - The btn element.

  */