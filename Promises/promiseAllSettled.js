// Promise.allSettled() method returns a single Promise that resolves when all of the promises passed as an iterable have settled, meaning that they have either resolved or rejected. 
// It returns an array of objects that each describe the outcome of each promise.
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failed");
const [result1, result2] = await Promise.allSettled([
  promise1,
  promise2
]);

console.log("Result1 :",result1);
console.log("Result2 : ",result2);