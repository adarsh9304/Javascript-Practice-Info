/* const call = {
    caller: "man", 
    says: function() {
      console.log(`Hey, ${this.caller} just called.`);
    }
  };
  call.says();  // Hey, man just called

const call = {
    caller: "man", 
    says: () => {
      console.log(`Hey, ${this.caller} just called.`);
    }
  };
  
  call.says(); // Hey undefined just called


const call = {
    caller: "mom", 
    says: function() {
      console.log(`Hey, ${this.caller} just called.`);
    }
  };
  
  let newCall = call.says;
  
  newCall(); // Hey, undefined just called.We are invoking newCall() function globally, which in turn makes the 'this' keyword equal to the global object.


  const call = {
  caller: "mom", 
  anotherCaller: function() {
        console.log(`${this.caller} called, too!`)
      },
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call.anotherCaller;
newCall(); // undefined called,too



function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom", 
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call.anotherCaller;

newCall(); // undefined called,too





function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0 -- WTF?

The reason why foo.count is 0 at the end is because foo.count is a property of the foo function object, not a property of the this context inside the foo function. When you call foo( i ), this inside the foo function refers to the global object (in non-strict mode) or undefined (in strict mode), not the foo function object itself.
To fix this and correctly keep track of the count of how many times foo is called, you should use foo.count directly without trying to reference this.count. Here's the corrected code:

another method
function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	// Note: `this` IS actually `foo` now, based on
	// how `foo` is called (see below)
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		// using `call(..)`, we ensure the `this`
		// points at the function object (`foo`) itself
		foo.call( foo, i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 4





j


  */