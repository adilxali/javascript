// Merge two objects
// Input: ({a:1, b:2}, {c:3, d:4})
// Output: {a:1, b:2, c:3, d:4}

// Spread
// a:1,b:2,c:3,d:4

// with the spread operator, 
// we can merge two objects into a new object. 
// If there are overlapping keys, 
// the values from the second object will overwrite those from the first object.
function mergeObjectsUsingSpreadOperator(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// with Object.assign(),
// we can merge two objects into a new object. 
// If there are overlapping keys, 
// the values from the second object will overwrite those from the first object.
// Object.assign(initialize target, source1, source2, ...)
function mergeObjectsUsingAssign(obj1, obj2, obj3) {
    return Object.assign({}, obj1, obj2, obj3);
}

// with a for...in loop,
// we can iterate over the keys of the second object and add them to the first object. 
// If there are overlapping keys, 
// the values from the second object will overwrite those from the first object.
function mergeObjectsUsingForInLoop(obj1, obj2) {
    const mergedObject = { ...obj1 };
    for (const key in obj2) {
        // if(!mergedObject[key]){
        //     mergedObject[key] = obj2[key];
        // }
        if (!mergedObject.hasOwnProperty(key)) {
            mergedObject[key] = obj2[key];
        }
    }
    return mergedObject;
}

// with new object 
function mergeObjectsUsingNewObject(obj1, obj2) {
    const mergedObject = {};
    for (const key in obj1) {
        mergedObject[key] = obj1[key];
    }

    for (const key in obj2) {
        mergedObject[key] = obj2[key];
    }
    return mergedObject;
}


const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// console.log(mergeObjectsUsingSpreadOperator(object1, object2)); // Output: { a: 1, b: 3, c: 4 }


let newObje1 = {
    "RL1": "Aditi",
    "RL2": "Merriam"
}

let newObj2 = {
    "RL2": "Random",
    "RL3": "Amna"
}

let newReturn = {
    "RL1": "Aditi",
    "RL2": "Merriam",
    "RL3": "Amna"
}

// console.log(mergeObjectsUsingForInLoop(newObje1, newObj2)) // Output: { RL1: 'Aditi', RL2: 'Merriam', RL3: 'Amna' }

// Rest operator
// The rest operator is used to collect the remaining properties of an object into a new object. 
// It is denoted by three dots (...) followed by the name of the new object. 
// The rest operator can be used in function parameters, destructuring assignments, and object literals.

function mergeObjectsUsingRestOperator(obj1, obj2) {
    const { a, ...mergedObject } = { ...obj1, ...obj2 };
    return mergedObject;
}

function mergeNObjectsUsingRestOperator(...objects) {
    console.log("Args : ", objects);
    return objects.reduce((mergedObject, currentObject) => {
        return { ...mergedObject, ...currentObject };
    }, {});
}

const object3 = { d: 5, e: 6 };
const object4 = { e: 7, g: 8 };
console.log("Accept Multiple Objects:", mergeNObjectsUsingRestOperator(object1, object2, object3, object4)); 
// Output: { a: 1, b: 3, c: 4, d: 5, e: 7, f: 7, g: 8 }

function mergeObjectsUsingRestOperator(...objs){
    let result = {};
    for (const obj of objs) {
        result = { ...result, ...obj };
    }
    return result;
}

// Union of two objects
// The union of two objects is a new object that contains all the properties from both objects.
// Union of n objects
// intersection of two objects
// intersection of n objects