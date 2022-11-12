/*
// Exercise 10 - Facebook Friends
// 
// Ask the user how many friends he has on FB and print out an analysis:
// 
// More than 500 friends – 'OMG, a celebrity!'
// More than 300 friends (and up to 500) – 'You are well connected!'
// More than 100 friends – 'You know some people...'
// Up to 100 friends – 'Quite picky, aren't you?'
// 0 – 'Let’s be friends!'
*/

var friendsAmount = prompt("How many friends do you have?");
if (friendsAmount > 500) {
    console.log("OMG, a celebrity!");
} else if (friendsAmount > 300) {
    console.log("You are well connected!");
} else if (friendsAmount > 100) {
    console.log("You know some people...");
} else if (friendsAmount > 0) {
    console.log("Quite picky, aren't you?");
} else {
    console.log("Let's be friends!");
}
