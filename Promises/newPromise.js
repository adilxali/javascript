const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({data :"Data mil gaya", success });
  } else {
    reject(new Error({msg:"Kuch error aa gaya", success}));
  }
});

let result = null;
await promise.then((data)=> result = data ).catch((error)=> console.log(error.message));

console.log(result)