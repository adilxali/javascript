function timeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]);
}

// Suppoese ki agr hmara 2 sec me resolve ya reject na ho to 
//ek specific error throw ho jaye ki "Operation timed out"

async function fetchProductsWithTimeout() {
  try {
    console.log("Fetching products with timeout...");
    const data = await timeout(fetch('https://fakestoreapi.com/products'), 0);
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Execution completed");
  }
}

fetchProductsWithTimeout();