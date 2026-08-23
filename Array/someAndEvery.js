// Syntax : Some
// array.some(callback(element, index, array), thisArg)

// The `some` method is used to check if at least one element in an array satisfies a provided testing function. 
// It returns a boolean value: `true` if at least one element passes the test, and `false` otherwise.

const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
// In this example, the `some` method checks if there is at least one even number in the `numbers` array. 
// Since there are even numbers (2 and 4), it will return `true`.

console.log("Has Even Number : ",hasEvenNumber); // Output: true

const hasNegativeNumber = numbers.some((num) => num < 0);
// Here, the `some` method checks if there is any negative number in the `numbers` array. 
// Since there are no negative numbers, it will return `false`.

console.log("Has Negative Number : ",   hasNegativeNumber); // Output: false

// Syntax : Every
// array.every(callback(element, index, array), thisArg)

// The `every` method is used to check if all elements in an array satisfy a provided testing function. 
// It returns a boolean value: `true` if all elements pass the test, and `false` otherwise.

const allEvenNumbers = numbers.every((num) => num % 2 === 0);
// In this example, the `every` method checks if all numbers in the `numbers` array are even. 
// Since not all numbers are even, it will return `false`.

console.log("All Even Numbers (Every): ", allEvenNumbers); // Output: false

const allPositiveNumbers = numbers.every((num) => num > 0);
// Here, the `every` method checks if all numbers in the `numbers` array are positive. 
// Since all numbers are positive, it will return `true`.

console.log("All Positive Numbers (Every): ", allPositiveNumbers); // Output: true
