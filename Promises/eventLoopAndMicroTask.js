
// console.log("1");

// Promise.resolve().then(() => console.log("3"));
// setTimeout(() => console.log("2"), 0);


// console.log("4");

console.log("Before");

const promise = new Promise(resolve => {
  console.log("Inside executor");
  resolve();
});

promise.then(() => {
  console.log("Inside then");
});

console.log("After");