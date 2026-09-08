// Promise.race()

Promise.race([
  Promise.reject("Winner"),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), 5000),
  ),
]).then((result)=> console.log(result)).catch(error => console.log("Rejected : ",error));

