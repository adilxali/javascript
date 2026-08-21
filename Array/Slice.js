// Slice
// Return a shallow copy of original array from start to end (end not included) 
// where start and end represent the index of items in that array. 
// The original array will not be modified.
// Syntax: array.slice(start, end)

const arr = ["A", "B", "C", "D", "E", "F"];

const slicedArray = arr.slice(2, 5);

console.log(slicedArray);
console.log(arr);