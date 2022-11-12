/*
// Exercise 13 - The Elevator
// Keep a currentFloor variable, initialize it to 0
// Ask the user which floor would he like to go to.
// Validate the floor is between -2 and 4.
// Update the currentFloor variable accordingly.
// Let the user know his current floor.
// If the user goes to floor 0 alert 'Bye Bye'.
// If the user goes to the parking lot (negative floors) alert: 'Drive Safely'.
*/

var currentFloor = 0;
var wantedFloor = +prompt("Which floor do you want to go to?");
if (wantedFloor >= -2 && wantedFloor <= 4) {
    currentFloor = wantedFloor;
    if (currentFloor === 0) alert("Bye Bye");
    if (currentFloor < 0) alert("Drive Safely");
}
