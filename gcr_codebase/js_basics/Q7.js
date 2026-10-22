// Q7. Smart Guessing Game
// Generate a secret number between 1 and 50.
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Change this test value to try different guesses.
let userGuess = 25;

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 of the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log("Secret number (for testing):", secretNumber);
