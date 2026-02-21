const name = "Dev";
const age = 25;

console.log(name + " is " + age + " years old."); // This is string concatenation using the + operator. It combines the string "Dev is ", the value of age (25), and the string " years old." to create a single string that is then logged to the console.

console.log(`${name} is ${age} years old.`); // This is string interpolation using template literals. The backticks (`) allow us to embed expressions inside the string using ${}. In this case, ${name} is replaced with "Dev" and ${age} is replaced with 25, resulting in the same output as the previous line.

const gameName = new String("  Chess  ");
console.log(gameName); // This creates a new String object with the value "Chess". When logged to the console, it will display as [String: 'Chess'].

console.log(gameName.length); // The length property of a string returns the number of characters in the string. In this case, gameName is "Chess", which has 5 characters, so gameName.length will return 5.

console.log(gameName.toUpperCase()); // The toUpperCase() method converts all characters in a string to uppercase. In this case, gameName is "Chess", so gameName.toUpperCase() will return "CHESS".
console.log(gameName.charAt(2)); // The charAt() method returns the character at a specified index in a string. In this case, gameName is "Chess", and the character at index 2 (0-based index) is "e", so gameName.charAt(2) will return "e".
console.log(gameName.indexOf("s")); // The indexOf() method returns the index of the first occurrence of a specified value in a string. In this case, gameName is "Chess", and the first occurrence of "s" is at index 3, so gameName.indexOf("s") will return 3.
console.log(gameName.slice(1, 4)); // The slice() method extracts a section of a string and returns it as a new string. In this case, gameName is "Chess", and slice(1, 4) will extract the characters from index 1 to index 3 (4 is not included), resulting in "hes".
console.log(gameName.replace("s", "z")); // The replace() method replaces the first occurrence of a specified value in a string with another value. In this case, gameName is "Chess", and replace("s", "z") will replace the first "s" with "z", resulting in "Chez".
console.log(gameName.split("e")); // The split() method splits a string into an array of substrings based on a specified separator. In this case, gameName is "Chess", and split("e") will split the string at each occurrence of "e", resulting in the array ["Ch", "ss"].
console.log(gameName.trim()); // The trim() method removes whitespace from both ends of a string. In this case, gameName is "Chess", which does not have any leading or trailing whitespace, so gameName.trim() will return "Chess" unchanged.
