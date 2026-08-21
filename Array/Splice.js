// const arr = ["A", "B", "C", "D"];
// console.log("Length:", arr.length);
// console.log(arr.splice(3,0,"E", "F"));
//removes 4 elements starting from index 0 and adds "E" and "F" in their place 
// and it return removed/deleted elements
// console.log(arr);
// console.log("Length:", arr.length);

const newArray = ["A", "B", "C", "D", "E", "F"];

newArray.length = 10;

newArray.splice(7, 2, "X", "Y");

console.log(newArray);
// Undefined 
// No answer