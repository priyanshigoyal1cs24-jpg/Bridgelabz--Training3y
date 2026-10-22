// Q9. Odd-Even Number Analyzer
let numbers = [];
let results = [];

// Store numbers from 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Classify each number
for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
        results.push("FizzBuzz");
    } else if (num % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
}

console.log(results);
