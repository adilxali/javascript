// Sum from 1 to 10 using a for loop
let sum =0;
// for(let i=10 ; i>0; i--){
//     sum += i;
// }
// console.log(sum);

// while loop
let limit = 10;
// while(limit > 0){
//     sum += limit;
//     limit--;
// }
// console.log(sum);
// do while loop
// do {
//     sum += limit;
//     limit--;
// } while(limit > 0);
// console.log(sum);


// for..of
let arr = [1, 2, 3, 4, 5];
//"12bdsd-asdsad-2432csa-scsdc"
let obj = {
    "1-2": 1,
    "abc-2": 2
}

for(let key in obj){
    let value = obj[key];
    console.log( value);
}

// for(const element of arr) {
//     console.log(element);
// }

// let str = "Hello";
// for(const char of str) {
//     console.log(char);
// }

// find even number in betwwen 1 to 100
const numbers = [5, 10, 15, 20, 25];
let sum2=0
for (let i=0; i< numbers.length; i++) {
   sum2 += numbers[i];
}
