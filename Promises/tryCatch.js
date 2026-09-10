// async : Awaiting asynchronous operations / 
//  It is a keyword that allows you to write asynchronous code in a synchronous manner. 
// It is used in conjunction with the await keyword,
//  which pauses the execution of an async function until a Promise is resolved or rejected.

// Await is used to wait for a Promise to resolve or reject before continuing with the execution of the code.

// try ...catch is a statement that allows you to handle errors in your code.
// It is used to catch and handle errors that may occur during the execution of your code.
// finally is a statement that allows you to execute code after a try ...catch block, 
// regardless of whether an error occurred or not.

async function fetchProducts(){
    try {
        console.log("Fetching products...");
        const res = await fetch('https://fakestoreapi.com/productsfsf');
        // if(!res.ok){
        //     throw new Error("Failed to fetch products");
        // }
        const data = await res.json();
        console.log(data);
    }catch(error){
        console.log("Error : ",error.message);
        throw error;
    }finally {
        console.log("Execution completed");
    }
}

// await fetchProducts();

export default fetchProducts;