// Syntax
// array.reduce(callback[accumulator, currentValue, index, array], initialValue)

// The `reduce` method is used to apply a function to each element of an array, resulting in a single output value. 
// It takes a callback function that is executed on each element of the array, along with an optional initial value. 
// The callback function receives two arguments: the accumulator (which accumulates the result) and the current value (the current element being processed).

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// In this example, the `reduce` method is used to calculate the sum of all numbers in the `numbers` array. 
// The initial value of the accumulator is set to 0. 
// The callback function adds each current value to the accumulator, resulting in a final sum of 15.

console.log(sum); // Output: 15

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// Here, the `reduce` method is used to calculate the product of all numbers in the `numbers` array. 
// The initial value of the accumulator is set to 1. 
// The callback function multiplies each current value with the accumulator, resulting in a final product of 120.

console.log(product); // Output: 120

const users = [{
    name: "John",
    age: 30
},
{
    name: "Jane",
    age: 25
}];

const addStatus = users.reduce((acc, user) => {
    user.status = "active";
    acc.push(user); 
    return acc;
}, []);
// In this example, the `reduce` method is used to add a new property `status` with the value "active" to each user object in the `users` array. 
// The accumulator starts as an empty array, and each modified user object is pushed into it. 
// The final result is an array of user objects with the added `status` property.

console.log(addStatus);

const fruits = ["apple", "banana", "apple", "orange", "orange"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;//apple = apple exist then their value else 0 + 1 = newVlaue
  return acc;
}, {});
console.log(count);