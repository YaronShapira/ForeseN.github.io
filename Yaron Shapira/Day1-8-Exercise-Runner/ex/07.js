/*
// Exercise 7 - Two Numbers Equal the Third
// 
// Read 3 numbers from the user and check if the 3rd is the sum of the first two.
// 
// If it is, print all the numbers to the console like this: 6 + 4 = 10
// 
// If not, print them like this: 3 + 5 != 10
*/

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var num3 = +prompt("Enter the third number");

if (num1 + num2 === num3) console.log(`${num1} + ${num2} = ${num3}`);
else console.log(`${num1} + ${num2} != ${num3}`);
