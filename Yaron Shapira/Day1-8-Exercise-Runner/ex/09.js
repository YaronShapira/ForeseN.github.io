/*
// Exercise 9 - Absolute Value
// 
// Read two positive numbers from the user.
// 
// Calculate the difference between them (the absolute value).
// 
// First, check that the input values are numbers (try googling something like ‘javascript check if number’)
// Print the inputs and the absolute difference between them to the console.
// If the difference is smaller than both input values, print a message to the console saying that those numbers are relatively close.
// 
// It should look something like this –
// 
// num1 = 5, num2 = 9, diff = 4 (numbers are relatively close!)
// 
// num1 = 15, num2 = 89, diff = 74
*/

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");

var isRelativelyClose;
if (Number.isInteger(num1) && Number.isInteger(num2)) {
    var isRelativelyClose = false; // False untill proven otherwise!
    var diff = Math.abs(num1 - num2); // I could use multiple if statements of course or a ternary operator
    if (diff < num1 && diff < num2) isRelativelyClose = true;

    console.log(
        `num1 = ${num1}, num2 = ${num2}, diff = ${diff} ${
            isRelativelyClose ? "(numbers are relatively close!)" : ""
        }`
    );
}
