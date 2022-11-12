/*
// Exercise 11 - Bank System
// Initialize a variable named currBalance with the value: 1000
// Initialize a constant named PIN with the value: '0796'
// Prompt the user to enter a secret pin code.
// If the user entered the correct pin code, ask him how much he would like to withdraw. Print a nice message with the new balance.
// If the pin code was wrong, alert the user with a different message, and don’t allow him make a withdrawal.
// Add a feature: don’t let the user withdraw more than he has in his account.
*/

var PIN = "0796";
var currBalance = 1000;

var pinInput = prompt("Enter your PIN");
if (pinInput === PIN) {
    var widthrawAmount = +prompt("How much would you like to widthraw?");
    if (currBalance < widthrawAmount) {
        console.log("Not enough minerals!"); // Starcraft fan :D
    } else {
        currBalance -= widthrawAmount;
        console.log(`Your current balance is ${currBalance}`);
    }
} else {
    alert("Incorrect PIN!");
}
