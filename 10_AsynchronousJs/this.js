/*this keyword in javascript
==============================
In JavaScript, the this keyword refers to the context in which a function is executed. Its value is determined at runtime based on how the function is called, not where it is defined.

Here's a breakdown of this in different contexts:
Global Context:
------------------
Outside of any function, in a browser environment, this refers to the window object.
In Node.js, this refers to the global object.
In strict mode, this in the global context is undefined.

Object Methods:
-----------------
When a function is called as a method of an object (e.g., object.method()), this inside that method refers to the object itself.

Standalone Functions:
----------------------
When a function is called as a standalone function (not as a method of an object), this typically refers to the global object (e.g., window in browsers) in non-strict mode. 
In strict mode, this inside a standalone function is undefined.

Constructor Functions:
-------------------------
When a function is used as a constructor with the new keyword (e.g., new MyObject()), this inside the constructor refers to the newly created instance of the object.

Arrow Functions:
-----------------
Arrow functions handle this differently. They do not have their own this binding; instead, they inherit this from their lexical (enclosing) scope. This means this in an arrow function will be the same as this in the code surrounding the arrow function definition.

Explicit Binding (call, apply, bind):
---------------------------------------
The call(), apply(), and bind() methods allow you to explicitly set the value of this for a function call.
call() and apply() immediately invoke the function with a specified this value.
bind() returns a new function with this permanently bound to a specified value.
*/

// =============================================================================================

// Global context
// When used in the global scope, this refers to the global object. In a web browser, this is the window object. In Node.js, it is the global object. 

// In a web browser
console.log(this === window); // true

// Create a global variable
this.name = 'Global'; 
console.log(window.name); // 'Global'
// ----------------------------------------------------------------

// Object methods:
// Inside an object's method, this refers to the object that owns the method. This allows you to access other properties and methods of that object. 

const user = {
  name: 'Alex',
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};

const user2 = {
  name: 'Ben',
  greet: user.greet // Borrowing the method
};

console.log(user.greet()); // "Hello, I'm Alex"
console.log(user2.greet()); // "Hello, I'm Ben"

// ---------------------------------------------------------
// Constructor functions
// When a function is used as a constructor with the new keyword, this refers to the new instance being created. 

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.celebrateBirthday = function() {
    this.age++;
    return `Happy birthday, ${this.name}! You are now ${this.age}.`;
  };
}

const person1 = new Person('Charlie', 30);
console.log(person1.celebrateBirthday()); // "Happy birthday, Charlie! You are now 31."

const person2 = new Person('Daisy', 25);
console.log(person2.celebrateBirthday()); // "Happy birthday, Daisy! You are now 26."

// ------------------------------------
// Explicit binding: call(), apply(), and bind()
// These methods allow you to explicitly set the value of this for a function. 

// call():
// This method immediately invokes the function, with this set to the first argument. Other arguments are passed individually. 

const car = {
  brand: 'Toyota'
};

function showBrand(owner) {
  return `${owner} owns a ${this.brand}.`;
}

console.log(showBrand.call(car, 'John')); // "John owns a Toyota."

// apply()
// apply() works just like call(), but accepts arguments as an array. 

const cat = {
  breed: 'Siamese'
};

function showCharacteristics(owner, color) {
  return `${owner}'s ${this.breed} cat is ${color}.`;
}

console.log(showCharacteristics.apply(cat, ['Jane', 'cream'])); // "Jane's Siamese cat is cream."
// -----------------------------

// bind()-This method creates a new function with this permanently bound to a specified object, to be invoked later. 

const bike = {
  model: 'Trek'
};

const showModel = function() {
  return `This is a ${this.model} bike.`;
};

const boundShowModel = showModel.bind(bike);

console.log(boundShowModel()); // "This is a Trek bike."

// --------------------------------------------------

// Arrow functions:
// Arrow functions do not have their own this. They inherit this from the surrounding lexical scope where they were defined. 

const counter = {
  count: 0,
  start: function() {
    // A normal function creates its own `this`,
    // which in this case refers to the `window` object.
    // To solve this, we can use an arrow function.
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

counter.start(); // Logs 1, 2, 3...

// ------------------------------------------------------------------------
// Strict mode:
// In strict mode ('use strict'), the default value of this inside a standalone function is undefined, instead of the global object. 


'use strict';
function showThis() {
  console.log(this);
}

showThis(); // undefined