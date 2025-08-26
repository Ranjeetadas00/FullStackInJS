/*Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a structured way to handle asynchronous code, offering a cleaner alternative to deeply nested callbacks (callback hell). 
States of a Promise:
Pending: The initial state; the asynchronous operation has not yet completed.
Fulfilled (Resolved): The operation completed successfully, and the promise now holds a resulting value.
Rejected: The operation failed, and the promise holds a reason for the failure (an error).
Creating a Promise:
A new Promise is created using the Promise constructor, which takes an executor function as an argument. This executor function, in turn, receives two arguments: resolve and reject.
*/

let myPromise = new Promise((resolve, reject) => {
  // Perform asynchronous operation here
  let success = true; // Simulate success or failure
  if (success) {
    resolve("Operation completed successfully!"); // Call resolve on success
  } else {
    reject("Operation failed!"); // Call reject on failure
  }
});

/*
Handling Promise Outcomes:
.then():
Used to schedule a callback function to be executed when the promise is fulfilled. It can also take a second optional callback for handling rejections.
.catch():
Used to schedule a callback function specifically for handling rejections (errors) in the promise chain.
.finally():
Used to schedule a callback function to be executed regardless of whether the promise is fulfilled or rejected. This is useful for cleanup operations. 

*/

myPromise
  .then((message) => {
    console.log(message); // Executed if the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // Executed if the promise is rejected
  })
  .finally(() => {
    console.log("Promise settled."); // Executed after fulfillment or rejection
  });
  /*
Benefits of Promises:
Improved Readability:
Avoids deeply nested callbacks, making asynchronous code easier to understand and maintain.
Error Handling:
Provides a centralized mechanism for handling errors in asynchronous operations using .catch().
Chaining:
Allows for sequential execution of asynchronous operations by chaining .then() calls.
Concurrency Control:
Enables managing multiple asynchronous operations concurrently using methods like Promise.all() or Promise.race().*/