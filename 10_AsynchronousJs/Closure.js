// Closures are functions
// In JavaScript, a closure is the combination of a function and the lexical environment within which that function was declared. This means that a function, when defined, "remembers" the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. 

function createCounter() {
  let count = 0; // This 'count' variable is part of the lexical environment

  return function() { // This inner function is the closure
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // Creates a new, independent closure
console.log(counter2()); // Output: 1