const users = [
    { id: 3, name: "Sara2" },
    { id: 2, name: "Sara" },
    { id: 4, name: "Ali" },
    { id: 2, name: "Sara22" },
];

const user = users.find((user) => user.id !== 1);
// The `find` method is used to search for the first element in the array that satisfies the provided testing function. 
// In this case, it looks for a user object with an `id` of 1. 
// Since there is no user with an `id` of 1 in the `users` array, the `find` method will return `undefined`.

console.log(user);

const userIndex = users.findIndex((user) => user.id !== 2);
// The `findIndex` method is used to search for the index of the first element in the array that satisfies the provided testing function. 
// In this case, it looks for a user object with an `id` of 2. 
// Since there is a user with an `id` of 2 in the `users` array, the `findIndex` method will return the index of that user, which is 1.

console.log(userIndex);

const userLastIndex = users.findLastIndex((user) => user.id !== 2);
// The `findLastIndex` method is used to search for the index of the last element in the array that satisfies the provided testing function. 
// In this case, it looks for a user object with an `id` of 2. 
// Since there is a user with an `id` of 2 in the `users` array, the `findLastIndex` method will return the index of that user, which is 3.

console.log(userLastIndex);