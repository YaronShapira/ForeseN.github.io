/*
// Exercise 8 - The Smallest of Three Numbers
// 
// Read three numbers from the user and print the smallest one.
*/

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var num3 = +prompt("Enter the third number");

var smallestNumber = num1;
if (smallestNumber > num2) smallestNumber = num2;
if (smallestNumber > num3) smallestNumber = num3;

console.log(smallestNumber);
