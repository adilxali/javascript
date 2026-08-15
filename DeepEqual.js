// 2. Deep Equal
// Write a recursive function deepEqual(a, b) that determines whether two values are deeply equal — meaning that for objects,
// all nested keys and values must match recursively, not just reference equality. Two primitive values should be compared directly, while
// two objects should be considered equal only if they have the same set of keys and each corresponding value is also deeply equal.
// Input: deepEqual({a:{b:1}}, {a:{b:1}})
// Output: true
// Input: deepEqual({a:{b:1}}, {a:{b:2}})
// Output: false

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {    
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}
let object1 = { a: 1, b: { c: 2 } };
let object2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(object1, object2)); // Output: true

function deepEqual2(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    let obj1Keys = Object.keys(obj1); //[a,b] -> [c]
    let obj2Keys = Object.keys(obj2); //[a,b] -> [c]
    
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key of obj1Keys) {
        if(obj2Keys.includes(key)){
            //loop1 -> obj1=> obj1[a]=> 1 , obj2=> obj2[a]=> 1
            //loop2 -> obj1=> obj1[b]=> {c:2} , obj2=> obj2[b]=> {c:2}
            if(!deepEqual2(obj1[key], obj2[key])){
                return false;
            }        
        } else {
            return false;
        }
    }

    return true;

}

console.log(deepEqual2(object1, object2)); // Output: true