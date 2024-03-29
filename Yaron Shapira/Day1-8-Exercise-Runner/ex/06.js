/*
// Exercise 6 - Quadratic Equation
// 
// Read 3 variables from the user: a, band c.
// 
// These will be the a, b and c coefficients of a quadratic equation. (מקדמי משוואה ריבועית)
// 
// Print the values of the following calculations to the console:
// -b
// 2a
// b² - 4ac
// BONUS: a quadratic equation looks like this: ax² + bx + c = 0
// 
// The two solutions for of this equation are X₁ and X₂:
// 
// Print the quadratic equation as a string to the console
// Print the solutions of X₁ and X₂ to the console.
// If the discriminant is 0 – the equation has a single solution
// If the discriminant is negative – the equation has no solutions
// 
// 
// 
// Here’s an example:
// 
// For the following equation:
// 
// 2x² – 5x + 2 = 0
// 
// Your inputs are:
// 
// a = 2, b = -5, c = 2
// 
// your output to the console should be:
// 
// 2x² – 5x + 2 = 0
// 
// x₁ = 2 ; x₂ = 0.5
// 
// 
// 
// 
// Hint: To print the x² to the console, use this: string: 'x\u00B2'
*/

var a = +prompt("Enter the first coefficient of a quadratic equation");
var b = +prompt("Enter the second coefficient of a quadratic equation");
var c = +prompt("Enter the third coefficient of a quadratic equation");

console.log(`-b = ${-b}`);
console.log(`2a = ${2 * a}`);
console.log(`b\u00B2 -4ac = ${b * b - 4 * (a * c)}`);

// BONUS
console.log("---------------------"); // seperation

console.log(a + "x" + "\u00B2" + " - " + b + "x" + " + " + c + " = 0"); // Didn't use template literals to increase the challenge

var discriminant = b * b - 4 * a * c;
if (discriminant < 0) console.log("The equation has no solutions");
else {
    // at least one solution
    var x1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
    var x2 = ((-b - Math.sqrt(discriminant)) / 2) * a;

    console.log(`x₁ = ${x1}`); // let's print the solution and check if there is another one
    if (discriminant !== 0) console.log(`x₂ = ${x2}`);
}
