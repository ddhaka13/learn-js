// primitive data types: string, number, boolean, null, undefined, symbol, bigint

const name = "Dev"; // string
const age = 25; // number
const isDeveloper = true; // boolean
const address = null; // null
let phoneNumber; // undefined
const uniqueId = Symbol("id"); // symbol
const bigIntValue = 1234567890123456789012345678901234567890n; // bigint

// reference data types: object, array, function

let person = {
  name: "Dev",
  age: 25,
  isDeveloper: true,
}; // object
let numbers = [1, 2, 3, 4, 5]; // array
function greet() {
  console.log("Hello!");
} // function

console.log(typeof person); // object
console.log(typeof numbers); // object (arrays are a type of object in JavaScript)
console.log(typeof greet); // function
