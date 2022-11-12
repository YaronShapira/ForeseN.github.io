/*
// Exercise 18 - Age Check
// 
// Write a function named isAbove18 which receives a name and an age.
// 
// The function should check if the age is above eighteen and use alert to show a message :
// 
// If the user is younger than eighteen, the message will be     -  'You are too young.'
// 
// otherwise, the message will be     -  'You are over 18!'
// 
// Use the user's name within the alerts.
// The function should also return a boolean value - print it to the console.
*/

function isAbove18(name, age) {
    if (age > 18) alert(`${name}, you are over 18!`);
    else alert(`${name}, you are too young.`);
    return age > 18;
}

console.log(isAbove18("Yaron", 20));
console.log(isAbove18("Shapira", 15));
