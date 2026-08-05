let obj = {
    "key":"value",
    object:{
        key:"value"
    }
}

let student = {
    name:"Merriam",
    age:20,
    status:"active",
    section:"BCA2024",
    marks : {
        math: 90,
        science: 80,
        english: 70,
        arabic: 95,
        hindi:85,
    }
}

// [["hindi", 85], ["math", 90], ["science", 80], ["english", 70], ["arabic", 95]]

let arr = ["name","status","section"]


// console.log(student.age)

// function getPropertyValue(property){
//      console.log(student[property])
// }
// getPropertyValue("name")
// getPropertyValue("age")

// console.log(student["name"])

// for (const element of arr) {
//     console.log(element + ":", student[element])
// }


// for(const key in student){
//     console.log(`${key} --- ${String(student[key]).toLowerCase() == 'merriam' ? 'Mrs. Merriam' : student[key]}`);
// }

// for (const [key, value] of Object.entries(student.marks)) {
//     console.log(`${key} --- ${value}`);
// }

// let totalMarks = 0;
// for (const key in student.marks) {
//     totalMarks += student.marks[key];
// }
// for(const key in student){
//     if(key === "marks"){
//         for (const markKey in student.marks) {
//             totalMarks += student.marks[markKey];
//         }
//     }
// }
// console.log("Total Marks:", totalMarks);
// let totalMarks = 0;
// for (const key in student.marks) {
//     console.log(`${key} --- ${student.marks[key]}`);
//     totalMarks += student.marks[key];
// }
// console.log("Total Marks:", totalMarks);

console.log(Object.entries(student.marks))
for (const [key, value] of Object.entries(student.marks)) {
    console.log(`${key} --- ${value}`);
}

const values = Object.values(student.marks);
const keys = Object.keys(student.marks);
let newTotalMarks = 0;
for (const key of keys) {
    console.log(`${key} --- ${student.marks[key]}`);
    newTotalMarks += student.marks[key];

}

console.log("Total Marks:", newTotalMarks);