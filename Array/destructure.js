const arr = [10, "World", "from", "JavaScript"];

const [first, second, ...other] = arr

console.log(first); // Output: Hello
console.log(second); // Output: World
console.log(other); // Output: [ 'from', 'JavaScript' ]
