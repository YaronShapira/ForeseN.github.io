/*
// Exercise 5 - Number from Digits
// 
// Read 3 digits from the user, join them to one number and print it.
// 
// For example: if the user enters the digits 3, 2 and 6, we should store them in a variable holding the value '326' and then print that variable to the console.
// 
// BONUS: In this case, working with strings is easier. try solving the task while using numeric variables.
*/

var digit1 = prompt("Enter the first digit");
var digit2 = prompt("Enter the second digit");
var digit3 = prompt("Enter the third digit");

var digitsCombined = digit1 + digit2 + digit3;
console.log(digitsCombined);

// BONUS

var digit4 = +prompt("Enter the first digit");
var digit5 = +prompt("Enter the second digit");
var digit6 = +prompt("Enter the third digit");

var digitsCombinedBonus = "" + digit4 + digit5 + digit6;
console.log(digitsCombinedBonus);
