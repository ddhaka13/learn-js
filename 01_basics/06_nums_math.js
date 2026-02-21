const score = 100;
console.log(score);

const balance = new Number(500);
console.log(balance);
// This creates a new Number object with the value 500. When logged to the console, it will display as [Number: 500].

console.log(balance.toString());
// The toString() method converts a Number object to a string. In this case, balance is a Number object with the value 500, so balance.toString() will return the string "500".
console.log(balance.toFixed(2));
// The toFixed() method formats a number using fixed-point notation. In this case, balance is 500, and toFixed(2) will format it to have 2 decimal places, resulting in "500.00".
const anotherBalance = 123.456;
console.log(anotherBalance.toPrecision(4));
// The toPrecision() method formats a number to a specified length. In this case, anotherBalance is 123.456, and toPrecision(4) will format it to have 4 significant digits, resulting in "123.5".

const price = 100000000;
console.log(price.toLocaleString("en-IN"));
// The toLocaleString() method converts a number to a string using locale-specific formatting. In this case, price is 100000000, and toLocaleString('en-IN') will format it according to the Indian numbering system, resulting in "10,00,00,000".

// +++++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI); // The Math.PI property represents the ratio of the circumference of a circle to its diameter, which is approximately 3.14159.
console.log(Math.abs(-5)); // The Math.abs() method returns the absolute value of a number. In this case, Math.abs(-5) will return 5.
console.log(Math.round(4.7)); // The Math.round() method rounds a number to the nearest integer. In this case, Math.round(4.7) will return 5.
console.log(Math.floor(4.7)); // The Math.floor() method rounds a number down to the nearest integer. In this case, Math.floor(4.7) will return 4.
console.log(Math.ceil(4.2)); // The Math.ceil() method rounds a number up to the nearest integer. In this case, Math.ceil(4.2) will return 5.
console.log(Math.sqrt(16)); // The Math.sqrt() method returns the square root of a number. In this case, Math.sqrt(16) will return 4.
console.log(Math.pow(2, 3)); // The Math.pow() method returns the base to the exponent power. In this case, Math.pow(2, 3) will return 8, because 2 raised to the power of 3 is 8.
console.log(Math.random()); // The Math.random() method returns a random floating-point number between 0 (inclusive) and 1 (exclusive). Each time you call Math.random(), it will generate a different random number.
console.log(Math.random() * 10 + 1);
// This expression generates a random number between 1 and 10. Math.random() generates a number between 0 and 1, multiplying it by 10 scales it to a range of 0 to 10, and adding 1 shifts the range to 1 to 11 (exclusive), resulting in a random number between 1 and 10.
console.log(Math.floor(Math.random() * 10 + 1));
// This expression generates a random integer between 1 and 10. It works similarly to the previous expression, but the Math.floor() method is used to round down the result to the nearest integer, ensuring that the final output is an integer between 1 and 10 (inclusive).
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// This is a general formula to generate a random integer between a specified minimum (min) and maximum (max) value. The expression Math.random() generates a random number between 0 and 1, multiplying it by (max - min + 1) scales it to the desired range, and adding min shifts the range to start from the minimum value. Finally, Math.floor() rounds down the result to the nearest integer, ensuring that the final output is an integer between min and max (inclusive).
