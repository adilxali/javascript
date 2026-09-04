const rej = Promise.reject("Kuch error aa gaya");
rej.catch((error)=>console.log(error));