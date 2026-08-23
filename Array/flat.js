// Syntax : flat
// array.flat(depth)

// The `flat` method is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
// It returns a new flattened array without modifying the original array.
// if depth is not specified, it defaults to 1, meaning it will flatten the array by one level.
// if depth is set to Infinity, it will flatten the array completely, regardless of how deeply nested the sub-arrays are.
// if depth is not a number, it will be treated as 0, meaning no flattening will occur.
// if depth is undefined, it will default to 1, meaning it will flatten the array by one level.
// if depth is null, it will be treated as 0, meaning no flattening will occur.
// if depth is a negative number, it will be treated as 0, meaning no flattening will occur.

const nestedArray = [1, [2, [3, [4]], 5]];

const flattenedArray = nestedArray.flat(-2); 
// In this example, the `flat` method is used to flatten the `nestedArray` up to a depth of 2. 
// The resulting `flattenedArray` will contain all elements from the nested arrays up to the specified depth.

console.log("Flattened Array: ", flattenedArray); // Output: [1, 2, 3, [4], 5]
console.log("Original Nested Array: ", nestedArray); // Output: [1, [2, [3, [4]], 5]]

// Syntax : flatMap
// array.flatMap(callback(element, index, array), thisArg)

// The `flatMap` method is used to first map each element using a mapping function, and then flatten the result into a new array. 
// It is a combination of `map` followed by `flat` with a depth of 1. 
// It returns a new flattened array without modifying the original array.

const numbers = [1, [2, [3, [4]], 5]];;

const flatMappedArray = numbers.flatMap((num) => num instanceof Array ? num : num * 2);
// In this example, the `flatMap` method is used to create a new array where each number in the `numbers` array is mapped to an array containing the number and its double. 
// The resulting `flatMappedArray` will be flattened into a single array.

console.log("Flat Mapped Array: ", flatMappedArray); // Output: [1, 2, 3, 4, 5] 


const array = [1,2 ,[3,4,[5,6]]];
// depth = 1 -> [1,2,3,4,[5,6]]
// depth = 2 -> [1,2,3,4,5,6]