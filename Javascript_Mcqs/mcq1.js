let person={name:'adarsh'};
const member=[person]
person=null 

console.log(member)

// we changed reference of person

//const member=[person] : you create an array member that contains the reference to the same object that person references. Now both person and member[0] point to the same object { name: 'adarsh' }.

// person=null this line sets the person variable to null, meaning person no longer references the original object. However, the array member still contains a reference to the original object.