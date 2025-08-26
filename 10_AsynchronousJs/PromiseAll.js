// Promise.all() in JavaScript is a method used to handle multiple asynchronous operations concurrently. It takes an iterable (typically an array) of Promises as input and returns a single Promise.

// Key characteristics of Promise.all():

// Concurrent execution:
// ---------------------
// It allows multiple asynchronous operations to run in parallel, rather than sequentially.

// Aggregation of results:
// --------------------------
// The returned Promise resolves when all the input Promises have successfully resolved. The resolved value is an array containing the resolved values of the input Promises, in the same order as they were provided in the input array. 

// Fast-fail behavior:
// ====================
// If any of the input Promises reject, the Promise.all() Promise immediately rejects with the reason of the first rejected Promise. It does not wait for the other Promises to settle.

// Handling non-Promise values:
// ---------------------------------
// If the input iterable contains non-Promise values, they are treated as already resolved Promises and their values are included in the final resolved array.

// When to use Promise.all():
// ==============================
// It is ideal for scenarios where you need to wait for multiple independent asynchronous tasks to complete before proceeding with further logic, and where the failure of any single task should stop the entire process. Examples include: 
// Making multiple API calls simultaneously and needing all responses before rendering UI.
// Reading multiple files from a file system concurrently.
// Performing several data fetches that are all required for a specific calculation.
// Example:
// JavaScript

const promise1 = Promise.resolve(3);
const promise2 = 42; // Non-promise value
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: [3, 42, "foo"]
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });