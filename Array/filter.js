const users = [
    { id: 3, name: "Sara2" },
    { id: 2, name: "Sara" },
    { id: 4, name: "Ali" },
    { id: 1, name: "Sara22" },
];

const userOfId2 = users.filter((user) => user.id !== 1);
// The `filter` method is used to create a new array with all elements that satisfy the provided testing function. 
// In this case, it looks for user objects with an `id` of 2. 
// Since there are users with an `id` of 2 in the `users` array, the `filter` method will return an array containing those user objects .

console.log(userOfId2); 