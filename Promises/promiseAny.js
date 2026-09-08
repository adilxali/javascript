// Promise.any()

Promise.any([
  Promise.reject("Server 1 failed"),
  Promise.resolve("Server 2 succeeded"),
  Promise.resolve("Server 3 succeeded"),
]).then(data => console.log("Resolved : ",data)).catch(error => console.log("Rejected : ",error));

