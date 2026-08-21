// classic function
function classicFunction(a, b) {
    return a + b;
}

// arrow function
const arrowFunction = (a, b) => a + b;

// anonymous function
const anonymousFunction = function(a, b) {
    return a + b;
};

// named function expression
const namedFunctionExpression = function add(a, b) {
    return a + b;
};

// IIFE (Immediately Invoked Function Expression)
(function(a,b){
    return a + b;
})(5, 10);

// function constructor
const FunctionConstructor = new Function('a', 'b', 'return a + b;');

// generator function
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

// async function
async function asyncFunction() {
    return await Promise.resolve('Hello, World!');
}

// function with default parameters
function functionWithDefaultParameters(a, b = 10) {
    return a + b;
}

// function with rest parameters
function functionWithRestParameters(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

// function with destructured parameters
function functionWithDestructuredParameters({a, b}) {
    return a + b;
}
functionWithDestructuredParameters({b: 5, a: 10}); // Output: 15

const {a,b } = {b: 5, a: 10}

// function with callback
function functionWithCallback(a, b, callback) {
    const result = a + b;
    callback(result);
}

// functionWithCallback(5, 10, (result) => {
//     console.log(`The result is: ${result}`); // Output: The result is: 15
// });

// recursive function
function recursiveFunction(n) {
    if (n <= 0) {
        return 0;
    }
    return n + recursiveFunction(n - 1);
}  

// clouser function
function clouserFunction(){
    let total = 0;
    function increment(){
        total++
        console.log("Total : ",total)
    }
    return console.log(total)
}
