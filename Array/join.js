// Join
// Syntax: array.join(separator)
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
// separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
//separtor is included in the output string between each element of the array. If omitted, the array elements are separated with a comma.
const arr = ["Hello", "World", "from", "JavaScript"];
const joinedString = arr.join();

console.log(joinedString); 


// Split
// Syntax: string.split(separator, limit)
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 
// The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
// The limit parameter specifies the maximum number of elements to include in the returned array.
// Specified separator is not included in the output array. If omitted, the entire string will be returned (an array with only one item).
const str = "Hello World from JavaScript";
const splitArray = str.split(""); // Split the string into an array of words
console.log(splitArray);