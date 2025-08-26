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

// ============================================================


const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//Imp

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
