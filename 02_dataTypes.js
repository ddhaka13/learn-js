"use strict"; // this is a directive that tells JavaScript to run in strict mode, which can help catch common coding mistakes and "unsafe" actions.

// alert(9+4) // not working because alert is not defined in Node.js, it's a browser-specific function.

// console.log(

//     9

//     +
//     5);
// code readability is important, and JavaScript allows for flexible formatting. However, it's generally recommended to follow consistent formatting practices for better readability.

let name = "Dev Dhaka";
let age = 25;
let isDeveloper = true;
let address = null;
let phoneNumber; // undefined

// Data Types in JavaScript
// 1. Primitive Data Types
// - String: Represents textual data. Example: "Hello, World!"
// - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// - Boolean: Represents logical values, either true or false. Example: true, false
// - Null: Represents the intentional absence of any object value. Example: null
// - Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
// - Symbol: Represents a unique identifier. Example: Symbol('description')
// 2. Non-Primitive Data Types
// - Object: Represents a collection of properties and methods. Example: { name: "Alice", age: 30 }
// - Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
// - Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isDeveloper); // boolean
console.log(typeof address); // why null is of type object? This is a known quirk in JavaScript. The typeof operator returns "object" for null, which is a historical bug in the language. It was originally intended to represent the absence of any object value, but due to the way JavaScript was implemented, it ended up being classified as an object type.
console.log(typeof phoneNumber); // undefined
