// In JavaScript, generators are a special type of function that simplifies the creation of iterators. They are defined using the function* syntax and employ the yield keyword to pause execution and return a value, resuming from that point when next() is called on the returned generator object.
// Key characteristics:
// Iterator Protocol Conformance:
// Generator functions return a Generator object, which inherently conforms to both the iterable and iterator protocols. This means you can iterate over them using for...of loops or manually call their next() method.
// Lazy Evaluation:
// Generators only compute and yield values as they are requested, rather than generating the entire sequence upfront. This is beneficial for large or infinite sequences, as it conserves memory and processing resources.
// yield Keyword:
// The yield keyword is used to pause the generator's execution and return a value. When next() is called again, the generator resumes from the point of the last yield.
// next() Method:
// The next() method of a generator object returns an object with value (the yielded value) and done (a boolean indicating if the iteration is complete) properties.
// Example:
// JavaScript

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const myGenerator = numberGenerator();

console.log(myGenerator.next()); // { value: 1, done: false }
console.log(myGenerator.next()); // { value: 2, done: false }
console.log(myGenerator.next()); // { value: 3, done: false }
console.log(myGenerator.next()); // { value: undefined, done: true }


// Use cases:
// Generating sequences: Creating custom iterators for data structures or algorithms.
// Asynchronous operations: Managing asynchronous code flow in a more sequential manner (e.g., with libraries like Redux-Saga).
// Infinite sequences: Representing and processing data streams that might not have a defined end.