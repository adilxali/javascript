const res = Promise.resolve("Data mil gaya");
res
.then((data)=>console.log(data))
.catch((error)=>console.log(error.message));