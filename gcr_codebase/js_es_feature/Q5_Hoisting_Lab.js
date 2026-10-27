"use strict";

// Original sequence, corrected so every variable is initialized before use.
var score = 50;
function announce() {
    console.log("Game started");
}
let status = "ready";

console.log(score); // 50
announce();          // Game started
startGame();         // ready

function startGame() {
    console.log(status);
}

// Hoisting notes:
// - var score is hoisted and initialized to undefined; its assignment happens at its line.
// - Function declarations are hoisted with their function body.
// - let status is hoisted but remains in the temporal dead zone until initialized.
// - An arrow function assigned to const/let is not callable before its initialization.
const startGameArrow = () => console.log(status);
startGameArrow();
