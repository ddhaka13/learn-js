console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
// The double equals operator (==) checks for equality of value, while the triple equals operator (===) checks for both value and type. In this case, 5 == "5" is true because they have the same value, but 5 === "5" is false because they are of different types (number and string).

console.log("2" > 1);
// When comparing a string and a number, JavaScript converts the string to a number before making the comparison. In this case, "2" is converted to the number 2, and 2 > 1 is true.
console.log("2" > "12");
// When comparing two strings, JavaScript compares them lexicographically (like in a dictionary). In this case, "2" is greater than "1" because it comes after "1" in the character encoding, so "2" > "12" is true.
console.log(null > 0); // false
console.log(null == 0); // false null is only equal to undefined, and it is not greater than or less than any number. Therefore, null > 0 is false and null == 0 is also false.
console.log(null >= 0); // true null is considered equal to 0 when using the greater than or equal to operator (>=). This is because null is treated as 0 in this context, so null >= 0 is true.

console.log(undefined > 0); // false
console.log(undefined == 0); // false undefined is not equal to any value, including 0. Therefore, undefined > 0 is false and undefined == 0 is also false.
console.log(undefined >= 0); // false undefined is not greater than or equal to any value, including 0. Therefore, undefined >= 0 is false.

console.log(2 === "2"); // false
// The triple equals operator (===) checks for both value and type. In this case, 2 is a number and "2" is a string, so they are not strictly equal, resulting in false.
