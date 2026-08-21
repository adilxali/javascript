function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
    decresss:()=>--count
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount());  
console.log(counter.decresss()); // 0


