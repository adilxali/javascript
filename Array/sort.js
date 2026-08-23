// Syntax : sort
// array.sort(compareFunction)

// The `sort` method is used to sort the elements of an array in place and returns the sorted array. 
// It takes an optional compare function that defines the sort order. 
// If no compare function is provided, the elements are converted to strings and sorted in ascending order based on their UTF-16 code unit values.

const numbers = [5, 2, 9, 1, 5, 6];

const sortedNumbers = numbers.sort((a, b) => a - b);
// In this example, the `sort` method is used to sort the `numbers` array in ascending order. 
// The compare function subtracts `b` from `a`, which results in a positive value if `a` is greater than `b`, a negative value if `a` is less than `b`, and zero if they are equal.

console.log("Sorted Numbers (Ascending): ", sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]

const sortedNumbersDescending = numbers.sort((a, b) => b - a);
// Here, the `sort` method is used to sort the `numbers` array in descending order. 
// The compare function subtracts `a` from `b`, which results in a positive value if `b` is greater than `a`, a negative value if `b` is less than `a`, and zero if they are equal.

console.log("Sorted Numbers (Descending): ", sortedNumbersDescending); // Output: [9, 6, 5, 5, 2, 1]

const fruits = ["banana", "apple", "orange", "kiwi"];

const sortedFruits = fruits.sort();
// In this example, the `sort` method is used to sort the `fruits` array in ascending order based on their UTF-16 code unit values. 
// Since no compare function is provided, the elements are converted to strings and sorted alphabetically.
console.log("Original Fruits: ", fruits); // Output: ["banana", "apple", "orange", "kiwi"]
console.log("Sorted Fruits: ", sortedFruits); // Output: ["apple", "banana", "kiwi", "orange"]

// Syntax : toSorted
// array.toSorted(compareFunction)

// The `toSorted` method is used to create a new sorted array without modifying the original array. 
// It takes an optional compare function that defines the sort order. 
// If no compare function is provided, the elements are converted to strings and sorted in ascending order based on their UTF-16 code unit values.

const originalNumbers = [5, 2, 9, 1, 5, 6];

const newSortedNumbers = originalNumbers.toSorted((a, b) => a - b);
// In this example, the `toSorted` method is used to create a new sorted array from the `originalNumbers` array in ascending order. 
// The original array remains unchanged.

console.log("Original Numbers: ", originalNumbers); // Output: [5, 2, 9, 1, 5, 6]
console.log("New Sorted Numbers (Ascending): ", newSortedNumbers); // Output: [1, 2, 5, 5, 6, 9]

const newSortedNumbersDescending = originalNumbers.toSorted((a, b) => b - a);
// Here, the `toSorted` method is used to create a new sorted array from the `originalNumbers` array in descending order. 
// The original array remains unchanged.

console.log("New Sorted Numbers (Descending): ", newSortedNumbersDescending); // Output: [9, 6, 5, 5, 2, 1]

// Sort vs toSorted
// The `sort` method sorts the elements of an array in place, modifying the original array, while the `toSorted` method creates a new sorted array without modifying the original array. 
// Both methods can take an optional compare function to define the sort order. 
// If no compare function is provided, both methods will sort the elements based on their UTF-16 code unit values.