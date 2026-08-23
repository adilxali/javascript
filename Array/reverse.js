// Syntax : reverse
// array.reverse()

// The `reverse` method is used to reverse the order of the elements in an array in place and returns the reversed array. 
// It modifies the original array and does not create a new one.

const numbers = [1, 2, 3, 4, 5];

const reversedNumbers = numbers.reverse();
// In this example, the `reverse` method is used to reverse the order of the elements in the `numbers` array. 
// The original array is modified, and the reversed array is returned.

console.log("Reversed Numbers: ", reversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log("Original Numbers after reverse: ", numbers); // Output: [5, 4, 3, 2, 1]

// The `reverse` method can also be used on arrays of strings or other data types.


// Syntax : toReversed
// array.toReversed()

// The `toReversed` method is used to create a new array with the elements in reverse order without modifying the original array. 
// It returns a new reversed array.

const originalNumbers = [1, 2, 3, 4, 5];

const newReversedNumbers = originalNumbers.toReversed();
// In this example, the `toReversed` method is used to create a new reversed array from the `originalNumbers` array. 
// The original array remains unchanged.

console.log("New Reversed Numbers: ", newReversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log("Original Numbers after toReversed: ", originalNumbers); // Output: [1, 2, 3, 4, 5]