// input:
// [1, [2, 3], [4, [5, [6]]]]
// Output:
// [1, 2, 3, 4, 5, 6] 

// flatArray function which accept an array as input
function flatArray(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        //check that element arr[i] is Array or not
        if(Array.isArray(arr[i])){ // Checkinh here that element is  Array or Not
            result.push(...arr[i]) // if Array then we spread the elements of array and push into result
        }else{ //else if element arr[i] is not array then directly push into result array
            result.push(arr[i])
        }
    }
    return result;
}

console.log(flatArray([1, [2, 3], [4, [5, 6]]]))

flatArrayCustomDepth(arr, depth){}

Depth => Level of Nested array whose we want to flat.