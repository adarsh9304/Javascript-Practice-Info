// First two section covered in object section

//STRING


/*

Strings can’t be changed in JavaScript. It is impossible to change a character.


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);


let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";

single or double quotes do not work this way.
Single and double quotes come from ancient times of language creation, when the need for multiline strings was not taken into account. Backticks appeared much later and thus are more versatile.

*/



/*

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

*/




/*
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's'

str.substring(start [, end])

str.substr(start [, length])



*/