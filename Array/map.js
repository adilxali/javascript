const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map((num) => num * 2);
// The `map` method is used to create a new array by applying a provided function to each element of the original array. 
// In this case, it multiplies each number in the `nums` array by 2. 
// The result is a new array containing the doubled values of the original numbers.

// console.log(doubleNums);
// Map syntax: array.map(callback(element, index, array), thisArg)

const modifyArray = nums.map((num, index, array) => array[index] = num * 3);

console.log(nums);

const users = [{
    name: "John",
    age: 30
},
{
    name: "Jane",
    age: 25
}];

const userNames = users.map((user) => user.name);
// The `map` method is used to create a new array containing the names of the users. 
// It extracts the `name` property from each user object in the `users` array and returns a new array with those names.

console.log(userNames);