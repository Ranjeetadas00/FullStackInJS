/*Prototypal inheritance is the core mechanism in JavaScript for objects to inherit properties and methods from other objects. Unlike class-based inheritance found in languages like Java or Python, JavaScript objects directly inherit from other objects through a "prototype chain." 
Here's a breakdown of how it works: 
Prototypes:
Every object in JavaScript has an internal link to another object, called its prototype. This prototype object can, in turn, have its own prototype, forming a chain.
Prototype Chain:
When you attempt to access a property or method on an object, JavaScript first looks for that property directly on the object itself. If it's not found, it then traverses up the prototype chain, checking the object's prototype, then that prototype's prototype, and so on, until the property is found or the end of the chain (which is null) is reached.
Inheritance:
This traversal allows objects to "inherit" properties and methods from their prototypes. If a property or method exists on an object higher up in the prototype chain, it becomes accessible to objects lower down the chain.
Example:*/


const animal = {
  hasChlorophyl: false,
  speak: function() {
    console.log("Generic animal sound.");
  }
};

const dog = Object.create(animal); // dog's prototype is animal
dog.speak = function() {
  console.log("Woof!");
};

const suzanna = Object.create(dog); // suzanna's prototype is dog
suzanna.name = "Suzanna";

suzanna.speak(); // Outputs: Woof! (because dog's speak method overrides animal's)
console.log(suzanna.hasChlorophyl); // Outputs: false (inherited from animal)


/*
In this example:
suzanna inherits hasChlorophyl from animal through dog.
suzanna inherits the speak method from dog, which overrides the speak method of animal.

Key points:
=============
->JavaScript is a prototype-based language, not a class-based one.
->Prototypal inheritance allows for code reuse and efficient sharing of functionality between objects.
->The Object.create() method is a common way to explicitly set the prototype of a new object.
->The __proto__ property (though generally discouraged for direct manipulation) provides a way to inspect the prototype chain.
->ES6 class syntax in JavaScript is syntactic sugar over the underlying prototypal inheritance mechanism.*/