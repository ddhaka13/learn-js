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
