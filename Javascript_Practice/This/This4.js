

function foo(num) {
	console.log( "foo: " + num );
    console.log(this.count);
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo.call( foo, i );
	}
}
console.log( 'last',foo.count ); 