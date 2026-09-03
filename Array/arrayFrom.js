// array.from()
// Syntax: Array.from(arrayLike, mapFn)
// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// The mapFn parameter is optional. If provided, it will be called on every element of the array-like object before adding it to the new array.


const newArray = Array.from("Hello World");

console.log(newArray)

const newArray2 = Array.from({length:15}, (_, i)=> i);
// Explaining the above code:
//  Here we are creating an array of length 10 and using the map function to fill it with values from 0 to 9. 
// The first parameter is the current value (which we are not using, hence the underscore), and the second parameter is the index (i) which we are using to fill the array.
// Explaining {length:10}: This is an object with a length property set to 10. Array.from() treats this object as an array-like object, 
// and it will create a new array with 10 elements (from index 0 to 9).
console.log(newArray2)