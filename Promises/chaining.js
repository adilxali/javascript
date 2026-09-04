// Promise.resolve(10)
//   .then((value) => {
//     return value * 2;
//   })
//   .then((value) =>{return value*30})
//   .then(value=> {throw new Error(value)})
//   .catch((error) => console.log("Error : ",error.message));

function getUser() {
  return Promise.resolve({ id: 1, name: "Adil" });
}

function getOrders(userId) {
  return Promise.resolve({ user: userId, orders: ["Order 1", "Order 2"] });
}

getUser()
  .then((user) => {
    console.log(user);
    throw new Error("Error in getUser"); // Simulating an error
  })
  .then((orders) => {
    console.log(orders.orders);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Promise chain completed.");
  });
