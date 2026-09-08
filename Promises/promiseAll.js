// Promise.all() method returns a single Promise that resolves when all of the promises passed as an 
// iterable have resolved or when the iterable contains no promises. 
// It rejects with the reason of the first promise that rejects.

const promise1 = Promise.reject(3);
const promise2 = Promise.reject(13);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 13, "foo"]
}).catch((error) => {
  console.error(error); // 13
});