// 1)Array
// ==================
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  //2

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift() // removes 1st element
/*

In JavaScript, shift() and unshift() are array methods that manipulate elements at the beginning of an array. 
shift():
Removes the first element from an array.
Returns the removed element.
Modifies the original array by reducing its length by one and shifting all subsequent elements to a lower index.
JavaScript

    let fruits = ["apple", "banana", "orange"];
    let removedFruit = fruits.shift(); // removedFruit is "apple", fruits is ["banana", "orange"]
unshift():
Adds one or more elements to the beginning of an array. 
Returns the new length of the array.
Modifies the original array by increasing its length and shifting all existing elements to a higher index to accommodate the new elements.
JavaScript

    let colors = ["red", "green"];
    let newLength = colors.unshift("blue", "yellow"); // newLength is 4, colors is ["blue", "yellow", "red", "green"]
Both shift() and unshift() are "destructive" methods, meaning they directly modify the array on which they are called. When dealing with large arrays, shift() and unshift() can be less performant than pop() and push() (which operate on the end of the array) because they require re-indexing of all subsequent elements.

*/
// console.log(myArr.includes(9)); // returns true  or 
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// ---------------------------------------------------------------
// HArd COpy and Shallow Copy 
// =============================
/*

1. Shallow Copy (Analogous to "Softcopy"):
===============================================
A shallow copy creates a new object or array, but it only copies the references to nested objects or arrays, not the nested objects/arrays themselves.
If the original object/array contains nested objects or arrays, modifications to those nested structures in the copied version will also affect the original, because both still point to the same underlying data in memory.
This is analogous to a "softcopy" in the sense that you have a separate digital file, but changes within that file might still be linked to the original source if not handled carefully.
Examples of Shallow Copy in JavaScript:
Spread operator (...).
JavaScript

    let originalObject = { a: 1, b: { c: 2 } };
    let shallowCopy = { ...originalObject };
    shallowCopy.b.c = 3; // Modifies originalObject.b.c as well
Object.assign().
JavaScript

    let originalArray = [{ id: 1 }, { id: 2 }];
    let shallowCopy = Object.assign([], originalArray);
    shallowCopy[0].id = 3; // Modifies originalArray[0].id as well


2. Deep Copy (Analogous to "Hardcopy"):
-------------------------------------------
A deep copy creates a completely independent copy of an object or array, including all nested objects and arrays.
This means that changes made to the deeply copied version will not affect the original, as they are entirely separate entities in memory.
This is analogous to a "hardcopy" where you have a physical, independent duplicate of a document, and changes to one do not affect the other.
Examples of Deep Copy in JavaScript:
JSON.parse(JSON.stringify()) (with limitations).
JavaScript

    let originalObject = { a: 1, b: { c: 2 } };
    let deepCopy = JSON.parse(JSON.stringify(originalObject));
    deepCopy.b.c = 3; // originalObject.b.c remains 2
Note: This method has limitations and cannot handle functions, undefined, Symbol, or circular references. structuredClone() (Web API).
JavaScript

    let originalObject = { a: 1, b: { c: 2 } };
    let deepCopy = structuredClone(originalObject);
    deepCopy.b.c = 3; // originalObject.b.c remains 2

    */

// ===================================================Some More Array operations

    const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Joining 2 arrays
// ---------------------------

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh"))         //['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"})) // interesting -> returns []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));        //[100, 200, 300]