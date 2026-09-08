// Async/Await 

async function getResult(result){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(result){
        resolve("Success");
      }else{
        reject(new Error("Failed"));
      }
    }, 2000);
  });
}   

// getResult(false).then(data => console.log(data)).catch(error => console.log(error.message));

async function handleResult(result){
   try{
    console.log("Execution started");
      const data = await getResult(result);
      console.log(data);
   }catch(error){
      console.log(error.message);
   }finally{
      console.log("Execution completed");
   }
}

handleResult(false);