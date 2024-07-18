function fun(){
    this.name='javascript'
    // return {name : 'Javascript2'} if this is enable then output will be javascirpt2
}

const fun2=new fun();

console.log(fun2.name); // javascript

// when we invoke the function with new keyword js behind the schene create new object and it will assign the value of this into that object and after all new object will be return

// if we return any object then new keyword will give priority to that