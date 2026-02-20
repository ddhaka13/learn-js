let score1 = "33";
console.log(typeof score);
// The typeof operator returns the type of a variable. In this case, score is a string because it is enclosed in quotes.

let convertedScore1 = Number(score1);
console.log(typeof convertedScore1);
// The Number() function converts a string to a number. In this case, convertedScore is a number because it has been converted from the string "33".

let score2 = "33abc";
let convertedScore2 = Number(score2);
console.log(convertedScore2);
// When a string cannot be fully converted to a number, the Number() function returns NaN (Not-a-Number). In this case, "33abc" cannot be converted to a valid number, so convertedScore2 will be NaN.

let score3 = true;
let convertedScore3 = Number(score3);
console.log(convertedScore3);
// When a boolean value is converted to a number, true is converted to 1 and false is converted to 0. In this case, score3 is true, so convertedScore3 will be 1.

let score4 = null;
let convertedScore4 = Number(score4);
console.log(convertedScore4);
// When null is converted to a number, it is converted to 0. In this case, score4 is null, so convertedScore4 will be 0.

let score5 = undefined;
let convertedScore5 = Number(score5);
console.log(convertedScore5);
// When undefined is converted to a number, it is converted to NaN. In this case, score5 is undefined, so convertedScore5 will be NaN.

let loggedIn = 1;
let convertedLoggedIn = Boolean(loggedIn);
console.log(convertedLoggedIn);
// When a number is converted to a boolean, 0 is converted to false and any non-zero number is converted to true. In this case, loggedIn is 1, so convertedLoggedIn will be true.

// 1 => true  0 => false
// "" => false  " " => true

let num = 224;
let strNum = String(num);
console.log(typeof strNum);
// The String() function converts a number to a string. In this case, num is 224, so strNum will be "224" and its type will be string.

// *********************************** Operations **************************************

let value = 3;
let negValue = -value;
console.log(negValue);
// The unary minus operator (-) negates the value of a number. In this case, value is 3, so negValue will be -3.

console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
// These are basic arithmetic operations: addition (+), subtraction (-), multiplication (*), and division (/). The results will be 12, 4, 32, and 2 respectively.

console.log(8 % 4);
// The modulus operator (%) returns the remainder of a division operation. In this case, 8 divided by 4 leaves no remainder, so the result will be 0.

console.log(2 + "2"); // When a number is added to a string, the number is converted to a string and concatenated. In this case, 2 is converted to "2" and concatenated with "2", resulting in "22".

console.log(2 - "2"); // When a number is subtracted from a string, the string is converted to a number and the subtraction is performed. In this case, "2" is converted to 2, and 2 - 2 results in 0.
console.log(1 + 2 + "3"); // The addition operator is evaluated from left to right. First, 1 + 2 is evaluated to 3, and then 3 + "3" results in "33" because the number 3 is converted to a string and concatenated with "3".
console.log("1" + 2 + 3); // In this case, "1" is a string, so the addition operator will concatenate the values from left to right. First, "1" + 2 results in "12", and then "12" + 3 results in "123".

console.log(+true); // The unary plus operator (+) converts a boolean value to a number. In this case, true is converted to 1, so the result will be 1.
console.log(+""); // The unary plus operator (+) converts an empty string to a number. An empty string is converted to 0, so the result will be 0.

let counter = 100;
counter++;
console.log(counter);
// The increment operator (++) increases the value of a variable by 1. In this case, counter is initially 100, so after counter++ it becomes 101.
++counter;
console.log(counter);
// The pre-increment operator (++counter) also increases the value of a variable by 1, but it does so before the value is used in an expression. In this case, counter is currently 101, so after ++counter it becomes 102 and then is logged to the console.
