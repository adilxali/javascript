let number = "100";

// == => not check type convert into same data type and then check value
// === => check type and value both
if(number == 10){ // 10 == 10 => true (type conversion)
    console.log("Number is equal to 10")
}else {
    console.log("Number is not equal to 10")
}

if(Number(number) === 10){ // Number("10")= 10 === 10 => true =>  equal ( type is same and value is also same) 
    console.log("Number is equal to 10")
} else {
    console.log("Number is not equal to 10")
}

switch (number) {
    case 10:
        console.log("Number is equal to 10")
        break;
    case "10":
        console.log("Number is equal to '10'")
        break;
    default:
        console.log("Number is not equal to 10 or '10'")
}