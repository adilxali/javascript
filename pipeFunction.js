// pipe(...fns)
// Write a function pipe that accepts any number of unary functions as arguments and returns a new function. When the returned function is
// called with an initial value, it should pass that value through each of the given functions in order, left to right — the output of each function
// becomes the input to the next. This is a common functional-programming utility for building readable data-transformation chains.
// Input: pipe(x => x+1, x => x*2, x => x-3)(5)
// Output: 9 → ((5+1)*2)-3 = 9

function pipeFn(...fns){
    return function(initialValue){
        let result = initialValue;
        for(let i=0; i<fns.length; i++){
            // console.log("Initial : ", result);
            // console.log("Function : ", fns[i]);
            result = fns[i](result);
            // console.log("After Function : ", result);
        }
        return result;
    }
}

// pipeFn(x => x+1, x => x*2, x => x-3)(5) // Output: 9

const arrow = (x) => x+1;
// console.log(arrow(5)) // Output: 6

function pipeFn2(...fns){
    return function(initialValue){
        let result = initialValue;
        for(let  element of fns){
            result = element(result);
        }
        return console.log(result);
    }
}
pipeFn2(x => x+1, x => x*2, x => x-3)(5)
