// Dates

// In JavaScript, you can work with dates using the built-in Date object. The Date object provides various methods to create, manipulate, and format dates and times.

// Creating a Date object
const currentDate = new Date(); // This creates a new Date object representing the current date and time.
console.log(currentDate); // When logged to the console, it will display the current date and time in a human-readable format.
console.log(currentDate.toString()); // The toString() method converts the Date object to a string representation of the date and time.
console.log(currentDate.toDateString()); // The toDateString() method returns a string representation of the date portion of the Date object, without the time.

let myCreatedDate = new Date(2000, 9, 13); // This creates a new Date object representing November 13, 2000. Note that the month is zero-indexed (0 = January, 1 = February, ..., 10 = November).
//  myCreatedDate = new Date("01-14-2025"); // This creates a new Date object representing January 14, 2025. The date string is parsed according to the format "MM-DD-YYYY".
// sole.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // The Date.now() method returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC. This is known as the Unix timestamp.
// console.log(myTimeStamp); // When logged to the console, it will display the current timestamp in milliseconds.
// console.log(myCreatedDate.getTime()); // The getTime() method returns the timestamp (in milliseconds) for the specified Date object. In this case, it will return the timestamp for November 13, 2000.

let newDate = new Date();
console.log(newDate.getDay()); // The getDay() method returns the day of the week for the specified date, where 0 represents Sunday, 1 represents Monday, and so on. In this case, it will return the current day of the week as a number between 0 and 6.
console.log(newDate.getDate()); // The getDate() method returns the day of the month for the specified date, as a number between 1 and 31. In this case, it will return the current day of the month.
console.log(newDate.getMonth() + 1); // The getMonth() method returns the month of the year for the specified date, where 0 represents January, 1 represents February, and so on. In this case, it will return the current month as a number between 0 and 11.

newDate.toLocaleString("default", { weekday: "long" }); // The toLocaleString() method can be used to format a Date object according to a specific locale and options. In this case, it will return the full name of the current day of the week (e.g., "Monday", "Tuesday", etc.) based on the default locale of the environment.
