/*
// Exercise 1 - Welcome
// 
// Use prompt() to read a first name and a last name.
// 
// Declare the variable fullName, and then welcome the user by his full name.
*/

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

var fullName = `${firstName} ${lastName}`;

console.log(`Greetings, ${fullName}`);
