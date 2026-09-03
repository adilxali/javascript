const users = [{ id: 1, name: 'Ali' }];

// const shallowCopy = [...users];
// shallowCopy[0].name = 'Ahmed'; 
// console.log("Original Users: ", users); 
// console.log("Shallow Copy: ", shallowCopy); 

// const deepCopy = JSON.parse(JSON.stringify(users));
const deepCopy = users.map(user => {
    let userCopy = { ...user }; // Create a shallow copy of the user object
    userCopy.name = 'Changes At Deep Copy'; // Modify the name property in the deep copy
    return { ...userCopy };
});

// deepCopy[0].name = 'Ahmed';
console.log("Original Users: ", users); 
console.log("Deep Copy: ", deepCopy);

const checkArrayType = (value) =>{
    console.log("Value: ", value);
    const val = JSON.stringify(value);
    console.log("String Value: ", val);
    return val.startsWith('[') && val.endsWith(']') ? true : false;
}

console.log(checkArrayType(["a", "b"])); // Output: true