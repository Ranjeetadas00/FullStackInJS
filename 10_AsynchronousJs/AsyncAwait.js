// async/await in JavaScript provides a more synchronous-looking syntax for handling asynchronous operations, building upon Promises. It simplifies working with asynchronous code, making it more readable and easier to manage than traditional callback-based or .then() chain approaches.

// 1. async keyword:
// --------------------
// The async keyword is placed before a function declaration to designate it as an asynchronous function.
// An async function always returns a Promise. If the return value is not explicitly a Promise, it will be implicitly wrapped in a resolved Promise. 
// Example:


async function fetchData() {
  // Asynchronous operations will go here
  return "Data fetched successfully!";
}

fetchData().then(message => console.log(message)); // Output: Data fetched successfully!

// 2. await keyword:
// -------------------
// The await keyword can only be used inside an async function (or at the top level of a module).

// It pauses the execution of the async function until a Promise settles (either resolves or rejects).
// When await is used with a Promise, it "waits" for the Promise to resolve and then returns its resolved value. If the Promise rejects, await will throw the rejected value as an error, which can be caught using try...catch blocks. 
Example:


async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/users/1'); // Await the fetch Promise
    const userData = await response.json(); // Await the JSON parsing Promise
    console.log(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUserData();

// In summary:
// async functions allow the use of await inside them and always return Promises.
// await pauses the execution of an async function until a Promise resolves, simplifying the handling of asynchronous results.
// try...catch blocks can be used within async functions to handle errors from rejected Promises.

// ==================================================================
////////////////////////////////////////////////////////////////////////////
// =====================================================================

// async await in javascript
// async/await in JavaScript provides a more synchronous-looking syntax for handling asynchronous operations, building upon Promises. It simplifies working with asynchronous code, making it more readable and easier to manage than traditional callback-based or .then() chain approaches.
// 1. async keyword:
// The async keyword is placed before a function declaration to designate it as an asynchronous function.
// An async function always returns a Promise. If the return value is not explicitly a Promise, it will be implicitly wrapped in a resolved Promise. 
// Example:
async function fetchData() {
  // Asynchronous operations will go here
  return "Data fetched successfully!";
}

fetchData().then(message => console.log(message)); // Output: Data fetched successfully!

// 2. await keyword:
// The await keyword can only be used inside an async function (or at the top level of a module).
// It pauses the execution of the async function until a Promise settles (either resolves or rejects).
// When await is used with a Promise, it "waits" for the Promise to resolve and then returns its resolved value. If the Promise rejects, await will throw the rejected value as an error, which can be caught using try...catch blocks. 

Example:
async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/users/1'); // Await the fetch Promise
    const userData = await response.json(); // Await the JSON parsing Promise
    console.log(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUserData();

// In summary:
// async functions allow the use of await inside them and always return Promises.
// await pauses the execution of an async function until a Promise resolves, simplifying the handling of asynchronous results.
// try...catch blocks can be used within async functions to handle errors from rejected Promises.
// AI responses may include mistakes. Learn more



// give more real life examples
// Here are more real-life examples of async/await in JavaScript, demonstrating its use in web development and Node.js for managing complex and time-consuming operations. 
// 1. Fetching data from an API and updating the UI
// This is one of the most common uses of async/await in front-end development. When a user navigates to a profile page, the app needs to fetch data from an external server and display it. 
// The problem (without async/await):
// Using traditional .then() chaining can lead to "callback hell," making the code less readable and harder to manage, especially with sequential dependencies. 
// The solution (with async/await):
// The code is cleaner and resembles synchronous code, making it easier to follow the logic. 

async function getUserProfile(userId) {
  try {
    const userResponse = await fetch(`https://api.example.com/users/${userId}`);
    // Check for HTTP errors, which `fetch` does not throw automatically
    if (!userResponse.ok) {
      throw new Error(`HTTP error! Status: ${userResponse.status}`);
    }
    const userData = await userResponse.json();

    const postsResponse = await fetch(`https://api.example.com/posts?userId=${userId}`);
    if (!postsResponse.ok) {
      throw new Error(`HTTP error! Status: ${postsResponse.status}`);
    }
    const userPosts = await postsResponse.json();

    // Now you can use both userData and userPosts to render the profile
    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
  } catch (error) {
    console.error("Failed to load user profile:", error);
    // Display a user-friendly error message on the page
  }
}

getUserProfile(123);
// ======================================================================

// 2. Handling multiple parallel API requests
// Sometimes, a page needs to load multiple independent resources at the same time, like user data, recent posts, and a list of comments. 
// The problem (without parallel execution):
// Awaiting each fetch request sequentially is inefficient. The total time will be the sum of all the individual request times, even though they don't depend on each other. 
// The solution (with async/await and Promise.all):
// Using Promise.all with await allows you to trigger all requests at once and wait for all of them to resolve. This significantly reduces the total loading time for the user. 

async function fetchDashboardData(userId) {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUserData(userId),
      fetchUserPosts(userId),
      fetchUserComments(userId)
    ]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
    // Render the dashboard with all the fetched data
  } catch (error) {
    console.error("Could not fetch all dashboard data:", error);
  }
}

// These functions would return promises from a `fetch` call
function fetchUserData(userId) { /* ... */ }
function fetchUserPosts(userId) { /* ... */ }
function fetchUserComments(userId) { /* ... */ }
// ===========================================================================

// 3. Interacting with a database in Node.js
// On the server side, database operations (queries, inserts, updates) are asynchronous and benefit greatly from async/await. It prevents the server from being blocked while waiting for a query to complete. 
// The problem (without async/await):
// Without async/await, you would need to use nested callbacks, which is a common source of code complexity in Node.js. 
// The solution (with async/await):
// With a database library that supports Promises (like node-mysql2/promise), you can write server-side code that is clean and readable. 

// Example using a fictional promise-based MySQL driver
const db = require('./db');

async function getPostWithAuthor(postId) {
  try {
    const [postRows] = await db.query('SELECT * FROM posts WHERE id = ?', [postId]);
    const post = postRows[0];

    // Check if post exists before fetching the author
    if (post) {
      const [authorRows] = await db.query('SELECT * FROM users WHERE id = ?', [post.authorId]);
      post.author = authorRows[0];
    }

    return post;
  } catch (error) {
    console.error("Error fetching post or author:", error);
    throw error; // Propagate the error up the call stack
  }
}

async function handleRequest(req, res) {
  try {
    const postData = await getPostWithAuthor(req.params.id);
    if (postData) {
      res.json(postData);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (e) {
    res.status(500).send('Server error');
  }
}
// ===============================================================

// 4. Reading and processing files
// In Node.js, file system operations are often asynchronous. Using async/await allows for a much cleaner workflow for reading, processing, and writing files. 
// The problem:
// Without async/await, a developer would use nested callbacks, which can get complicated for multi-step file processing. 
// The solution (with async/await):
// Using the fs/promises module simplifies file operations dramatically. 

const fs = require('fs/promises');

async function processFile(filePath) {
  try {
    // Read the file asynchronously
    const content = await fs.readFile(filePath, 'utf-8');

    // Perform a synchronous operation (e.g., data manipulation)
    const processedContent = content.toUpperCase();

    // Write the modified content to a new file asynchronously
    await fs.writeFile(`${filePath}.upper`, processedContent);

    console.log(`Successfully processed and saved file: ${filePath}.upper`);
  } catch (error) {
    console.error("Error processing file:", error);
  }
}

processFile('example.txt');